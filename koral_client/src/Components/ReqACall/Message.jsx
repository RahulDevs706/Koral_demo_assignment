import React, { Fragment } from 'react';
import "./RTC.css"

const Message = ({success,message}) => {


  return <Fragment>
      <div className={success?"true":"false"}>
          {message} 
      </div>
  </Fragment>;
};

export default Message;
