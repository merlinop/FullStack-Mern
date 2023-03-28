"use client"
import React from 'react'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { registerAction } from '@/redux/registerUserSlice'
import { Ring } from 'react-awesome-spinners'
import { useRouter } from 'next/navigation'


const RegisterComponent = () => {
// Initial state for input details
    const initialState = {
        firstname: "",
        lastname: "",
        password: "",
        email: "",
    }
    // state
    const [userDetails, setUserDetails] = useState(initialState)
    const {isloading, errorWays, user,} = useSelector((state) => state.register)



    // watimagbor
    const dispatch = useDispatch()
    const {firstname, lastname, password, email} = userDetails
    const router = useRouter()

    // navigate to dashboard
useEffect(() => {
    const timer = setTimeout(() => console.log('Navigating to dashboard'), 5000);
    if(user.users) {
        router.push("/dashboard")
     }
     return () => clearTimeout(timer);  
},[user,router])


//  fUNCTIONS
    const handleOnchange = (event) => {
       setUserDetails((prev) => {
        return {...prev, [event.target.name] : event.target.value}
       })
    }

    const handleOnSubmit = (event) => {
        event.preventDefault()
        dispatch(registerAction({firstname, lastname, password, email})) 
    }


  return (
    <div className='w-3/4 md:w-1/4  mx-auto h-[400px] bg-white rounded-2xl shadow-2xl shadow-black py-4 px-3'>
        <form className='flex items-center flex-col justify-between gap-3' onSubmit={handleOnSubmit}>
            <h1 className='font-bold text-2xl'>REGISTER!</h1>
            <input 
                type="text"
                placeholder='Firstname'
                name='firstname'
                value={userDetails.firstname}
                onChange={handleOnchange}
                className="rounded-lg border-blue-800 border p-2 text-sm active:border-blue-800 active:border"
                required
                />
            <input 
                type="text"
                placeholder='Lastname'
                name='lastname'
                value={userDetails.lastname}
                onChange={handleOnchange}
                className="rounded-lg border-blue-800 border p-2 text-sm active:border-blue-800 active:border"
                required
                />
            <input 
                type="password"
                placeholder='Password'
                name='password'
                value={userDetails.password}
                onChange={handleOnchange}
                className="rounded-lg border-blue-800 border p-2 text-sm active:border-blue-800 active:border"
                required
                />
            <input 
                type="text"
                placeholder='Email'
                name='email'
                value={userDetails.email}
                onChange={handleOnchange}
                className="rounded-lg border-blue-800 border p-2 text-sm active:border-blue-800 active:border"
                required
                />


                <button className=' w-[100px] h-[50px] border-2 border-transparent   bg-gray-700 text-white hover:bg-gray-500 rounded-2xl mt-[10px] flex flex-col items-center justify-center'>
                    {!isloading ? "Register" : <Ring size="30"/>}
                </button>
                {errorWays && <h1 className='text-red-500'>Failed, try again!</h1> }
        </form>
    </div>
  )
}

export default RegisterComponent
