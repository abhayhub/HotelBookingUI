import { Link } from "react-router-dom"
import logo from "../assets/step.jpg"
import { useAppContext } from "../contexts/AppContext";
import SignOutButton from "../components/SignOutButton"
export default function Header() {

    const {isLoggedIn} = useAppContext();
    return(
        <div className="bg-blue-800 py-6">
        <div className="container mx-auto flex justify-between">
        <img src={logo} alt="logo" className="w-12 rounded-full"/>
        <span className="text-5xl text-white font-bold tracking-tighter">
            <Link to="/">Stepin.com</Link>
        </span>

        <span className="flex mx-2">
            {isLoggedIn ? <>
            <Link to="/my-bookings" className="mx-2">My Bookings</Link>
            <Link to="/my-hotels" className="mx-4">My Hotels</Link>
            <SignOutButton />
            </> : <>
            <Link to="/sign-in" className="flex items-center text-blue-600 px-3 font-bold bg-gray-100 cursor-pointer rounded-md">
                Sign In
            </Link></>}

        </span>
        </div>
        </div>
    );
}
