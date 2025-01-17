import SimpleNavbar from './SimpleNavbar'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router'
export default function Layout() {
    return (
        <div className="flex min-h-screen bg-white">
        {/* Sidebar */}
        <Sidebar />
        
        {/* Main content */}
        <div className="flex flex-col flex-1">
          <SimpleNavbar />
          
          {/* Content Area */}
          <div className="flex-1 p-6 overflow-auto">
            <Outlet />
          </div>
        </div>
      </div>
    )
}