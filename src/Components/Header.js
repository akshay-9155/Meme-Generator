import React from 'react'

const Header = () => {
  return (
    <div className='Header flex items-center justify-between pl-10 pr-10 h-20 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white'>
        <div className="logo flex gap-2">
            <img src="./Images/Troll Face.png" alt="Troll Face" className='w-8 object-contain' />
            <h1 className=' text-xl font-bold'>Meme Generator</h1>
        </div>
        <h2>React Course - Project 3</h2>
    </div>
  )
}

export default Header