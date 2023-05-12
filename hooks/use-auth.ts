import useSWR, { SWRConfiguration } from 'swr'
import { authApi } from '../api-client'
export function useAuth(options?: Partial<SWRConfiguration>) {
  const {
    data: profile,
    error,
    mutate,
  } = useSWR('/profile', {
    dedupingInterval: 60 * 60 * 1000, // 1 hr
    revalidateOnFocus: false,
    ...options,
  })
  console.log({ profile, error })
  const firstLoading = profile === undefined && error === undefined
  async function login() {
    await authApi.login({
      username: 'phucdev',
      password: '123456',
    })
    await mutate()
  }
  async function logout() {
    await authApi.logout()
    mutate({}, false)
  }
  return {
    profile,
    error,
    login,
    logout,
    firstLoading,
  }
}
