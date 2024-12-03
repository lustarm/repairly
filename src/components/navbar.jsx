import { Link } from "react-router-dom"

import "../index.css"

const listItems = [
    'Home',
    'About',
    'Contact',
]

const Navbar = () => {
    return (
        <div className="fixed bg-black flex justify-between items-center
            gap-16 py-3 px-10 left-1/2 translate-x-[-50%] top-[20px]
            rounded-full backdrop-blur-md bg-opacity-60 text-white shadow-lg
            z-10">

            <ul className="flex gap-8 text-xl">
                {listItems.map((item) => (
                    <Link to={'/' + item} className="relative group cursor-pointer"
                    key={item}>
                        {item}
                        <span className="absolute left-0
                            bottom-[-5px] w-0 h-1 rounded-xl
                            bg-gradient-to-r from-blue-500 to-green-500
                            transition-all duration-300 group-hover:w-full">
                        </span>
                    </Link>
                ))}
            </ul>

            <button className="bg-gradient-to-r from-blue-500 to-green-400
            py-1 px-6 rounded-3xl text-white shadow-2xl text-lg font-semibold
            hover:from-blue-600 hover:to-green-500 hover:shadow-green-500
            shadow-blue-500">
                hellow
            </button>

        </div>
    )
}

export default Navbar
