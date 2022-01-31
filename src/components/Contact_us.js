import React from 'react';
import Twos from '../utitlities/Twos';
import bg from "../images/hero_bgg.svg";
import { animateScroll as scroll } from "react-scroll";

function Phone_Content () {
    return (
        <div className='flex items-center flex-col py-4 gap-y-2 justify-center'>
             <div className="flex capitalize gap-x-2 text-center items-center justify-center">
                    <div className="w-10 h-[4px] bg-[#eb6282]"></div>
                        <span className="text-white  text-[#BE173F] text-base font-normal text-center  font-Poppins">
                            Quick and Easy Access
                        </span>
                    </div>
                    <h1 className='text-4xl font-Inter text-center font-[800] mb-6 tracking-wider text-white leading-10'>The Path Forward </h1>
                    <p className='text-base font-Poppins mb-6 text-left tracking-wide text-white'>There is a reason why cryptocurrencies are in the trillions of dollars. With the emergence of a global, decentralized ledger and computing system—which continues to grow faster and more powerful—business is being disrupted. Trillions of dollars in transaction fees from traditional banking are being threatened by blockchain technology. Countless industries are at risk of being undercut by less-expensive, faster, and more secure solutions. Whether you are an established business looking to secure your company’s foothold or an upcoming organization looking to break into the market, we have the solution for you.</p>
                    <button onClick={() => scroll.scrollToBottom()} className='bg-[#BE173F] w-[40%] mb-6 text-white text-lg tracking-wider font-Inter font-bold px-10 py-4 rounded-lg' >Contact us</button>
                    <div className='w-[100%] justify-start mt-8 items-start flex'>
                    <div className='flex items-center mr-20'>
                        <div className='flex bg-white items-center mr-4 p-2 w-12 h-12 rounded-md'><img src='/Imgs/email.png' alt='logo'/></div>
                        <div>
                        <span className='font-Poppins text-base  text-white font-semibold' >Email</span><br></br>
                        <span className='font-Poppins text-sm text-white font-semibold' >inquiries@blockchainslc.com</span>
                        </div>
                    </div>
                        <div className='flex items-center'>
                        <div className='flex bg-white items-center p-2 w-12 h-12 mr-4 rounded-md'><img src='/Imgs/call.png' alt='logo'/></div>
                            <div>
                            <span className='font-Poppins text-base text-white block font-semibold'>Phone</span>
                        <span className='font-Poppins text-sm text-white font-semibold' >(801) 960-2447 </span>
                            </div>
                        </div>
                    </div>
        </div>
    )
}

function Contact_us() {
  return (
    <div className='container mx-auto z-5 bg-[rgb(32,32,47)] px-6 bg-no-repeat bg-cover' style={{backgroundImage: `url(${bg})`}}>
        <Twos img="/Imgs/phone.svg" pos={true} content={<Phone_Content/>} />
    </div>
  )
}

export default Contact_us;