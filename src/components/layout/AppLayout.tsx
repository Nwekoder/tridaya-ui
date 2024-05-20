import { ReactNode } from "react";
import { Sidebar, SidebarLink } from "../ui/Sidebar";
import { ClipboardListIcon, LayoutDashboardIcon, ListIcon, LogInIcon, UserPlus2Icon } from "lucide-react";

interface AppLayoutProps {
    children: ReactNode
}

export function AppLayout(props: AppLayoutProps) {
    return (
        <div className="relative overflow-hidden">
            <aside className="fixed top-0 left-0 w-1/6 h-full">
                <h3 className="font-bold text-2xl tracking-wide py-4 text-center">LOGO</h3>
                <Sidebar>
                    <SidebarLink link="/" title="Dashboard" icon={<LayoutDashboardIcon />} />
                    <SidebarLink link="/listpage" title="List Page" icon={<ListIcon />} />
                    <SidebarLink link="/formpage" title="Form Page" icon={<ClipboardListIcon />} />
                    <hr className="mx-4 border-neutral-300 opacity-50 border-2 rounded-2xl my-2" />
                    <SidebarLink link="/loginpage" title="Login Page" icon={<LogInIcon />} />
                    <SidebarLink link="/register" title="Register Page" icon={<UserPlus2Icon />} />
                </Sidebar>
            </aside>

            <div className="ml-[16.666667%] min-h-screen bg-neutral-200">
                {props.children}
            </div>
        </div>
    )
}