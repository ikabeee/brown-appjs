import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
} from "@material-tailwind/react";
import {
    PresentationChartBarIcon,
    ShoppingBagIcon,
    UserCircleIcon,
    Cog6ToothIcon,
    InboxIcon,
    PowerIcon,
} from "@heroicons/react/24/solid";
import { Outlet } from "react-router";

const user = {
    "name": "Carlos",
    "lastName": "Gonzalez"
}

export default function Sidebar() {
    return (

        <div className="flex bg-white">
            <Card className="h-[calc(100vh-.01rem)] w-full max-w-[16rem] p-4 shadow-xl shadow-blue-gray-900/5 bg-[#D9D0C1] rounded-none">

                <div className="mb-2 p-4">
                    <Typography variant="h5" className="text-[#40251B] font-bold text-center" >
                        Welcome, {user.name} {user.lastName}
                    </Typography>
                </div>

                <List className="flex-1">

                    <ListItem className="group hover:bg-[#40251B] hover:text-[#D9D0C1] focus:bg-[#40251B] focus:text-[#D9D0C1] text-[#40251B] font-bold active:bg-[#40251B] active:text-[#D9D0C1]">
                        <ListItemPrefix>
                            <PresentationChartBarIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Dashboard
                    </ListItem>

                    <ListItem className="group hover:bg-[#40251B] hover:text-[#D9D0C1] focus:bg-[#40251B] focus:text-[#D9D0C1] text-[#40251B] font-bold active:bg-[#40251B] active:text-[#D9D0C1]">
                        <ListItemPrefix>
                            <ShoppingBagIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        E-Commerce
                    </ListItem>

                    <ListItem className="group hover:bg-[#40251B] hover:text-[#D9D0C1] focus:bg-[#40251B] focus:text-[#D9D0C1] text-[#40251B] font-bold active:bg-[#40251B] active:text-[#D9D0C1]">
                        <ListItemPrefix>
                            <InboxIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Inbox
                        <ListItemSuffix>
                            <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
                        </ListItemSuffix>
                    </ListItem>

                    <ListItem className="group hover:bg-[#40251B] hover:text-[#D9D0C1] focus:bg-[#40251B] focus:text-[#D9D0C1] text-[#40251B] font-bold active:bg-[#40251B] active:text-[#D9D0C1]">
                        <ListItemPrefix>
                            <UserCircleIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Profile
                    </ListItem>

                </List>

                <ListItem className="group hover:bg-[#40251B] hover:text-[#D9D0C1] focus:bg-[#40251B] focus:text-[#D9D0C1] text-[#40251B] font-bold active:bg-[#40251B] active:text-[#D9D0C1]">
                    <ListItemPrefix>
                        <Cog6ToothIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Settings
                </ListItem>

                <ListItem className="group hover:bg-[#40251B] hover:text-[#D9D0C1] focus:bg-[#40251B] focus:text-[#D9D0C1] text-[#40251B] font-bold active:bg-[#40251B] active:text-[#D9D0C1]">
                    <ListItemPrefix>
                        <PowerIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Log Out
                </ListItem>
            </Card>
            <div className="flex-1 p-4">
                <Outlet/>
            </div>
        </div>

    );
}