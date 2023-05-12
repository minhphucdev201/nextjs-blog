import * as React from 'react'
import { authApi } from '../api-client'
import { useAuth } from '../hooks'
import { useRouter } from 'next/router'

export default function LoginPage() {
  const router = useRouter()
  const { profile, login, logout } = useAuth({
    revalidateOnMount: false,
  })
  async function handleLogin() {
    try {
      await login()
      router.push('/about')
      console.log('redirect login')
    } catch (error) {
      console.log('fail to login', error)
    }
  }
  async function handleGetProfile() {
    try {
      await profile()
    } catch (error) {
      console.log('fail to get profile', error)
    }
  }
  async function handleLogout() {
    try {
      await logout()
    } catch (error) {
      console.log('fail to logout', error)
    }
  }
  return (
    <div>
      <h1>Login Page</h1>
      <h1>Profile: {JSON.stringify(profile || {}, null, 4)}</h1>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <button onClick={() => router.push('/about')}>Go to about</button>
    </div>
  )
}
