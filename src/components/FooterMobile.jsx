import React from 'react'

const FooterMobile=() => {
    return (
        <div className='fixed w-full bottom-0 z-50'>
            {/* Center: Floating WhatsApp Icon */}
            <img
                src="/icons/whatsapp.png"
                alt="whatsapp"
                className='absolute left-1/2 -translate-x-1/2 bottom-[6vw] w-[80px] z-10'
            />

            <footer
                style={{ backgroundImage: 'url("/bottomBar.png")' }}
                className='relative w-full h-16 bg-cover bg-no-repeat bg-center flex justify-between items-center px-6 z-50'
            >
                {/* Left: 2 icons */}
                <div className='flex gap-6 items-center'>
                    <div className='flex flex-col items-center'>
                        <img src="/icons/home.png" alt="Home" className='w-5 h-5' />
                        <span className='text-[11px] text-white'>Home</span>
                    </div>
                    <div className='flex flex-col items-center'>
                        <img src="/icons/promotions.png" alt="InPlay" className='w-5 h-5' />
                        <span className='text-[11px] text-white'>InPlay</span>
                    </div>
                </div>

                {/* Right: 2 icons */}
                <div className='flex gap-6 items-center'>
                    <div className='flex flex-col items-center'>
                        <img src="/icons/live.webp" alt="Live Casino" className='w-6 h-6' />
                        <span className='text-[11px] text-white'>Live</span>
                    </div>
                    <div className='flex flex-col items-center'>
                        <img src="/icons/user.png" alt="Account" className='w-6 h-6' />
                        <span className='text-[11px] text-white'>Account</span>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default FooterMobile
