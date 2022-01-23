import React, { Fragment } from 'react';
import "./ContactUS.css"
import {IoCall as Call, IoMail as Mail, IoLocation as Location} from 'react-icons/io5'

import ContactBox from "./ContactBox.jsx"

const Contact = () => {

    const boxInfo = [
        {
            icon:[<Call key={1}/>],
            type:"tel",
            data:["+35172133194", "+18833841442"],
            text:["PT (+351) 729 133 194", "AU (+18) 833 841 442"],
            heading:"CALL US"
        },
        {
            icon:[<Mail key={2}/>],
            type:"mailto",
            data:["marketing@example.com", "hello@example.com"],
            text:["marketing@example.com", "hello@example.com"],
            heading:"EMAIL US"
        },
        {
            icon:[<Location key={3}/>],
            type:"address",
            text:["PO Box 16122 Collins Street West Victoria 8007 Australia"],
            heading:"OUR HOME"
        },
    ]

  return (
    <Fragment>
        <div className='CU_component'>
            <div className='CU_box'>
            {boxInfo.map((item, index)=>(
                <ContactBox 
                    key={index}
                    icon={item.icon} 
                    type={item.type} 
                    data={item.data?item.data:null} 
                    text={item.text} 
                    heading={item.heading}  />
            ))}
            </div>
            <p>INSTAGRAM@UPPER</p>
        </div> 
    </Fragment>
    );
};

export default Contact;
