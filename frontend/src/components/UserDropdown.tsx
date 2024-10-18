import { LogOut } from "lucide-react"
import { ReactNode } from "react"
import { Link } from "react-router-dom"

import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import SettingsIcon from "@mui/icons-material/Settings"
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining"
import EmailIcon from "@mui/icons-material/Email"
import DashboardIcon from "@mui/icons-material/Dashboard"
import { useDropdownState } from "@/hooks/useUserdropdown"

type Props = {
    className?: string
}
export default function UserDropdown({ className }: Props) {
    const name = "Sachin Acharya"
    const { active } = useDropdownState()

    return (
        <div
            className={`w-[280px] p-4 shadow-custom rounded-lg ${className} ${
                active ? "show" : "hide"
            }`}
        >
            <div className="flex justify-between items-center">
                <h1 className="w-full font-bold flex justify-between text-lg">
                    {name}
                </h1>
                <Badge status="buyer" />
            </div>
            <div className="mt-5 flex flex-col gap-2">
                <MenuButton
                    icon={<AccountCircleIcon fontSize="inherit" />}
                    title="Profile"
                    href="/profile"
                />
                <MenuButton
                    icon={<DashboardIcon fontSize="inherit" />}
                    title="Dashboard"
                    href="/dashboard"
                />
                <MenuButton
                    icon={<SettingsIcon fontSize="inherit" />}
                    title="Settings"
                    href="/settings"
                />
                <MenuButton
                    icon={<DeliveryDiningIcon fontSize="inherit" />}
                    title="Track Order"
                    href="/order/track"
                />
                <MenuButton
                    icon={<EmailIcon fontSize="inherit" />}
                    title="Messages"
                    href="/messages"
                />
            </div>
            <div className="mt-5">
                <button className="w-full bg-slate-950 text-white flex items-center gap-2 p-2 rounded-md hover:bg-slate-800 transition-colors">
                    <LogOut />
                    Logout
                </button>
            </div>
        </div>
    )
}

type BadgeProps = {
    status: "buyer" | "seller"
}
function Badge({ status }: BadgeProps) {
    return (
        <p className="cursor-pointer p-[2px] px-2 text-white bg-primary w-fit rounded-lg font-medium text-sm">
            {status[0].toUpperCase() + status.slice(1)}
        </p>
    )
}

type MenuButtonProps = {
    icon?: ReactNode
    title: string
    href: string
}
function MenuButton({ href, title, icon }: MenuButtonProps) {
    return (
        <Link to={href}>
            <div className="menu-button w-full bg-[#eeeded88] flex px-2 h-[40px] items-center rounded-md gap-2">
                <span className="text-[22px] flex items-center">{icon}</span>
                <p className="text-sm">{title}</p>
            </div>
        </Link>
    )
}
