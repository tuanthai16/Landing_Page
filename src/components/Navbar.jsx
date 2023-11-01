import React from 'react'

export default function Navbar() {
  return (
    <div className=''>
        <div className='container m-auto flex px-[20px] items-center justify-between pt-[50px] pb-[30px] w-full'>
            <img src='image/tian1.png' className='cursor-pointer' alt=''/>
            <div className='navBar:flex hidden'>
                <ul className='flex gap-[30px] cursor-pointer'>
                    <li className=''>Home</li>
                    <li className=''>Portfolio</li>
                    <li className=''>Skills</li>
                    <li className=''>About Me</li>
                </ul>
            </div>
            <div className='gap-[20px] items-center justify-center navBar:flex hidden'>
                <div className='flex rounded-[32px] p-1 gap-1 bg-[#292929] items-center justify-center'>
                <img src='image/sun.png' alt=''/>
                    <div className='cursor-pointer w-[24px] h-[24px] rounded-[12px] bg-white'>
                    </div>
                    
                </div>
                <button className='py-[10px] px-[24px] flex gap-[5px] rounded bg-[#292929] text-white'>
                    <span>Button</span>
                </button>
            </div>
            <img className='navBar:hidden flex' src='image/menu.png' alt=''/>
        </div>
    </div>
  )
}
