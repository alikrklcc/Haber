import React from 'react';
import Card from './Card';

const Cards = ({haberler}) =>{
    return (
        <div className="row">
                {
                    haberler &&
                    haberler.map(haber=><Card haber={haber} />)
                }
        </div>
    )
}

export default Cards;