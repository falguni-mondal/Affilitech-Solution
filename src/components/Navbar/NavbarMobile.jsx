import React from 'react'

const NavbarMobile = () => {
  return (
    <div className='mobile-navbar-container lg:hidden fixed bottom-5 left-1/2 transform -translate-x-1/2 w-[40vw] p-1 rounded-full bg-[#5f5f5f1e] backdrop-blur-[20px] flex justify-between items-center z-[999]'>
        <div className="mobile-logo h-[3rem] w-[3rem]">
            <img className='w-full h-full object-cover' src="icon.png" alt="" />
            
        </div>
    </div>
  )
}

export default NavbarMobile