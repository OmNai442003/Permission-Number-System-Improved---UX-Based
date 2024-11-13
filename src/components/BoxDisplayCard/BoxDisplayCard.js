import React from 'react'
import './boxDisplayCard.style.css'
import imageSrc from '../../assets/images/userCard.png'

export default function BoxDisplayCard() {
    return (
        <div>
            <div className='boxCard'>
                <div className='links'>Link to be added</div>
                <div className='imageTile'>
                    <img src={imageSrc} alt="csu fresno logo" className='img' />
                </div>
            </div>
        </div>
    )
}
