import * as React from 'react'
import { authApi } from '../api-client'

export default function LoginPage() {
  async function handleLogin() {
    try {
      await authApi.login({
        username: 'phucdev',
        password: 'phucdev',
      })
    } catch (error) {
      console.log('fail to login', error)
    }
  }
  async function handleGetProfile() {
    try {
      await authApi.getProfile()
    } catch (error) {
      console.log('fail to login', error)
    }
  }
  async function handleLogout() {
    try {
      await authApi.logout()
    } catch (error) {
      console.log('fail to login', error)
    }
  }
  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleGetProfile}>Get Profile</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}
