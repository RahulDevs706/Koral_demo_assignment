import React, { Fragment } from 'react'
import './PwrUp.css'

import sp1 from "../../Images/pattern.png"
import sp2 from "../../Images/shape4.png"
import img1 from "../../Images/power-up2.jpg"

const PowerUp = () => {

    return (
        <Fragment>
            <div data-aos="fade-up" data-aos-offset="500" id="mainSection" className='PU_wrapper'>

                <div className='section1'>
                    <div>
                        <h1>Power up</h1>
                        <h3>your creativity</h3>
                    </div>

                    <div className='image_subSec'>
                        <img src={sp1} alt='1' />
                        <img src={sp2} alt="2" />
                    </div>

                </div>

                <div className='section2'>
                    <img src={img1} alt='3' />
                </div>
            </div>
        </Fragment>
    )
}

export default PowerUp