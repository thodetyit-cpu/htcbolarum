# HTC Bolarum 180th Celebration — Production Setup

This version replaces the browser-only admin with Supabase Auth + Postgres + Storage. It is designed for deployment on Vercel.

## 1. Create Supabase project
Create a project at Supabase. In SQL Editor, run `supabase/schema.sql`.

## 2. Create the admin account
In Supabase Dashboard → Authentication → Users, create the organizer's email/password user.
Then copy that user's UUID and run:

```sql
insert into public.admin_users(user_id) values ('PASTE_USER_UUID_HERE');
```

Do not put the password in this repository.

## 3. Environment variables
Create `.env.local` locally or add the same variables in Vercel Project Settings → Environment Variables:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

Get both from Supabase Project Settings → API.

## 4. Local test

```bash
npm install
npm run dev
```

Open `/admin/login` and sign in with the Supabase admin account.

## 5. Vercel
Push this folder to GitHub and import the repository into Vercel. Add the two environment variables before deploying. Your existing custom domain can remain attached to the Vercel project.

## What the admin can do
- Sign in securely
- Add, edit, publish/draft and delete competitions
- Set date, time, venue, description, rules and instructions
- Add multiple coordinators with phone/email
- Upload event images
- Change the hero image and church/CSI logos
- Changes are shared across all visitors/devices

## Security
Supabase Row Level Security is enabled. The public can read published event content, while writes require a user listed in `admin_users`. Never expose a Supabase service-role key in browser code or GitHub.
