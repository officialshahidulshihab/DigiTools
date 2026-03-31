import React from 'react';

const BannerButom = () => {
    return (
        <div className='bg-linear-to-r from-[#4f39f6] to-[#9514fa]'>

            <div className='w-11/12 mx-auto flex flex-col md:flex-row items-center md:justify-between py-6  '>
                <div className=''>
                    <p className='text-white font-extrabold text-[22px] md:text-[50px] text-center'>50K+</p>
                <p className='text-white font-medium text-[16px] md:text-[24px]    text-center'>Active Users</p>
                </div>
                
                <div>
                    <p className='text-white font-extrabold text-[22px] md:text-[50px]  text-center'>200+</p>
                    <p className='text-white font-medium text-[16px] md:text-[24px] text-center'>Premium Tools</p>
                </div>

                <div>
                    <p className='text-white font-extrabold text-[22px] md:text-[50px] text-center'>4.9</p>
                    <p className='text-white font-medium text-[16px] md:text-[24px] text-center'>Rating</p>
                </div>
            </div>
        </div>
    );
};

export default BannerButom;