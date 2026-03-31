import React from 'react';

const ReadyToTransfrom = () => {
    return (
        <div className='bg-linear-to-r from-[#4f39f6] to-[#9514fa] p-8 mt-5 '>
            <div className='w-11/12 mx-auto space-y-4'>
            <p className='text-white text-[35px] text-center font-bold'>Ready to Transform Your Workflow?</p>
            <p className='text-white text-center'>Join thousands of professionals who are already using Digitools to work smarter. <br /> Start your free trial today.</p>

            <div className='flex justify-center items-center gap-3'>
                <button className='bg-base-100 btn  rounded-xl'><span className='bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-transparent bg-clip-text'>Explore Products</span></button>
                <button className='btn bg-linear-to-r from-[#4f39f6] to-[#9614fa] text-white rounded-xl'>View Pricing</button>
            </div>
            <p className='text-white text-center'>14-day free trial • No credit card required • Cancel anytime</p>

            </div>
            
        </div>
    );
};

export default ReadyToTransfrom;