import React from 'react'
import Image from "../image/liq-uk-blog-what-is-schema-600-x-600-Photoroom.png-Photoroom.png";


const Hero = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 h-[700px] text-white' style={{ background:"url(https://th.bing.com/th/id/R.52a8b57607f0be799268f7a3b9902202?rik=fIPYc0xn%2fiAFkw&pid=ImgRaw&r=0&sres=1&sresct=1)", backgroundColor: "black"}}>
        <div className="flex flex-col items-start justify-center pl-5 md:pl-[150px] space-y-5 h-[700px]">
            <h1 className='text-6xl font-bold capitalize'>
                Hey, we are <br /> <span className='text-orange-700'>software</span> product <br /> developer.
            </h1>
            <p>
                Hi, we are Linker as a frontend developer, and Happy as a backend developer, and this is the alx team project.
            </p>
            <div className='flex items-center h-10 bg-white pl-4  rounded-md overflow-hidden gap-3'>
              <input type="text" placeholder='Enter your email address' className='h-full border-none outline-none bg-transparent' />
              <button className='h-full bg-black text-white px-2 font-bold cursor-pointer hover:bg-slate-900 rounded-md'>Subscribe</button>
            </div>
        </div>
        <div className="flex items-center justify-center">
          <div className='h-[500px] w-[500px]'>
            <img src={Image} alt='hero-image' className='w-full h-full object-cover' />
          </div>
        </div>
    </div>
  )
}


export default Hero
