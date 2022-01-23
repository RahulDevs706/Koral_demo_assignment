import React, { Fragment } from 'react'
import FeedbackCard from "./FeedbackCard.jsx"
import "./clientFeedback.css"
import Carousel from 'react-material-ui-carousel'


import avatarImg1 from "../../Images/Client_Feedback_Images/avatar_img_1.jpg";
import avatarImg2 from "../../Images/Client_Feedback_Images/avatar_img_2.jpg";
import avatarImg3 from "../../Images/Client_Feedback_Images/avatar_img_3.jpg";


import {GrNext as Next, GrPrevious as Prev} from 'react-icons/gr'

const ClientFeedback = () => {

    const tempFeedback = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    
    const feedbacks=[
        {
            url:avatarImg1,
            name:"Jack Shapeard",
            feedback:tempFeedback,
            info:"Upper"
        },
        {
            url:avatarImg2,
            name:"Maria Madiera",
            feedback:tempFeedback,
            info:"Agency"
        },
        {
            url:avatarImg3,
            name:"Lucas Crasy",
            feedback:tempFeedback,
            info:"Theme Forest"
            
        }
    ]

    
    return (
        <Fragment>
            <div className='CF_Component'>
                <div className='CF_Wrapper'>
                    <div className='CF_heading'>
                        <h1>Clients Feedback</h1>
                    </div>
                    <Carousel 
                        NextIcon={<Next/>} 
                        PrevIcon={<Prev />} 
                        navButtonsProps={{className:"navBtn"}} 
                        indicatorIconButtonProps={{className:"indicatorBtn" }}
                        activeIndicatorIconButtonProps={{className:"actvIndicBtn"}} 
                        className="CF_carousel"
                        animation='slide'
                    > 
                    {feedbacks.map((item, index)=>(
                        <FeedbackCard 
                            key={index}
                            url={item.url} 
                            alt={item.name} 
                            text={item.feedback} 
                            name={item.name} 
                            info={item.info} 
                        />
                    ))}                   
                    </Carousel> 

                </div>
            </div>
        </Fragment>
    )
}

export default ClientFeedback
