import { Bell, Globe, ShoppingCart } from "lucide-react"
import { SearchIcon } from "./Icons"
import { InstallMobile } from "@mui/icons-material"
import { useDropdownState } from "@/hooks/useUserdropdown"
import { Link } from "react-router-dom"

const userProfile =
    "https://unsplash.com/photos/5hGsBw6gsws/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8N3x8cGVyc29ufGVufDB8fHx8MTcyOTAwODI4Mnww&force=true"
export default function Navigation() {
    const { active, setActive } = useDropdownState()
    function handleClick() {
        alert("Handle Click")
    }
    return (
        <div className="flex justify-between items-center bg-primary px-8 py-2">
            <h1 className="text-2xl font-black text-white">
                <Link to={"/"}>Daraz</Link>
            </h1>

            <div className="flex-1 justify-center items-center flex">
                <div className="w-[400px] bg-gray-50 flex items-center overflow-hidden rounded-md px-2">
                    <input
                        className="h-full w-full p-2 bg-transparent placeholder:text-gray-400 outline-none border-none text-gray-500 text-[15px]"
                        placeholder="Search in Daraz"
                    />
                    <button
                        type="submit"
                        className="outline-none active:scale-105 transition-transform"
                    >
                        <SearchIcon size={25} color="#B4B9C0FF" />
                    </button>
                </div>
            </div>

            <div className="flex gap-4">
                <div className="flex items-center gap-1">
                    <button title="Install Mobile" onClick={handleClick}>
                        <InstallMobile className="text-gray-50" />
                        <p className="sr-only">Install Mobile App</p>
                    </button>
                    <button title="Change Language" onClick={handleClick}>
                        <Globe className="text-gray-50" />
                        <p className="sr-only">Change Language</p>
                    </button>
                </div>
                <div className="flex items-center gap-1">
                    <button title="Notifications" onClick={handleClick}>
                        <Bell fill="#ffffff" className="text-gray-50" />
                        <p className="sr-only">View Notifications</p>
                    </button>
                    <button title="Cart" onClick={handleClick}>
                        <ShoppingCart fill="#ffffff" className="text-gray-50" />
                        <p className="sr-only">View My Cart</p>
                    </button>
                </div>
                <div>
                    <button
                        title="Toggle Menu"
                        onClick={() => {
                            setActive(!active)
                        }}
                    >
                        <p className="sr-only">Toggle User Menu</p>
                        <img
                            className="h-[40px] w-[40px] rounded-full"
                            src={userProfile}
                            alt="User Profile"
                        />
                    </button>
                </div>
            </div>
        </div>
    )
}
