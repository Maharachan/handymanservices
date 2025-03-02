import { useEffect } from "react"
import { ToastContainer } from "react-toastify"
import { RouterProvider } from "react-router-dom"
import { router } from "./routes"
import { useAuthStore } from "./store/useAuthStore"

const App = () => {
  const checkAuth = useAuthStore(state => state.checkAuth)

  useEffect(() => {
    checkAuth()
  }, [])

  return (
    <div>
      <ToastContainer position="top-right" autoClose={3000} />
      <RouterProvider router={router} />
    </div>
  )
}

export default App