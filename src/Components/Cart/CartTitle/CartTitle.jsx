import React from 'react';

const CartTitle = ({select, setSelected ,click}) => {

     
    
    return (
        <div className='w-11/12 mx-auto mt-20 mb-5 space-y-2'>
            <p className='text-[22px] md:text-[30px] text-[#101727] font-bold text-center'>Premium Digital Tools</p>
            <p className=' text-center text-[#627382]'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>

            <div className='flex justify-center'>
                <button onClick={()=>setSelected(true)}  className={`btn  ${select===true? 'bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white' :''}  rounded-l-2xl `}>Products</button>
                <button onClick={()=>setSelected(false)} className={`btn ${select===false? 'bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white' : ''} rounded-r-2xl`}>Cart({click.length})</button>
            </div>
        </div>
    );
};

export default CartTitle;