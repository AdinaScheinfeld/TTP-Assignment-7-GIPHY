import React from 'react'

const GifCard = props => {
    return (
        <div className='container'>
            <img src={props.url} alt='gif'/>
        </div>
    )
}

export default GifCard;
