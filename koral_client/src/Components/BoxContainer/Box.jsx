import React, { Fragment } from 'react'
import './boxContainer.css'


const Box = ({img, alt, text, style}) => {
    return (
        <Fragment>
            <div data-aos="fade-up" style={style} className='boxWrapper'>
                <div className='textContainer'>
                    <h1>{text}</h1>
                </div>
                <div className='imgContainer'>
                    <img  src={img} alt={alt} />
                </div>
            </div>
        </Fragment>
    )
}

export default Box
