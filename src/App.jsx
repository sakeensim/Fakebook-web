import { Outlet } from "react-router"
import useUserStore from "./stores/userStore"
import Header from "./components/Header"


function App() {
  const user = useUserStore(state => state.user)
  const logout = useUserStore(state => state.logout)
  return (
   <div className="min-h-screen bg-lime-100">
    <Header />
    <main className="relative flex bg-gray-100 border pt-14">
      <p>Sidebar + posts</p>


    </main>
   </div>
  )
}

export default App
