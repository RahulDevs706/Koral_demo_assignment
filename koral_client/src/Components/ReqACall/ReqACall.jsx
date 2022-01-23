import React, { Fragment, useState } from 'react'
import "./RTC.css"
import axios from "axios"
import Message from "./Message"

const ReqACall = () => {

    const [messageDet, setMessageDet] = useState({
        name:"",
        email:"",
        subject:"",
        service:"Web Design",
        message:""
    });

    const [response, setResponse] = useState({
        success:"",
        message:""
    });

    const {name, email, subject, service, message} = messageDet;

    const handleSubmit = async(e)=>{
        e.preventDefault();

    
        await axios.post(
            'https://koral-assignment.herokuapp.com/api/v1/send',
            messageDet
        ).then(data=>{
            setResponse({
                success:true,
                message:data.data.message
            })

            setMessageDet(
                {       
                    name:"",
                    email:"",
                    subject:"",
                    service:"Web Design",
                    message:""
            })
        }).catch(error=>{
            setResponse({
                success:false,
                message:error.response.data.message
            });
        })


        setTimeout(()=>{setResponse({
            success:""
        })}, 5000)
    }


    const handleChange = (e)=>{
        const {name, value} = e.target;

        setMessageDet({...messageDet, [name]:value})
    }

    return (
        <Fragment>
            <div className='RTC_container'>
                <p>We have clients all over the world</p>
                <h1>Request a Quote Today!</h1>

                <form onSubmit={handleSubmit}>
                    <div className='RTC_form_Sec_1'>

                        <div className='form_name'>
                            <label>Your Name</label>
                            <input type="text" name="name" value={name} onChange={handleChange} autoComplete='off' required/>
                        </div>
                        <div className='form_email'>
                            <label>Your Email</label>
                            <input type="email" name="email" value={email} onChange={handleChange} autoComplete='off' required/>
                        </div>

                    </div>

                    <div className='RTC_form_Sec_2'>

                        <div className='form_subject'>
                            <label>Subject</label>
                            <input type="text" name="subject" value={subject} autoComplete='off' onChange={handleChange}/>
                        </div>
                        <div className='form_service'>
                            <label>Service Desired</label>
                            <select id='service' value={service} onChange={handleChange}  name="service">
                                <option value="Web Design">Web Design</option>
                                <option value="Branding">Branding</option>
                                <option value="Web APS">Web APS</option>
                                <option value="Graphic">Graphic</option>
                                <option value="Support">Support</option>
                            </select>
                        </div>

                    </div>

                    <div className='RTC_form_Sec_3'>

                        <div className='form_message'>
                            <label>Your Message</label>
                            <textarea name="message" value={message} onChange={handleChange} rows='10' columns='30' />
                        </div>

                    </div>
                    {response.success!=="" &&
                    <Message success={response.success} message={response.message} />
                }
                    <button className="RTC_btn">Send Email</button>
                </form>
            </div>
        </Fragment>
    )
}

export default ReqACall
