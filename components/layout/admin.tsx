import { LayoutProps } from '@/models/index'
import Link from 'next/link'
import * as React from 'react'
import { Auth } from '../common'
import { useAuth } from '@/hooks/use-auth'
import { useRouter } from 'next/router'

export function AdminLayout({ children }: LayoutProps) {
  const { logout, profile } = useAuth()
  const router = useRouter()
  async function handleLogout() {
    try {
      await logout()
      router.push('/login')
    } catch (error) {
      console.log('fail to logout', error)
    }
  }
  return (
    <Auth>
      <h1>Admin layout</h1>
      <Link href="/">Sidebar</Link>
      <p>Profile: {JSON.stringify(profile)}</p>
      <button onClick={() => handleLogout()}>Logout</button>
      <br />
      <Link href="/">Home</Link>
      <br />
      <Link href="/about">About</Link>
      <div>{children}</div>
    </Auth>
  )
}
