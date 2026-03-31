import React from 'react';
import { FaCheck } from 'react-icons/fa';

const PricingFeatures = ({item ,price}) => {
    return (
        <div>
            <ul>
                <li className={`flex gap-1 items-center ${price.highlighted? 'text-white' :'text-[#627382]'}  `}><FaCheck className='text-green-500' />{item.text}</li>
            </ul>
        </div>
    );
};

export default PricingFeatures;