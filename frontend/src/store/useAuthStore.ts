import { create } from 'zustand'
import axios from 'axios'
import { toast } from 'react-toastify'

type UserData = {
  name: string
  email: string
  role: string
  isAccountVerified: boolean
} | null

type AuthStore = {
  isLoggedIn: boolean
  userData: UserData
  isLoading: boolean
  setIsLoggedIn: (value: boolean) => void
  setUserData: (data: UserData) => void
  getUserData: () => Promise<void>
  checkAuth: () => Promise<void>
  logout: () => Promise<void>
  sendVerificationOtp: () => Promise<boolean>
}

const backendUrl = import.meta.env.VITE_BACKEND_URL

export const useAuthStore = create<AuthStore>((set) => ({
  isLoggedIn: false,
  userData: null,
  isLoading: true,

  setIsLoggedIn: (value) => set({ isLoggedIn: value }),
  setUserData: (data) => set({ userData: data }),

  getUserData: async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/user/data`, {
        withCredentials: true
      })
      if (data.success) {
        set({ userData: data.userData })
      } else {
        set({ userData: null, isLoggedIn: false })
      }
    } catch (error) {
      set({ userData: null, isLoggedIn: false })
      console.error('Error fetching user data:', error)
    }
  },

  checkAuth: async () => {
    try {
      set({ isLoading: true })
      const { data } = await axios.get(`${backendUrl}/api/auth/is-auth`, {
        withCredentials: true
      })
      if (data.success) {
        set({ isLoggedIn: true })
        await useAuthStore.getState().getUserData()
      } else {
        set({ isLoggedIn: false, userData: null })
      }
    } catch (error) {
      set({ isLoggedIn: false, userData: null })
      console.error('Auth check error:', error)
    } finally {
      set({ isLoading: false })
    }
  },

  logout: async () => {
    try {
      const { data } = await axios.post(`${backendUrl}/api/auth/logout`, {}, {
        withCredentials: true
      })
      if (data.success) {
        set({ isLoggedIn: false, userData: null })
        toast.success('Logged out successfully')
      }
    } catch (error) {
      toast.error('Error logging out')
    }
  },

  sendVerificationOtp: async () => {
    try {
      const { data } = await axios.post(`${backendUrl}/api/auth/send-verify-otp`, {}, {
        withCredentials: true
      })

      if (data.success) {
        toast.success(data.message)
        return true
      } else {
        toast.error(data.message)
        return false
      }
    } catch (error: any) {
      toast.error(error.message)
      return false
    }
  }
})) 