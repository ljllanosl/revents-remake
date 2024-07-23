import { create } from 'zustand'
import { User } from '../../types'
import { persist } from 'zustand/middleware'

interface State {
  authenticated: boolean
  currentUser: User | null
  signIn: (email: string) => void
  signOut: () => void
}

export const useAuthStore = create<State>()(
  persist((set) => ({
    authenticated: false,
    currentUser: null,
    signIn: (email) =>
      set(() => ({
        authenticated: true,
        currentUser: {
          email: email,
          photoURL: '/user.png'
        }
      })),
    signOut: () =>
      set(() => ({
        authenticated: false,
        currentUser: null
      }))
  }),
    { name: 'authentication' })
)