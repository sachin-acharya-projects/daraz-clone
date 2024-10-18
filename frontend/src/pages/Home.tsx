import Navigation from "@/components/Navigation"
import UserDropdown from "@/components/UserDropdown"

export default function Home() {

    return (
        <div>
            <Navigation />
            <UserDropdown
                className="fixed right-6 mt-6"
            />
        </div>
    )
}
