import React, { Fragment } from 'react'
import girlIMG from "../../Images/girl.png"
import shape1 from "../../Images/shape6.png"
import shape2 from "../../Images/shape4.png"
import shape3 from "../../Images/shape2.png"
import './Banner.css'

import {BsArrowDown as Down} from "react-icons/bs"
import {GiSquare as Square, GiCircle as Circle} from "react-icons/gi"

const Banner = () => {


    return (
        <Fragment>
            <div className='banner'>
                <div className='shape_wrapper'>
                    <img id='shape1' className="shape" src={shape1} alt='random' />
                    <Circle className='shape' id='shape4' />
                    <img id='shape2' className="shape" src={shape1} alt='random' />
                    <Circle className='shape' id='shape5' />
                    <img id='shape6' className="shape" src={shape3} alt='random' />
                    <Square className='shape' id='shape7' />
                    <Square className='shape' id='shape8' />
                </div>
                <div data-aos="fade-up" className='banner_text'>
                    <div data-aos="slide-up">
                        <h1>hello</h1>
                        <h5>We are koral an award winning design agency <u>from portugal.</u></h5>
                        <img id='shape3' className='shape' src={shape2} alt="random" />
                    </div>
                    

                    <div className='banner_icon'>
                        <div className='down'>
                           <a href='#mainSection'><Down/></a>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up" className='banner_image'>
                    <img src={girlIMG} alt='img1' />
                </div>

   
            </div>
        </Fragment>
    )
}

export default Banner
