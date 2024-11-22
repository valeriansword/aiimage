import React from 'react'
import { assets } from '../assets/assets'

const Description = () => {
  return (
      <div className='flex flex-col items-center justify-center py-24 p-6 sm:px-28'>
          <h2 className='text-3xl sm:text-4xl font-semibold mb-2'>Create AI Images</h2>

          <p className='text-gray-500 mb-8'>Turn Your Thoughts Into Visuals</p>

          <div  className='flex flex-col gap-5 md:gap-14 md:flex-row items-center'>
              <img src={assets.sample_img_1} alt="" className='w-80 xl:w-96 rounded-lg' />

              <div>
                  <h2 className='text-3xl font-medium max-w-lg mb-4'>Introduction To Our AI Powered Tool </h2>

                  <p className='text-gray-600 mb-2'>Unleash creativity with our cutting-edge Text-to-Image AI. Transform your ideas into one-of-a-kind visuals in seconds, effortlessly blending imagination with technology. Perfect for designers, marketers, and innovators looking to generate dynamic, custom images that capture attention and inspire. Step into the future of visual creation!</p>

                  <p className='text-gray-600'>
                  Experience seamless design with our intuitive platform, where your words shape powerful visuals. Whether you need stunning graphics, unique artwork, or compelling visuals for any project, our AI delivers precision and originality. Save time and elevate your creative process with this next-level tool. Revolutionize how you bring ideas to life!
                  </p>
              </div>


          </div>
      </div>
  )
}

export default Description