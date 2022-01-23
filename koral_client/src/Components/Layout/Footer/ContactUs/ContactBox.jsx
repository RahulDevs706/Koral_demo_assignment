import React, { Fragment } from 'react';
import './ContactUS.css'

const ContactBox = ({icon,type, data, text, heading}) => {
  return (<Fragment>
      <div className='CB_wrapper'>
            <div className='CB_icon'>
                {icon}
            </div>
            <div className='CB_info'>
                <h2>{heading}</h2>
                {type==="address"?(
                        <div className='CB_address'>
                            {text}
                        </div>):(
                        <div className='CB_contact'>
                            <p><a href={`${type}:${data[0]}`}>{text[0]}</a></p>
                            <p><a href={`${type}:${data[1]}`}>{text[1]}</a></p>
                        </div>
                    )
                }

            </div>
      </div>
  </Fragment>);
};

export default ContactBox;

