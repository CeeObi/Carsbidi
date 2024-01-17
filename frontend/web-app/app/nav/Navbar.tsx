import { AiOutlineCar } from "react-icons/ai";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 flex justify-between bg-white p-5 text-gray-800 shadow-md items-center">
      <div className="flex gap-2 text-3xl items-center font-semibold text-green-500">
        <AiOutlineCar size={34} />
        <div>Carsbidi Auctions</div>
      </div>
      <div>Search</div>
      <div>Login</div>
    </header>
  )
}

export default Navbar