import { Link } from "react-router-dom"
import logo from "../assets/step.jpg"
export default function Header() {
    return(
        <div className="bg-blue-800 py-6">
        <div className="container mx-auto flex justify-between">
        <img src={logo} alt="logo" className="w-12 rounded-full"/>
        <span className="text-5xl text-white font-bold tracking-tighter">
            <Link to="/">Stepin.com</Link>
            {/* <h1>Stepin.com</h1> */}
        </span>
        <span className="flex mx-2">
            <Link to="/sign-in" className="flex items-center text-blue-600 px-3 font-bold bg-gray-100 cursor-pointer rounded-md">
                Sing in
            </Link>
            {/* <button className="flex items-center text-white px-3 font-bold hover:bg-gray-100 mx-2">Singin</button> */}
        </span>
        </div>
        </div>
    );
}
