import React from 'react'

const Header = () => {
  return (
    <div>

<div className='flex flex-row item-center justify-end mt-5 mr-3'>
    <p className='md:text-[20px] text-base font-medium cursor-pointer mx-3 text-red-500'>Blog</p>
    
    <p className='md:text-[20px] text-base  font-medium cursor-pointer mx-3'>Works</p>
    
    <p className='md:text-[20px] text-base  font-medium cursor-pointer mx-3'>Contact</p>
</div>

    </div>
  )
}

export default Header