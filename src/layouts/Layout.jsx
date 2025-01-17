import SimpleNavbar from './SimpleNavbar'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router'
export default function Layout() {
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex flex-col flex-1 ">
                <SimpleNavbar />
                <div className="flex-1 overflow-auto">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}