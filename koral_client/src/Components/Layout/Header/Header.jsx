/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, Fragment, useEffect, useRef} from 'react'
import './header.css'
import {BiSearchAlt as Search} from "react-icons/bi"
import {BsCart3 as Cart} from "react-icons/bs"
import {GiHamburgerMenu as Menu} from "react-icons/gi"
import {MdClose as Close} from "react-icons/md"

import logo from "../../../Images/logo.png"

const Header = () => {
    const headerLinks = [
        {
            id:1,
            type:'HOME',
            data:[{
                    id:1,
                    type:"home1",
                    subData:["home1.1", "home1.2"]
                },
                {
                    id:2,
                    type:"home2",
                },
                {
                    id:3,
                    type:"home2",
                },
                {
                    id:4,
                    type:"home2",
                }
             ]
        },
        {
            id:2,
            type:'PAGES',
            data:[{
                id:1,
                type:"page1",
                subData:["page1.1", "page1.2"]
            },
            {
                id:2,
                type:"page2",
            }
         ]        },
        {
            id:3,
            type:'PORTFOLIOS',
            data:[{
                id:1,
                type:"pf1",
            },
            {
                id:2,
                type:"pf2",
            }
         ]        },
        {
            id:4,
            type:'HEADERS',
            data:[{
                id:1,
                type:"header1",
            },
            {
                id:2,
                type:"header2",
            }
         ]        },
        {
            id:5,
            type:'ELEMENTS',
            data:[{
                id:1,
                type:"element1",
            },
            {
                id:2,
                type:"element2",
            }
         ]        },
        {
            id:6,
            type:'BLOGS',
            data:[{
                id:1,
                type:"blogs1",
                subData:["blogs1.1", "blogs1.2"]
            },
            {
                id:2,
                type:"blogs2",
            }
         ]        }
    ]


    const [status, setStatus] = useState(false)

    const [prevScrollPosition, setPrevScrollPosition] = useState(0);

    const navbar = useRef(null);

    const handleScroll =()=>{
        const currentPos = window.scrollY;

        if(prevScrollPosition>currentPos){
            navbar.current.style.top = '0';
        }else{
            navbar.current.style.top = '-50%';
        }

        setPrevScrollPosition(currentPos)
    }
    

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        };
    }, [handleScroll]);
    
    return (
        <Fragment>
        <div ref={navbar} className='headerWrapper'>
            <a href='/' className='header_logo'>
                <img src={logo} alt='Logo' />
            </a>

            <div style={window.innerWidth>=600 || status?{display:"block"}:{display:"none"}} className='header_links'>
                <ul>
                    {headerLinks.map((item, index)=>(
                        <li key={index}>
                        <button>{item.type}</button>
                            <ul>
                                {item.data.map((itemData, index)=>(
                                    <li key={index}>
                                        <button>{itemData.type}</button>
                                        {itemData.subData && 
                                            <ul>
                                            {itemData.subData.map((item, index)=>(
                                                <li key={index}><button>{item}</button></li>
                                            ))}
                                        </ul>
                                        }
                                        
                                    </li>
                                ))}
                            </ul>
                        
                        </li>
                    ))}
                </ul>
                
            </div>
            
            

            <div className='header_icons'>
                <div className='icons'><Search /></div>
                <div className='icons'><Cart /></div>
                <div id='menu' onClick={()=>setStatus(!status)}  className='icons'>{status? <Close /> : <Menu/>}</div>
            </div>
            
        </div>
    </Fragment>
    )
}

export default Header
