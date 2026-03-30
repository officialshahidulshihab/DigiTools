import React from 'react';

const CartDisplay = ({prod, handleRemove}) => {

   
   
    return (
        <div className='p-3 mt-1 rounded-lg bg-base-300   shadow-sm flex justify-between items-center '>
            <div className='flex gap-2'>
                <div className='bg-base-100 w-10 h-10 rounded-full flex justify-center items-center '><p className='text-[25px] flex justify-center'>{prod.icon}</p></div>
                <div>
                    <p>{prod.name}</p>
                    <p>{prod.price}</p>
                </div>
            </div>
            <div className=''>
                <button onClick={()=>handleRemove(prod.id)} className='text-red-600 btn bg-base-300'>Remove</button>
            </div>
        </div>
    );
};

export default CartDisplay;