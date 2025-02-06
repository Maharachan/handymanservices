import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
import TopBar from '@/components/TopBar'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const ResetPassword = () => {
  const navigate = useNavigate()
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])
  const backendUrl = import.meta.env.VITE_BACKEND_URL

  const [email, setEmail] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [isEmailSent, setIsEmailSent] = useState(false)
  const [otp, setOtp] = useState('')
  const [isOtpSubmited, setIsOtpSubmited] = useState(false)

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    if (e.target.value.length > 0 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace' && (e.target as HTMLInputElement).value === '' && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  }

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const paste = e.clipboardData.getData('text')
    const pasteArray = paste.split('');
    pasteArray.forEach((char, index) => {
      if (inputRefs.current[index]) {
        inputRefs.current[index].value = char;
      }
    })
  }

  const onSubmitEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(backendUrl + '/api/auth/send-reset-otp', { email })
      if (data.success) {
        toast.success(data.message)
        setIsEmailSent(true)
      } else {
        toast.error(data.message)
      }
    } catch (error: any) {
      toast.error(error.message)
    }
  }

  const onSubmitOtp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const otpArray = inputRefs.current.map(input => input?.value || '')
    const otpString = otpArray.join('')
    setOtp(otpString)
    setIsOtpSubmited(true)
  }

  const onSubmitNewPassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(backendUrl + '/api/auth/reset-password', { email, otp, newPassword })
      if (data.success) {
        toast.success(data.message)
        navigate('/login')
      } else {
        toast.error(data.message)
      }
    } catch (error: any) {
      toast.error(error.message)
    }
  }

  return (
    <>
      <div className="min-h-screen flex flex-col bg-white">
        <TopBar />
        <Header />
        <Navbar />
        
        <div className="flex-1 flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
            {!isEmailSent && (
              <form onSubmit={onSubmitEmail} className="mt-8 space-y-6">
                <div>
                  <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Reset Password</h2>
                  <p className="mt-2 text-center text-sm text-gray-600">Enter your registered email address</p>
                </div>
                <div className="rounded-md shadow-sm space-y-4">
                  <div>
                    <label htmlFor="email" className="sr-only">Email address</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#FF4A17] focus:border-[#FF4A17] focus:z-10 sm:text-sm"
                      placeholder="Email address"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#FF4A17] hover:bg-[#ff4a17]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF4A17]"
                >
                  Send Reset Code
                </button>
              </form>
            )}

            {!isOtpSubmited && isEmailSent && (
              <form onSubmit={onSubmitOtp} className="mt-8 space-y-6">
                <div>
                  <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Enter Reset Code</h2>
                  <p className="mt-2 text-center text-sm text-gray-600">Enter the 6-digit code sent to your email</p>
                </div>
                <div className="flex justify-between gap-2" onPaste={handlePaste}>
                  {Array(6).fill(0).map((_, index) => (
                    <input
                      key={index}
                      type="text"
                      maxLength={1}
                      ref={el => inputRefs.current[index] = el as HTMLInputElement}
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
                  Verify Code
                </button>
              </form>
            )}

            {isOtpSubmited && isEmailSent && (
              <form onSubmit={onSubmitNewPassword} className="mt-8 space-y-6">
                <div>
                  <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Set New Password</h2>
                  <p className="mt-2 text-center text-sm text-gray-600">Enter your new password</p>
                </div>
                <div className="rounded-md shadow-sm space-y-4">
                  <div>
                    <label htmlFor="newPassword" className="sr-only">New Password</label>
                    <input
                      id="newPassword"
                      name="newPassword"
                      type="password"
                      required
                      value={newPassword}
                      onChange={e => setNewPassword(e.target.value)}
                      className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#FF4A17] focus:border-[#FF4A17] focus:z-10 sm:text-sm"
                      placeholder="New Password"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#FF4A17] hover:bg-[#ff4a17]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF4A17]"
                >
                  Reset Password
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ResetPassword