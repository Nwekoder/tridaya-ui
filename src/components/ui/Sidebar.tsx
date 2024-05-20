import { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { twMerge } from "tailwind-merge";

interface SidebarProps {
    children: ReactNode
}

export function Sidebar(props: SidebarProps) {
    return (
        <div className="flex flex-col">
            {props.children}
        </div>
    )
}

interface SidebarLinkProps {
    title: string,
    link: string,
    icon?: ReactNode
}

export function SidebarLink(props: SidebarLinkProps) {
    return (
        <NavLink className={({isActive}) => twMerge("relative overflow-hidden p-4 flex items-center gap-4", isActive ? "before:absolute before:left-0 before:-translate-x-1/2 before:top-1/2 before:-translate-y-1/2 before:h-8 before:w-2 before:rounded-xl before:bg-black" : "opacity-50 transition-opacity hover:opacity-100")} to={props.link}>
            {props.icon}
            {props.title}
        </NavLink>
    )
}