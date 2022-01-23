import React, { Fragment } from 'react'
import "./clientFeedback.css"

const FeedbackCard = ({url, alt, text, name, info}) => {
    return (
        <Fragment>
            <div className='CF_card_wrapper'>
                <div className='CF_card_component'>
                    <img src={url} alt={alt} />
                    <p>{`"${text}"`}</p>
                    <h3>{name}</h3>
                    <h4>{info}</h4>
                </div>
            </div>
        </Fragment>
    )
}

export default FeedbackCard
