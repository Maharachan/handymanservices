import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
import TopBar from '@/components/TopBar'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useAuthStore } from '@/store/useAuthStore'

const Login = () => {
  const navigate = useNavigate()
  const { setIsLoggedIn, getUserData } = useAuthStore()
  const backendUrl = import.meta.env.VITE_BACKEND_URL

  const [state, setState] = useState('Sign Up')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      axios.defaults.withCredentials = true

      if (state === 'Sign Up') {
        const { data } = await axios.post(`${backendUrl}/api/auth/register`, { name, email, password })
        if (data.success) {
          setIsLoggedIn(true)
          await getUserData()
          navigate('/')
        } else {
          toast.error(data.message)
        }
      } else {
        const { data } = await axios.post(`${backendUrl}/api/auth/login`, { email, password })
        if (data.success) {
          setIsLoggedIn(true)
          await getUserData()
          navigate('/')
        } else {
          toast.error(data.message)
        }
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
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              {state === 'Sign Up' ? 'Create your account' : 'Sign in to your account'}
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              {state === 'Sign Up' ? 'Join our community today' : 'Welcome back'}
            </p>
          </div>
          
          <form className="mt-8 space-y-6" onSubmit={onSubmitHandler}>
            <div className="rounded-md shadow-sm space-y-4">
              {state === 'Sign Up' && (
                <div>
                  <label htmlFor="name" className="sr-only">Full Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={name}
                    onChange={e => setName(e.target.value)}
                    className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#FF4A17] focus:border-[#FF4A17] focus:z-10 sm:text-sm"
                    placeholder="Full Name"
                  />
                </div>
              )}
              
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
              
              <div>
                <label htmlFor="password" className="sr-only">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#FF4A17] focus:border-[#FF4A17] focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            {state === 'Login' && (
              <div className="flex items-center justify-end">
                <div className="text-sm">
                  <button
                    type="button"
                    onClick={() => navigate('/reset-password')}
                    className="font-medium text-[#FF4A17] hover:text-[#ff4a17]/90"
                  >
                    Forgot your password?
                  </button>
                </div>
              </div>
            )}

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#FF4A17] hover:bg-[#ff4a17]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF4A17]"
              >
                {state}
              </button>
            </div>
          </form>

          <div className="text-center">
            <p className="text-sm text-gray-600">
              {state === 'Sign Up' ? 'Already have an account?' : "Don't have an account?"}{' '}
              <button
                onClick={() => setState(state === 'Sign Up' ? 'Login' : 'Sign Up')}
                className="font-medium text-[#FF4A17] hover:text-[#ff4a17]/90"
              >
                {state === 'Sign Up' ? 'Sign in' : 'Sign up'}
              </button>
            </p>
          </div>
        </div>
      </div>

     
    </div>
     <Footer />
    </>
  )
}

export default Login