import React from 'react';
import './GifCard.css';

const GifCard = props => {
    return (
        <div className='container'>
            <img src={props.url} alt='gif'/>
        </div>
    )
}

export default GifCard;
