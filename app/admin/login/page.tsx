'use client'

import {useState} from 'react'
import {useRouter} from 'next/navigation'
import {createClient} from '@/lib/supabase'

export default function Login(){
  const router=useRouter()
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [error,setError]=useState('')
  const [loading,setLoading]=useState(false)

  async function submit(e:React.FormEvent){
    e.preventDefault()
    setLoading(true)
    setError('')
    const supabase=createClient()
    const {error}=await supabase.auth.signInWithPassword({email,password})
    if(error) setError(error.message)
    else router.replace('/admin')
    setLoading(false)
  }

  return <main className="login">
    <form className="loginCard" onSubmit={submit}>
      <h1 style={{fontFamily:'Georgia',color:'var(--navy)'}}>Organizer Login</h1>
      <p className="small">CSI Holy Trinity Church · 180th Year Celebration</p>
      {error&&<div className="error">{error}</div>}
      <div className="field">
        <label>Email</label>
        <input type="email" value={email} onChange={e=>setEmail(e.target.value)} required autoComplete="email"/>
      </div>
      <div className="field" style={{marginTop:12}}>
        <label>Password</label>
        <input type="password" value={password} onChange={e=>setPassword(e.target.value)} required autoComplete="current-password"/>
      </div>
      <button className="btn primary" style={{marginTop:18,width:'100%'}} disabled={loading}>
        {loading?'Signing in…':'Sign in'}
      </button>
      <p style={{textAlign:'center',margin:'16px 0 0'}}>
        <a href="/admin/forgot-password" className="link">Forgot your password?</a>
      </p>
      <p className="small" style={{marginTop:15}}>Admin accounts are created in Supabase Auth. Never put an admin password in GitHub.</p>
    </form>
  </main>
}
