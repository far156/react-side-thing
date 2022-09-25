import React from 'react';
import { add, multiply } from '../utilites/storage';

const cosmetics = (p) => {
    const cosmetics=[
        {id:1,name:'Alta',price:25},
        {id:2,name:'Nail Polish',price:500},
        {id:3,name:'face mask',price:255},
        {id:4,name:'Maskara',price:590}
    ]
   
    return (
        <div>
            <h3>
                Shop my cosmetics!
            </h3>
        </div>
    );
};

export default cosmetics;