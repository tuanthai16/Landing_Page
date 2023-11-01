import React from 'react'



export default function Hero() {
  return (
    <div className=''>
        <div className='container mx-auto px-[20px] flex gap-[19px] items-center'>
            <div className='2xl:w-[52%] xl:w-[65%] lg:w-[85%] md:w-[75%] designPro:w-[65%] w-[75%] flex lg:m-0 m-auto sm:px-[0px] designPro:pr-[360px]'>
                <div className='flex flex-col gap-[50px] lg:w-[95%] w-full justify-center items-center sm:text-left text-center sm:px-[0px] designPro:px-[180px]'>
                    <div className='flex flex-col'>
                        <h1 className='font-anton font-normal tracking-[-3%]
                        2xl:text-[180px] 2xl:leading-[160px]
                        xl:text-[148px] xl:leading-[133px]
                        lg:text-[112px] lg:leading-[101px]
                        md:text-[155px] md:leading-[138px]
                        designPro:text-[110px] designPro:leading-[100px]
                        text-[82px] leading-[75px]
                        
                        '>PRODUCT DESIGNER</h1>
                        <h2 className='whitespace-nowrap font-anton font-normal tracking-[-3%]
                        2xl:text-[102px] 2xl:leading-[132px]
                        xl:text-[84px] xl:leading-[109px]
                        lg:text-[63.5px] lg:leading-[83px]
                        md:text-[88px] md:leading-[114px]
                        designPro:text-[62.5px] designPro:leading-[81px]
                        text-[46.5px] leading-[61px]
                        bg-gradient-to-r from-red to-orange
                        text-transparent bg-clip-text
                        '>CRISTIAN MUÑOZ</h2>
                    </div>
                    <div className='flex flex-col gap-[40px] navBar:w-full designPro:w-[390px] w-[290px]'>
                        <div>
                            <ul className='flex items-center justify-between'>
                                <li className=' bg-white flex rounded-[10px] border p-[5px] gap-[10px]'><img className='' src='image/instagram.png' alt=''/></li>
                                <li className=' bg-white flex rounded-[10px] border p-[5px] gap-[10px]'><img src='image/Figma.png' alt=''/></li>
                                <li className=' bg-white flex rounded-[10px] border p-[5px] gap-[10px]'><img src='image/linkedin.png' alt=''/></li>
                                <li className=' bg-white flex rounded-[10px] border p-[5px] gap-[10px]'><img src='image/twitter.png' alt=''/></li>
                                <li className=' bg-white flex rounded-[10px] border p-[5px] gap-[10px]'><img src='image/telegram.png' alt=''/></li>
                                <li className=' bg-white flex rounded-[10px] border p-[5px] gap-[10px]'><img src='image/Medium Logo.png' alt=''/></li>
                            </ul>
                        </div>  
                        <button className=' items-center justify-center bg-gray flex gap-[8px] py-[10px]'>
                            <span className='font-gotham font-normal text-[18px] pt-[11px] text-white'>Download Curriculum Vitae</span>

                        </button>
                    </div>
                </div>
                <div className='lg:flex hidden h-[24%]'> 
                    <img src='image/Portal.png' alt='' />
                </div>
            </div>
            <div className='lg:flex hidden'>
                <img src='image/colorful-vintage-collage-design 1.png' alt='' />
            </div>
        </div>
    </div>
  )
}
