import React, { use } from 'react';
import PricingDisplay from './PricingDisplay';

const Pricing = ({pricingPromise}) => {
    const pricing=use(pricingPromise)
    const pricingData=pricing.data.pricing.plans
    
    return (
        <div className='mt-10 w-11/12 mx-auto'>
            <p className=' text-[20px] md:text-[38px] font-bold text-[#101727] text-center'>Simple, Transparent Pricing</p>
            <p className='text-[#627382] text-center text-[14px] md:text-[16px]'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>


            <div className='grid grid-cols-1  md:grid-cols-3 gap-5'>
                {
                pricingData.map((price,i)=><PricingDisplay price={price} key={i}></PricingDisplay>)
            }
            </div>
        </div>
    );
};

export default Pricing;