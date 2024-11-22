import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import axios from 'axios'


const Login = () => {
    const [state, setState] = useState('login')
    const { setShowLogin , backendUrl , setToken ,setUser } = useContext(AppContext)
    
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password ,setPassword] =useState('')
    
    const onSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            if (state === 'login') {
                const { data } = await axios.post(backendUrl+'/api/user/login',{ email, password },{
                    headers:{
                        'Content-Type': 'application/json'
                    }
                })
                if (data.success) {
                    setToken(data.token)
                    console.log(data.name)
                    setUser(data.name)
                    localStorage.setItem('token', data.token)
                    setShowLogin(false)
                } else {
                    alert(data.message)
                }
            } else {
                const { data } = await axios.post(backendUrl+'/api/user/register',{ name, email, password })
                if (data.success) {
                    setToken(data.token)
                    setUser(data.name)
                    localStorage.setItem('token', data.token)
                    setShowLogin(false)
                } else {
                    alert(data.message)
                }
            }



        } catch (error) {
            alert(error.message)
        }
    }

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        }
    },[])
    return (
      <div className='absolute top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center'>
          
          <form onSubmit={onSubmitHandler} className='relative bg-white p-10 rounded-xl text-slate-500'>
                <h1 className='text-2xl text-neutral-700 text-center font-medium pb-2'>{state}</h1>
              <p className='text-sm text-center'>
                  Please Sign In to Continue
              </p>

             {state !== 'login' && <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-5 '>
                  <img src={assets.user_icon} alt="" />
                    <input onChange={e => setName(e.target.value)} value={name} className='outline-none text-sm' type="text" placeholder='Full Name' required />
              </div>}
              <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-5 '>
                  <img src={assets.email_icon} alt="" />
                    <input onChange={e => setEmail(e.target.value)} value={email} className='outline-none text-sm' type="email" placeholder='Email ID' required />
              </div>
              <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-5 '>
                  <img src={assets.lock_icon} alt="" />
                  <input onChange={e => setPassword(e.target.value)} value={password}className='outline-none text-sm' type="password" placeholder='Password' required />
              </div>
              <p className='text-sm text-blue-600 my-4 cursor-pointer'>
                  Forgot Password
              </p>
              <button className='bg-blue-600 w-full text-white py-2 rounded-full'>
                  {state}
              </button>

              {state === 'login' ? <p className='mt-5 text-center'>
                  Dont Have An Account ! <span className='text-blue-600 cursor-pointer' onClick={()=>{setState('sign up')}}>Sign UP</span>
              </p>
                    :
              <p className='mt-5 text-center'>
                  Already Have An Account ! <span className='text-blue-600 cursor-pointer' onClick={()=>{setState('login')}}>Login</span>
              </p>}
              <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" className='absolute top-5 right-5 cursor-pointer'/>
                
          </form>
          
      </div>
  )
}

export default Login