'use client'

import {useEffect,useState} from 'react'
import {useRouter} from 'next/navigation'
import {createClient} from '@/lib/supabase'

export default function ResetPassword(){
  const router=useRouter()
  const [ready,setReady]=useState(false)
  const [password,setPassword]=useState('')
  const [confirmPassword,setConfirmPassword]=useState('')
  const [error,setError]=useState('')
  const [message,setMessage]=useState('')
  const [loading,setLoading]=useState(false)

  useEffect(()=>{
    const supabase=createClient()
    let active=true

    async function checkRecoverySession(){
      const {data,error}=await supabase.auth.getSession()
      if(!active) return
      if(error){
        setError(error.message)
        return
      }
      if(data.session){
        setReady(true)
        if(window.location.hash) window.history.replaceState({},document.title,window.location.pathname)
        return
      }
      setError('This password reset link is invalid or has expired. Please request a new reset link.')
    }

    const {data:listener}=supabase.auth.onAuthStateChange((event,session)=>{
      if(!active) return
      if(event==='PASSWORD_RECOVERY' && session){
        setReady(true)
        setError('')
        window.history.replaceState({},document.title,window.location.pathname)
      }
    })

    checkRecoverySession()

    return ()=>{
      active=false
      listener.subscription.unsubscribe()
    }
  },[])

  async function submit(e:React.FormEvent){
    e.preventDefault()
    setError('')
    setMessage('')

    if(password.length<8){
      setError('Password must be at least 8 characters long.')
      return
    }
    if(password!==confirmPassword){
      setError('Passwords do not match.')
      return
    }

    setLoading(true)
    const supabase=createClient()
    const {error}=await supabase.auth.updateUser({password})

    if(error){
      setError(error.message)
      setLoading(false)
      return
    }

    setMessage('Password updated successfully. Redirecting to admin login…')
    await supabase.auth.signOut()
    setTimeout(()=>router.replace('/admin/login'),1200)
  }

  return <main className="login">
    <form className="loginCard" onSubmit={submit}>
      <h1 style={{fontFamily:'Georgia',color:'var(--navy)'}}>Set New Password</h1>
      <p className="small">Choose a new password for your church administrator account.</p>
      {error&&<div className="error">{error}</div>}
      {message&&<div className="notice">{message}</div>}
      {!ready&&!error&&<div className="notice">Verifying your secure reset link…</div>}
      {ready&&<>
        <div className="field">
          <label>New password</label>
          <input type="password" value={password} onChange={e=>setPassword(e.target.value)} required minLength={8} autoComplete="new-password"/>
        </div>
        <div className="field" style={{marginTop:12}}>
          <label>Confirm new password</label>
          <input type="password" value={confirmPassword} onChange={e=>setConfirmPassword(e.target.value)} required minLength={8} autoComplete="new-password"/>
        </div>
        <p className="small" style={{marginTop:8}}>Use at least 8 characters.</p>
        <button className="btn primary" style={{marginTop:10,width:'100%'}} disabled={loading}>
          {loading?'Updating…':'Update password'}
        </button>
      </>}
      <p style={{textAlign:'center',margin:'16px 0 0'}}>
        <a href="/admin/login" className="link">← Back to login</a>
      </p>
    </form>
  </main>
}
