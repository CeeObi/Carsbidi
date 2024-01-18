import { AiOutlineCar } from "react-icons/ai";
import Search from "./Search";
import { useParamsStore } from "../hooks/useParamsStore";
import Logo from "./Logo";


const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 flex justify-between bg-white p-5 text-gray-800 shadow-md items-center">
      <Logo />
      <Search />
      <div>Login</div>
    </header>
  )
}

export default Navbar