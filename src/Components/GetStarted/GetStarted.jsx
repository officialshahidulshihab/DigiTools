import React from 'react';
import iconMan from '../../assets/products/user.png'
import iconBox from '../../assets/products/package.png'
import iconRocket from '../../assets/products/rocket.png'


const GetStarted = () => {
    return (
        <div className='bg-base-300 mt-15'>
            <div className='w-11/12 mx-auto p-5 '>
            <div>
                <p className='text-[24px] md:text-[38px] font-bold text-[#101727] text-center'>
                Get Started in 3 Steps
            </p>
            <p className='text-[#627382] text-center'>
                Start using premium digital tools in minutes, not hours.
            </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mt-5 mb-5'>
                <div className='bg-base-100 p-4 md:p-7 border border-base-300 rounded-lg shadow-sm h-75 space-y-3'>
                    <div className='flex justify-end items-center '>
                        <p className='text-center bg-linear-to-r from-[#4f39f6] to-[#9514fa] rounded-full w-7 h-7'>01</p>
    
                    </div>
                    <div className='flex justify-center  '><img className='bg-linear-to-r from-[#4f39f63f] to-[#9614fa3f] rounded-full ' src={iconMan} alt="" /></div>
                    <p className='text-[24px] font-bold text-[#101727] text-center'>Create Account</p>
                    <p className='text-[#627382] text-center'>Sign up for free in seconds. No credit card <br /> required to get started.</p>

                </div>
                <div className='bg-base-100 md:h-75 space-y-3 p-4 md:p-7 border border-base-300 rounded-lg shadow-sm'>
                    <div className='flex justify-end items-center '>
                        <p className='text-center bg-linear-to-r from-[#4f39f6] to-[#9514fa] rounded-full w-7 h-7'>02</p>
    
                    </div>
                    <div className='flex justify-center '><img className='bg-linear-to-r from-[#4f39f63f] to-[#9614fa3f] rounded-full ' src={iconBox} alt="" /></div>
                    <p className='text-[24px] font-bold text-[#101727] text-center'>Choose Products</p>
                    <p className='text-[#627382] text-center'>Browse our catalog and select the tools <br /> that fit your needs.</p>

                </div>
                <div className='bg-base-100 h-75 space-y-3 p-4 md:p-7 border border-base-300 rounded-lg shadow-sm'>
                    <div className='flex justify-end items-center '>
                        <p className='text-center bg-linear-to-r from-[#4f39f6] to-[#9514fa] rounded-full w-7 h-7'>03</p>
    
                    </div>
                    <div className='flex justify-center '><img className='bg-linear-to-r from-[#4f39f63f] to-[#9614fa3f] rounded-full ' src={iconRocket} alt="" /></div>
                    <p className='text-[24px] font-bold text-[#101727] text-center'>Start Creating</p>
                    <p className='text-[#627382] text-center'>Download and start using your premium <br /> tools immediately.</p>

                </div>
            </div>

            </div>
        </div>
    );
};

export default GetStarted;