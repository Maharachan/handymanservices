import React, { useEffect, useRef } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useAuthStore } from '@/store/useAuthStore'
import TopBar from '@/components/TopBar'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const EmailVerify = () => {
  const navigate = useNavigate()
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])
  const { isLoggedIn, userData, getUserData, isLoading } = useAuthStore()
  const backendUrl = import.meta.env.VITE_BACKEND_URL

  useEffect(() => {
    if (!isLoading) {
      if (!isLoggedIn) {
        navigate('/login', { replace: true })
      } else if (userData?.isAccountVerified) {
        navigate('/', { replace: true })
      }
    }
  }, [isLoading, isLoggedIn, userData, navigate])

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    if (e.target.value.length > 0 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace' && (e.target as HTMLInputElement).value === '' && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault()
    const paste = e.clipboardData.getData('text')
    const pasteArray = paste.split('')
    pasteArray.forEach((char, index) => {
      if (inputRefs.current[index]) {
        inputRefs.current[index].value = char
      }
    })
  }

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault()
      const otpArray = inputRefs.current.map(input => input?.value || '')
      const otp = otpArray.join('')

      const { data } = await axios.post(
        `${backendUrl}/api/auth/verify-account`, 
        { otp },
        { 
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )

      if (data.success) {
        toast.success(data.message)
        await getUserData()
        navigate('/', { replace: true })
      } else {
        toast.error(data.message)
      }
    } catch (error: any) {
      if (error.response?.status === 401) {
        toast.error('Session expired. Please login again.')
        navigate('/login', { replace: true })
      } else {
        toast.error(error.message || 'Failed to verify email')
      }
    }
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <>
      <div className="min-h-screen flex flex-col bg-white">
        <TopBar />
        <Header />
        <Navbar />
        
        <div className="flex-1 flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
            <div>
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Verify Your Email
              </h2>
              <p className="mt-2 text-center text-sm text-gray-600">
                Enter the 6-digit code sent to your email
              </p>
            </div>

            <form onSubmit={onSubmitHandler} className="mt-8 space-y-6">
              <div className="flex justify-between gap-2" onPaste={handlePaste}>
                {Array(6).fill(0).map((_, index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength={1}
                    ref={el => inputRefs.current[index] = el}
                    onInput={(e: React.ChangeEvent<HTMLInputElement>) => handleInput(e, index)}
                    onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => handleKeyDown(e, index)}
                    className="w-12 h-12 text-center border-gray-300 rounded-md text-lg focus:ring-[#FF4A17] focus:border-[#FF4A17]"
                    required
                  />
                ))}
              </div>

              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#FF4A17] hover:bg-[#ff4a17]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF4A17]"
              >
                Verify Email
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default EmailVerify