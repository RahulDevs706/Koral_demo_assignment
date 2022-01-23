import React, { Fragment } from 'react'
import './qualities.css'

const Qualities = () => {

    const para = "Interactively brand robust collaboration and idea-sharing dynamic e-tailers envisioneer envisioneer inexpensive"

    const qualtity = [
        {
            id:1,
            heading:"Innovative"
        },
        {
            id:2,
            heading:"Intutive"
        },
        {
            id:3,
            heading:"Modern"
        },
        {
            id:4,
            heading:"Avanguard"
        }
    ]

    return (
        <Fragment>
            <div className='quality_container'>
                {qualtity.map((item, index)=>(
                    <div key={index} className="quality_box">
                        <h1>0{item.id}</h1>
                        <h2>{item.heading}</h2>
                        <p>{para}</p>
                    </div>
                ))}
            </div>
        </Fragment>
    )
}

export default Qualities
