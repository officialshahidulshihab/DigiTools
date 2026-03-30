import React, { use } from 'react';
import CardDisplay from './CardDisplay';

const Card = ({cardPromise}) => {

 const cardDataProcess=use(cardPromise)
 const cardCart=cardDataProcess.data.cart
 const cardCurrency=cardCart.currency
 const cardProducts=cardCart.products
 

    return (
        <div className="grid grid-cols-3 w-11/12 mx-auto gap-5">
            {
                cardProducts.map(product=>{
                   return <CardDisplay product={product} key={product.id} cardCurrency={cardCurrency} ></CardDisplay>
                })
            }
        </div>
    );
};

export default Card;