'use client'

import Link from 'next/link'
import {useEffect, useMemo, useState} from 'react'
import {createClient} from '@/lib/supabase'

type EventOption={id:string;name:string;category:string;date:string|null;time:string|null}
type Registration={registration_group_id:string;participant_name:string;event_name:string;registered_at:string}
type Participant={id:string;name:string;registeredAt:string;events:Set<string>}

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
  const [participantSearch,setParticipantSearch]=useState('')

  async function load(){
    const supabase=createClient()
    const [{data:ev,error:evError},{data:regs,error:regError}]=await Promise.all([
      supabase.from('events').select('id,name,category,date,time').eq('status','published').order('date',{ascending:true}).order('name',{ascending:true}),
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

  const participants=useMemo<Participant[]>(()=>{
    const map=new Map<string,Participant>()
    for(const r of registrations){
      const existing=map.get(r.registration_group_id)
      if(existing){existing.events.add(r.event_name)}
      else map.set(r.registration_group_id,{id:r.registration_group_id,name:r.participant_name,registeredAt:r.registered_at,events:new Set([r.event_name])})
    }
    return Array.from(map.values()).sort((a,b)=>a.registeredAt.localeCompare(b.registeredAt))
  },[registrations])

  const filteredParticipants=useMemo(()=>{
    const query=participantSearch.trim().toLowerCase()
    if(!query) return participants
    return participants.filter(p=>p.name.toLowerCase().includes(query))
  },[participants,participantSearch])

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

        <section className="panel participantsPanel">
          <h2>Registered Participants</h2>
          <p className="small">Names and registered events are shown below. Contact numbers are private and visible only to organizers.</p>
          {loading?<div className="empty">Loading participants…</div>:participants.length?<>
            <div className="participantSearchBar">
              <input
                type="search"
                value={participantSearch}
                onChange={e=>setParticipantSearch(e.target.value)}
                placeholder="Search participant name..."
                aria-label="Search participant name"
              />
            </div>
            {filteredParticipants.length?<div className="participantTableWrap">
              <table className="participantTable">
                <thead><tr><th>S.no</th><th>Name</th>{events.map(event=><th key={event.id}>{event.name}</th>)}</tr></thead>
                <tbody>{filteredParticipants.map((p,i)=><tr key={p.id}><td>{i+1}</td><td className="participantName">{p.name}</td>{events.map(event=><td key={event.id} className="eventMark">{p.events.has(event.name)?<strong>Yes</strong>:''}</td>)}</tr>)}</tbody>
              </table>
            </div>:<div className="empty">No participants found.</div>}
          </>:<div className="empty">No registrations yet.</div>}
        </section>
      </div>
    </div>
  </main>
}
