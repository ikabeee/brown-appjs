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
    UserCircleIcon,
    Cog6ToothIcon,
    PowerIcon,
    BellAlertIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router";
const user = {
    "name": "Carlos",
    "lastName": "Gonzalez"
}

export default function Sidebar() {
    return (


        <Card className="sticky top-0 h-[calc(100vh-.01rem)] w-full max-w-[16rem] p-4 bg-[#D9D0C1] rounded-none lg:flex flex-col hidden">

            <div className="mb-2 p-4">
                <Typography variant="h5" className="text-[#40251B] font-bold text-center" >
                    Welcome, {user.name} {user.lastName}
                </Typography>
            </div>

            <List className="flex-1 gap-y-4">

                <ListItem className="group hover:bg-[#40251B] hover:text-[#D9D0C1] focus:bg-[#40251B] focus:text-[#D9D0C1] text-[#40251B] font-bold active:bg-[#40251B] active:text-[#D9D0C1] p-2">
                    <ListItemPrefix>
                        <PresentationChartBarIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Dashboard
                </ListItem>


                <ListItem className="group hover:bg-[#40251B] hover:text-[#D9D0C1] focus:bg-[#40251B] focus:text-[#D9D0C1] text-[#40251B] font-bold active:bg-[#40251B] active:text-[#D9D0C1] p-2">
                    <ListItemPrefix>
                        <BellAlertIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Notifications
                    <ListItemSuffix>
                        <Chip variant="ghost" color="blue-gray" className="rounded-full" />
                    </ListItemSuffix>
                </ListItem>

                <ListItem className="group hover:bg-[#40251B] hover:text-[#D9D0C1] focus:bg-[#40251B] focus:text-[#D9D0C1] text-[#40251B] font-bold active:bg-[#40251B] active:text-[#D9D0C1] p-2">
                    <ListItemPrefix>
                        <UserCircleIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Profile
                </ListItem>

            </List>
            <ListItem className="group hover:bg-[#40251B] hover:text-[#D9D0C1] focus:bg-[#40251B] focus:text-[#D9D0C1] text-[#40251B] font-bold active:bg-[#40251B] active:text-[#D9D0C1] p-2 mb-2">
                <ListItemPrefix>
                    <Cog6ToothIcon className="h-5 w-5" />
                </ListItemPrefix>
                Settings
            </ListItem>
            <Link to="/login">
                <ListItem className="group hover:bg-[#40251B] hover:text-[#D9D0C1] focus:bg-[#40251B] focus:text-[#D9D0C1] text-[#40251B] font-bold active:bg-[#40251B] active:text-[#D9D0C1] p-2">
                    <ListItemPrefix>
                        <PowerIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Log Out
                </ListItem>
            </Link>
        </Card>
    );
}