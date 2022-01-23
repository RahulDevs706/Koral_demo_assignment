import React, { Fragment } from 'react';
import para1_img from '../../Images/shape3.png'
import './para1.css';

const Para1 = () => {
    return (
        <Fragment>
            <div className='para1_component'>
                <div>
                    <img src={para1_img} alt="para1_img" />
                </div>
                <div className='para1_wrapper'>
                    <span>We build amazing</span>
                    <div className='wordContainer'>
                        <div className='message'>
                            <div className='word1'>Websites</div>
                            <div className='word2'>apps</div>
                            <div className='word3'>brands</div>
                            <div className='word4'>illustrations</div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </Fragment>
    )
}

export default Para1
