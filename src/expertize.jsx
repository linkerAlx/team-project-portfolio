import React from 'react'
import { FaCss3, FaHtml5, FaNodeJs, FaReact } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io'
import { RiTailwindCssFill } from 'react-icons/ri'
import { SiMongodb, SiTypescript } from 'react-icons/si'
import { TbBrandPrisma } from 'react-icons/tb'


const Expertize = () => {
  return (
    <div>
      <h1 className='my-3 text-center'>Expertize</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
      <div className='bg-white shadow-md m-2 flex flex-col items-center justify-center p-5'>
        <p><FaCss3 className='h-[70px] w-[100px] bg-white rounded-full p-1 mb-5' /></p>
        <p>CSS is used to style and format web content, allowing you to control the layout, colors, fonts, and other visual aspects of your website.</p>
      </div>
      <div className='bg-white shadow-md m-2 flex flex-col items-center justify-center p-5'>
        <p><FaHtml5 className='h-[70px] w-[100px] bg-white rounded-full p-1 mb-5' /></p>
        <p>HTML is the backbone of web pages. It defines the structure and content of a webpage using tags, such as headings, paragraphs, links, and images.</p>
      </div>
      <div className='bg-white shadow-md m-2 flex flex-col items-center justify-center p-5'>
        <p><IoLogoJavascript className='text-yellow-400 h-[70px] w-[100px] bg-white rounded-full p-1 mb-5' /></p>
        <p>JavaScript is a versatile programming language that runs in web browsers. It enables dynamic interactions, animations, and client-side functionality on websites.</p>
      </div>
      <div className='bg-white shadow-md m-2 flex flex-col items-center justify-center p-5'>
        <p><SiTypescript className='h-[70px] w-[100px] bg-white rounded-full p-1 mb-5' /></p>
        <p>TypeScript is a superset of JavaScript that adds static typing, making it easier to catch errors during development. It’s widely used in large-scale applications.</p>
      </div>
      <div className='bg-white shadow-md m-2 flex flex-col items-center justify-center p-5'>
        <p><RiTailwindCssFill className='h-[70px] w-[100px] bg-white rounded-full p-1 text-sky-600 mb-5' /></p>
        <p>Tailwind CSS is a utility-first CSS framework that streamlines styling by providing pre-defined classes for common design patterns.</p>
      </div>
      <div className='bg-white shadow-md m-2 flex flex-col items-center justify-center p-5'>
        <p><FaNodeJs className='h-[70px] w-[100px] bg-white rounded-full p-1 mb-5' /></p>
        <p>Node.js is a server-side JavaScript runtime environment. It allows you to build scalable and efficient backend services, APIs, and applications.</p>
      </div>
      <div className='bg-white shadow-md m-2 flex flex-col items-center justify-center p-5 mb-5'>
        <p><FaReact className='h-[70px] w-[100px] bg-white rounded-full p-1 text-sky-600 mb-5' /></p>
        <p>React is a popular JavaScript library for building user interfaces. It provides a component-based architecture and efficient rendering for web and mobile apps.</p>
      </div>
      <div className='bg-white shadow-md m-2 flex flex-col items-center justify-center p-5'>
        <p><SiMongodb className='h-[70px] w-[100px] bg-white rounded-full p-1 mb-5' /></p>
        <p>MongoDB is a NoSQL database that stores data in flexible, JSON-like documents. It&apos;s commonly used for scalable and fast data storage.</p>
      </div>
      <div className='bg-white shadow-md m-2 flex flex-col items-center justify-center p-5'>
        <p><TbBrandPrisma className='h-[70px] w-[100px] bg-white rounded-full p-1' /></p>
        <p>Prisma is an ORM (Object-Relational Mapping) tool that simplifies database interactions in Node.js applications, allowing you to work with databases using a type-safe API.</p>
      </div>
    </div>
    </div>
  )
}


export default Expertize
