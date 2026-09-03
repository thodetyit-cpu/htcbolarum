'use client'

import Link from 'next/link'
import {useEffect, useState} from 'react'
import {createClient} from '@/lib/supabase'

type EventOption={id:string;name:string;category:string;date:string|null;time:string|null}
type Registration={participant_name:string;event_name:string;registered_at:string}

export default function RegisterPage(){
  const [events,setEvents]=useState<EventOption[]>([])
  const [selected,setSelected]=useState<string[]>([])
  const [name,setName]=useState('')
  const [phone,setPhone]=useState('')
  const [registrations,setRegistrations]=useState<Registration[]>([])
  const [loading,setLoading]=useState(true)
  const [submitting,setSubmitting]=useState(false)
  const [message,setMessage]=useState('')
  const [error,setError]=useState('')

  async function load(){
    const supabase=createClient()
    const [{data:ev,error:evError},{data:regs,error:regError}]=await Promise.all([
      supabase.from('events').select('id,name,category,date,time').eq('status','published').order('date',{ascending:true}),
      supabase.rpc('get_public_registrations')
    ])
    if(evError) setError(evError.message)
    else setEvents((ev||[]) as EventOption[])
    if(regError) setError(regError.message)
    else setRegistrations((regs||[]) as Registration[])
    setLoading(false)
  }

  useEffect(()=>{load()},[])

  function toggle(id:string){
    setSelected(current=>current.includes(id)?current.filter(x=>x!==id):[...current,id])
  }

  async function submit(e:React.FormEvent){
    e.preventDefault()
    setSubmitting(true);setMessage('');setError('')
    if(selected.length===0){setError('Please select at least one event.');setSubmitting(false);return}
    const supabase=createClient()
    const {data,error}=await supabase.rpc('register_for_events',{p_name:name,p_phone:phone,p_event_ids:selected})
    if(error){setError(error.message);setSubmitting(false);return}
    setMessage(`Registration submitted successfully for ${selected.length} event${selected.length===1?'':'s'}.`)
    setName('');setPhone('');setSelected([])
    await load()
    setSubmitting(false)
  }

  return <main className="registerPage">
    <div className="registerWrap">
      <div className="registerTop"><Link className="link" href="/">← Back to website</Link></div>
      <div className="sectionHead"><div><h1>Event Registration</h1><p>Select all competitions you want to participate in. Enter your name and phone number once.</p></div></div>
      <div className="registerGrid">
        <section className="panel">
          <h2>Register to Participate</h2>
          {error&&<div className="error">{error}</div>}
          {message&&<div className="notice">{message}</div>}
          <form onSubmit={submit}>
            <div className="formGrid">
              <div className="field full"><label>Name</label><input value={name} onChange={e=>setName(e.target.value)} required maxLength={100} placeholder="Your full name"/></div>
              <div className="field full"><label>Phone number</label><input type="tel" value={phone} onChange={e=>setPhone(e.target.value)} required maxLength={25} placeholder="Your phone number"/></div>
            </div>
            <h3 className="formSubhead">Select events</h3>
            <div className="eventChoices">
              {loading?<div className="small">Loading events…</div>:events.map(event=><label className={`eventChoice ${selected.includes(event.id)?'checked':''}`} key={event.id}>
                <input type="checkbox" checked={selected.includes(event.id)} onChange={()=>toggle(event.id)}/>
                <span><strong>{event.name}</strong><small>{event.category}{event.date?` · ${event.date}`:''}{event.time?` · ${event.time}`:''}</small></span>
              </label>)}
            </div>
            <button className="btn primary" type="submit" disabled={submitting||loading||events.length===0}>{submitting?'Submitting…':'Register for selected events'}</button>
          </form>
        </section>

        <section className="panel">
          <h2>Registered Participants</h2>
          <p className="small">Names and registered events are visible here. Phone numbers are kept private and are visible only to organizers.</p>
          <div className="registrationList">
            {registrations.length?registrations.map((r,i)=><div className="registrationRow" key={`${r.participant_name}-${r.event_name}-${r.registered_at}-${i}`}><strong>{r.participant_name}</strong><span>{r.event_name}</span></div>):<div className="empty">No registrations yet.</div>}
          </div>
        </section>
      </div>
    </div>
  </main>
}
