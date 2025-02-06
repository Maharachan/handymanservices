import { useAuthStore } from '@/store/useAuthStore'
import TopBar from '@/components/TopBar'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const AdminPage = () => {
  const { userData } = useAuthStore()

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
                Admin Dashboard
              </h2>
              <p className="mt-2 text-center text-sm text-gray-600">
                Welcome, {userData?.name}
              </p>
            </div>

            {/* Add your admin dashboard content here */}
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-900">Admin Controls</h3>
              <div className="mt-4 space-y-4">
                {/* Add your admin controls/features here */}
                <p className="text-gray-600">Role: {userData?.role}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AdminPage