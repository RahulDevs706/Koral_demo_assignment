import React, { Fragment } from 'react'
import './testimonial.css'

import lgo_1 from "../../Images/Client_Feedback_Images/logo4.png" 
import lgo_2 from "../../Images/Client_Feedback_Images/logo3.png" 
import lgo_3 from "../../Images/Client_Feedback_Images/logo2.png" 
import lgo_4 from "../../Images/Client_Feedback_Images/logo7.png" 


const Testimonials = () => {

    const logoArr = [lgo_1,lgo_2,lgo_3,lgo_4];

    return (
        <Fragment>
            <div className='logo_container'>
                {logoArr.map((url, index)=>(
                    <img key={index} src={url} alt='testimonial_logo' />
                ))}
            </div>
        </Fragment>
    )
}

export default Testimonials
