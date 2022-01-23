import React, { Fragment } from 'react'
import Box from "./Box"
import './boxContainer.css'

import img_1 from "../../Images/Box_div_img/img_1_box_div.jpg"
import img_2 from "../../Images/Box_div_img/img_2_box_div.jpg"
import img_3 from "../../Images/Box_div_img/img_3_box_div.jpg"
import img_4 from "../../Images/Box_div_img/img_4_box_div.jpg"
import img_5 from "../../Images/Box_div_img/img_5_box_div.jpg"
import img_6 from "../../Images/Box_div_img/img_6_box_div.jpg"
import img_7 from "../../Images/Box_div_img/img_7_box_div.jpg"
import img_8 from "../../Images/Box_div_img/img_8_box_div.jpg"
import img_9 from "../../Images/Box_div_img/img_9_box_div.jpg"


const BoxContainer = () => {

    const imgData = [
        {
            url:img_1,
            alt:"img1",
            text:"Spectrum"
        },
        {
            url:img_2,
            alt:"img2",
            text:"Enjoy Little Things"
        },
        {
            url:img_3,
            alt:"img3",
            text:"Concert"
        },
        {
            url:img_4,
            alt:"img4",
            text:"Coral"
        },
        {
            url:img_5,
            alt:"img5",
            text:"Think outside the box",
            style:{
                marginTop:"-8.5vmax"
            }
        },
        {
            url:img_6,
            alt:"img6",
            text:"Pretty in pink",
            style:{
                marginTop:"-8.5vmax"
            }
        },
        {
            url:img_7,
            alt:"img7",
            text:"Dragon Fruit"
        },
        {
            url:img_8,
            alt:"img8",
            text:"Iphone X wallpaper",
            style:{
                marginTop:"-19.6vmax"
            }
        },
        {
            url:img_9,
            alt:"img9",
            text:"Museum",
            style:{
                marginTop:"2vmax"
            }
        },
    ]

    return (
        <Fragment>
            <div className='boxContainer'>
            {imgData.map((item, index)=>(
                <Box key={index} img={item.url} alt={item.alt} text={item.text} style={item.style} />
            ))}
            </div>
        </Fragment>
    )
}

export default BoxContainer
