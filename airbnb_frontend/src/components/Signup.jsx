import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

function Signup() {
  const [userData, setUserData] = useState({
    email: "",
    password: ""
  })
  const navigate = useNavigate()
  // const modelRef = useRef()
  // const closeModel = (e) => {
  //   if (modelRef.current === e.target) {
  //     onClose()
  //   }
  // }

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch(`https://airbnb-dl81.onrender.com/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData)
      })
        
      const data = await response.json();
      if (response.ok) {
        toast.success(data.message);
        navigate('/login')
        
      }
    } catch (error) {
      console.log("failed");
      
    }



  }


  return (
    <form className='fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-20' onSubmit={handleSubmit}>
      <div className='bg-white w-[35rem] mx-auto text-center py-5 px-2 relative rounded-lg '>
        <div className='formHeader'>
          <i className="fa-solid fa-x absolute left-2 top-2 cursor-pointer rounded-full w-[30px] h-[30px] pt-2 hover:bg-black hover:bg-opacity-10" onClick={()=>navigate('/')} />
          <h6 className='font-semibold'>Register</h6>
        </div>

        <div className='formContent pt-4 px-3 '>
          <div className="phoneLogin text-left flex flex-col justify-center gap-3 py-2 ">
            <h1 className='text-2xl font-semibold'>Welcome to Airbnb</h1>
            <div className="phoneLoginField flex flex-col justify-between border rounded-lg gap">
              <input className='py-2 px-2 border-b focus:outline-none' value={userData.email} onChange={handleChange} type="email" placeholder='Enter your email ID' name="email" />
              <input className='py-2 px-2 focus:outline-none' value={userData.password} onChange={handleChange} type="password" placeholder='Enter your password' name='password' />
            </div>
            <p className='text-sm'>We’ll call or text you to confirm your number. Standard message and data rates apply. <span className='underline'>Privacy Policy</span></p>
            <button className='btn bg-[#DD1063] text-white py-3 rounded-lg'>Register</button>
          </div>

          <div className="divider">or</div>

          <div className="providerLogin text-center">
            <ul className='flex flex-col justify-between gap-3'>
              <li><Link to='/' className='border w-screen'>Continue with Facebook</Link></li>
              <li><Link to='/'>Continue with Google</Link></li>
              <li><Link to='/'>Continue with Apple</Link></li>
              <li><Link to='/'>Continue with Email</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </form>
  )
}

export default Signup
