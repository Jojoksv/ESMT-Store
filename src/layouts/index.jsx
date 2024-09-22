import { Outlet } from "react-router-dom"
import Header from "./Header"


function Layout() {
  return (
    <div className="main-container">
        <Header />
        <main>
            <Outlet />
        </main>
    </div>
  )
}

export default Layout