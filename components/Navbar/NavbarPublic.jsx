"use client"
import { useLayoutEffect, useEffect, useState} from "react"
import {HiOutlineBookOpen} from "react-icons/hi"
import {GiHamburgerMenu} from "react-icons/gi"
import {FiLogIn} from "react-icons/fi"
import {AiOutlinePlus} from "react-icons/ai"
import {BiLogOut} from "react-icons/bi"
import Link from "next/link"
import { useSelector } from "react-redux"
import { usePathname } from 'next/navigation'

const NavbarPublic = () => {
    const [userStore, setUserStore] = useState([])
    const pathname = usePathname()
    console.log(pathname)
    

    useLayoutEffect(() => {
        const data = JSON.parse(localStorage.getItem("userData"))
        setUserStore(data)
    },[])
    console.log(userStore)

    console.log(userStore.length)

  return (
    <div className='w-full flex items-center justify-between bg-gray-800 h-[100px] sticky top-0 left-0 right-0 py-2 px-3 lg:px-8 text-white'>
        
        <div className='flex items-center w-full gap-x-10'>
           <div className="flex items-center gap-2">
             {/* Hamburger */}
             <GiHamburgerMenu  size={20} className="lg:hidden"/>
            {/* Book icons */}
            <Link href={"/"}>
            <HiOutlineBookOpen size={60} color="yellow" />
            </Link>
           </div>

            {/* Nav Links*/}
            <Link href={"/"} className={`${pathname === "/" && "bg-black rounded-lg"} hidden lg:inline p-3 duration-300 ease-in-out hover:bg-gray-600 hover:rounded-lg`}>
                Home
            </Link>
            <Link href={"/addpost"} className={`${pathname === "/addpost" && "bg-black rounded-lg"} hidden lg:inline p-3 duration-300 ease-in-out hover:bg-gray-600 hover:rounded-lg`}>
                Create
            </Link>
            <Link href={"/posts"} className={`${pathname === "/posts" && !userStore?.user ? "bg-black rounded-lg" :"bg-none rounded-none"} hidden lg:inline p-3 duration-300 ease-in-out hover:bg-gray-600 hover:rounded-lg`}>
                Posts
            </Link>
            <Link href={`${userStore?.user ? "/authors" : "/register"}`} className={`${pathname === "/register" && "bg-black rounded-lg"} hidden lg:inline p-3 duration-300 ease-in-out hover:bg-gray-600 hover:rounded-lg`}>
                {!userStore?.user ? "Register" : "Authors"}
            </Link>
            <Link href={"/login"} className={`${pathname === "/login" && !userStore?.user ? "bg-black rounded-lg" :"bg-none rounded-none" } hidden lg:inline p-3 duration-300 ease-in-out hover:bg-gray-600 hover:rounded-lg`}>
                {!userStore?.user && "Login"}
            </Link>
        </div>

        <div className="flex flex-1 w-full items-center  gap-x-4 lg:gap-x-8">
                {/* Login button */}
                <div  className="flex items-center justify-between gap-3 text-sm p-2 lg:p-3 bg-blue-700 rounded-lg text-white hover:bg-blue-900 cursor-pointer whitespace-nowrap ">
                    <FiLogIn />
                    <Link href={`${userStore?.user ? ("/addpost") : ("/login")}`}>{userStore?.user ? "New Post" : "Login"}</Link>
                </div>

                {/* New post */}
                {userStore?.user
                    ? (<div className="flex items-center justify-between gap-3 text-sm p-2  lg:p-3 bg-pink-700 rounded-lg text-white whitespace-nowrap hover:bg-pink-900 cursor-pointer">
                    <BiLogOut color="white" size={20} />
                   <span>Logout</span>
                    </div>)
                    : (<div className="flex items-center justify-between gap-3 text-sm p-2  lg:p-3 bg-pink-700 rounded-lg text-white whitespace-nowrap hover:bg-pink-900 cursor-pointer">
                    <AiOutlinePlus color="white" />
                   <div href={"/addpost"}>New Post</div>
               </div>)
                }
        </div>
    </div>
  )
}

export default NavbarPublic
