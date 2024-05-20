import { ReactNode } from "react"
import { twMerge } from "tailwind-merge";

interface ButtonProps {
    variant?: "primary" | "secondary",
    full_width?: boolean,
    children: ReactNode,
    onClick?: () => void
}

export default function Button(props: ButtonProps) {
    switch (props.variant) {
        case 'primary':
            return <button onClick={props.onClick} className={twMerge("px-4 py-2 rounded-md min-w-32 block", "bg-neutral-600 transition-[background] hover:bg-neutral-800 text-white", props.full_width ? "w-full": "w-fit")} type="button">{props.children}</button>
        case 'secondary':
            return <button onClick={props.onClick} className={twMerge("px-4 py-2 rounded-md min-w-32 block", "bg-neutral-300 transition-[background,color] hover:text-white hover:bg-neutral-500 text-black", props.full_width ? "w-full": "w-fit")} type="button">{props.children}</button>
                
        default:
            return <button onClick={props.onClick} className={twMerge("px-4 py-2 rounded-md min-w-32 block", "bg-neutral-600 transition-[background] hover:bg-neutral-800 text-white", props.full_width ? "w-full": "w-fit")} type="button">{props.children}</button>
    }
}