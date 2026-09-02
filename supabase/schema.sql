-- Run this once in Supabase SQL Editor.
create extension if not exists pgcrypto;

create table if not exists public.admin_users (
  user_id uuid primary key references auth.users(id) on delete cascade,
  created_at timestamptz not null default now()
);

create table if not exists public.events (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  name text not null,
  category text not null default 'General',
  description text,
  date date,
  time text,
  venue text,
  rules text[] not null default '{}',
  instructions text,
  image_url text,
  status text not null default 'published' check (status in ('draft','published')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.coordinators (
  id uuid primary key default gen_random_uuid(),
  event_id uuid not null references public.events(id) on delete cascade,
  name text not null,
  phone text,
  email text
);

create table if not exists public.site_settings (
  key text primary key,
  value text not null
);

alter table public.admin_users enable row level security;
alter table public.events enable row level security;
alter table public.coordinators enable row level security;
alter table public.site_settings enable row level security;

create or replace function public.is_admin() returns boolean language sql stable security definer set search_path=public as $$
  select exists(select 1 from public.admin_users where user_id = auth.uid());
$$;

-- Public website can read published content.
create policy "public read published events" on public.events for select using (status='published' or public.is_admin());
create policy "public read coordinators" on public.coordinators for select using (exists(select 1 from public.events e where e.id=event_id and (e.status='published' or public.is_admin())));
create policy "public read site settings" on public.site_settings for select using (true);

-- Only registered admin users can change content.
create policy "admins manage events" on public.events for all using (public.is_admin()) with check (public.is_admin());
create policy "admins manage coordinators" on public.coordinators for all using (public.is_admin()) with check (public.is_admin());
create policy "admins manage settings" on public.site_settings for all using (public.is_admin()) with check (public.is_admin());
create policy "admins read admin users" on public.admin_users for select using (public.is_admin());

insert into public.site_settings(key,value) values
('hero_image','/assets/church.jpg'),
('csi_logo','/assets/csi.png'),
('htc_logo','/assets/htc.jpg')
on conflict (key) do nothing;

insert into public.events(slug,name,category,rules,instructions)
values
('quiz-competition','Quiz Competition','General',array['Event rules to be announced by the committee.'],'Please check the published event details before attending.'),
('singing-competition','Singing Competition','Cultural',array['Event rules to be announced by the committee.'],'Please check the published event details before attending.'),
('volleyball','Volleyball','Sports',array['Event rules to be announced by the committee.'],'Please check the published event details before attending.'),
('throwball','Throwball','Sports',array['Event rules to be announced by the committee.'],'Please check the published event details before attending.'),
('cricket','Cricket','Sports',array['Event rules to be announced by the committee.'],'Please check the published event details before attending.'),
('football','Football','Sports',array['Event rules to be announced by the committee.'],'Please check the published event details before attending.'),
('musical-chairs','Musical Chairs','Cultural',array['Event rules to be announced by the committee.'],'Please check the published event details before attending.')
on conflict (slug) do nothing;

-- Storage bucket for admin-managed images.
insert into storage.buckets(id,name,public) values ('site-assets','site-assets',true) on conflict (id) do nothing;
create policy "public view site assets" on storage.objects for select using (bucket_id='site-assets');
create policy "admins upload site assets" on storage.objects for insert with check (bucket_id='site-assets' and public.is_admin());
create policy "admins update site assets" on storage.objects for update using (bucket_id='site-assets' and public.is_admin()) with check (bucket_id='site-assets' and public.is_admin());
create policy "admins delete site assets" on storage.objects for delete using (bucket_id='site-assets' and public.is_admin());
