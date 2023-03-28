"use client"
import {HiOutlineBookOpen} from "react-icons/hi"
import Link from "next/link"

const NavbarPublic = () => {
  return (
    <div className='w-full flex items-center justify-between bg-gray-800 h-[100px] sticky top-0 left-0 right-0 py-2 px-8'>
        <div className='flex justify-evenly items-center'>
            {/* icons */}
            <HiOutlineBookOpen size={60} color="yellow" />
            {/* Home Links*/}
            
        </div>

        <div>

        </div>
    </div>
  )
}

export default NavbarPublic
