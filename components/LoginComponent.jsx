"use client"
import {useState, useEffect} from 'react'
import { Ring } from 'react-awesome-spinners'
import { useRouter } from 'next/navigation'
import { useSelector, useDispatch } from 'react-redux'
import { LoginAction } from '@/redux/LoginUserSlice'


const LoginComponent = () => {

  
  // Initial state for input details
  const initialState = {
    email: "",
    password: ""
}
// state
const [userDetails, setUserDetails] = useState(initialState)  

const dispatch = useDispatch()
const {isloading, errorWays, userData,} = useSelector((state) => state.login)
const router = useRouter()



useEffect(() => {
  const timer = setTimeout(() => console.log('Navigating to dashboard'), 5000);
  if(userData.user) {
      router.push("/dashboard")
   }
   return () => clearTimeout(timer);  
},[userData,router])




const {email, password } = userDetails

//  fUNCTIONS
const handleOnchange = (event) => {
  setUserDetails((prev) => {
   return {...prev, [event.target.name] : event.target.value}
  })
}


const handleOnSubmit = (event) => {
  event.preventDefault()
  dispatch(LoginAction({ email, password})) 
}





  return (
    <div className=' w-3/4 md:w-1/4  mx-auto h-[400px] bg-white rounded-2xl shadow-2xl shadow-black py-4 px-3'>
      <form  className='flex items-center flex-col justify-between gap-3' onSubmit={handleOnSubmit}>
      <h1 className='font-bold text-2xl'>LOGIN!</h1>
         <input 
                type="text"
                placeholder='Email'
                name='email'
                value={userDetails.email}
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


              <button className=' w-[100px] h-[50px] border-2 border-transparent   bg-gray-700 text-white hover:bg-gray-500 rounded-2xl mt-[10px] flex flex-col items-center justify-center'>
                    {!isloading ? "Login" : <Ring size="30"/>}
                </button> 


                {errorWays && <h1 className='text-red-500'>Failed, try again!</h1> }
      </form>
    </div>
  )
}

export default LoginComponent
