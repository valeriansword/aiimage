import React, { useContext } from 'react'
import { assets } from './../assets/assets';
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const { user, setShowLogin } = useContext(AppContext)
  const navigate = useNavigate()
  const onClickHandler = () => {
    if (user) {
      navigate('/Result')
    } else {
      setShowLogin(true)
    }

  }
  return (
    <div className='flex flex-col justify-center items-center text-center my-20'>
      <div className='text-stone-500 inline-flex text-center gap-2 bg-white px-6 py-1 rounded-full border border-neutral-500'>
        <p>Best Text To Image Generator </p>
        <img src={assets.star_icon} alt="" />
      </div>
      <h1 className='text-4xl max-w-[300px] sm:text-7xl sm:max-w-[590px] mx-auto mt-10 text-center'>Turn Text To <span className='text-blue-600'>Image</span> , In Seconds .</h1>

      <p className='text-center max-w-xl mx-auto mt-5'>Transform your ideas into stunning visuals with our AI-powered text-to-image generator. Simply describe your concept, and watch it come to life in high-quality, custom images.Experience the future of design today!</p>

      <button onClick={onClickHandler} className='sm:text-lg text-white bg-black w-auto mt-6 px-12 py-2.5 flex items-center gap-2 rounded-full'>
        Generate image 
        <img className='h-6' src={assets.star_group} alt="" />
      </button>

      <div className='flex flex-wrap justify-center mt-16 gap-3'>
        {Array(6).fill('').map((item, index) => (
          <img className='rounded hover:scale-105 transition-all duration-300 cursor-pointer mx-sm:w-10' src={index  % 2 === 0  ? assets.sample_img_2 : assets.sample_img_1} key={index} width={70} alt="" />
        ))}
      </div>

      <p className='mt-2 text-neytral-600'>Generated images </p>
    </div>
  )
}

export default Header