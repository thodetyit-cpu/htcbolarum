'use client'

import {useState} from 'react'
import {createClient} from '@/lib/supabase'

export default function ForgotPassword(){
  const [email,setEmail]=useState('')
  const [message,setMessage]=useState('')
  const [error,setError]=useState('')
  const [loading,setLoading]=useState(false)

  async function submit(e:React.FormEvent){
    e.preventDefault()
    setLoading(true)
    setMessage('')
    setError('')

    const supabase=createClient()
    const redirectTo=`${window.location.origin}/admin/reset-password`
    const {error}=await supabase.auth.resetPasswordForEmail(email,{redirectTo})

    if(error) setError(error.message)
    else setMessage('If this email belongs to an admin account, a password reset link has been sent. Check your inbox and spam folder.')
    setLoading(false)
  }

  return <main className="login">
    <form className="loginCard" onSubmit={submit}>
      <h1 style={{fontFamily:'Georgia',color:'var(--navy)'}}>Reset Password</h1>
      <p className="small">Enter your admin email address and we’ll send you a secure password reset link.</p>
      {error&&<div className="error">{error}</div>}
      {message&&<div className="notice">{message}</div>}
      <div className="field">
        <label>Email</label>
        <input type="email" value={email} onChange={e=>setEmail(e.target.value)} required autoComplete="email" placeholder="admin@example.com"/>
      </div>
      <button className="btn primary" style={{marginTop:18,width:'100%'}} disabled={loading}>
        {loading?'Sending…':'Send reset link'}
      </button>
      <p style={{textAlign:'center',margin:'16px 0 0'}}>
        <a href="/admin/login" className="link">← Back to login</a>
      </p>
    </form>
  </main>
}
