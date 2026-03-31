import React from 'react';

const BannerButom = () => {
    return (
        <div className='bg-linear-to-r from-[#4f39f6] to-[#9514fa]'>

            <div className='w-11/12 mx-auto flex justify-between'>
                <div className=''>
                    <p className='text-white font-extrabold text-[22px] md:text-[50px]'>50K+</p>
                <p className='text-white font-medium text-[16px] md:text-[24px]'>Active Users</p>
                </div>
                
                <div>
                    <p className='text-white font-extrabold text-[22px] md:text-[50px]'>200+</p>
                    <p className='text-white font-medium text-[16px] md:text-[24px]'>Premium Tools</p>
                </div>

                <div>
                    <p className='text-white font-extrabold text-[22px] md:text-[50px]'>4.9</p>
                    <p className='text-white font-medium text-[16px] md:text-[24px]'>Rating</p>
                </div>
            </div>
        </div>
    );
};

export default BannerButom;