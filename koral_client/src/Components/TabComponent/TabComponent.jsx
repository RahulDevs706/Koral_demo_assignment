import React, { Fragment, useRef } from 'react'
import agencyImg from "../../Images/agency_img.png"
import valueImg from "../../Images/valuesImg.png"
import missionImg from "../../Images/missionImg.png"

import './tabComp.css'

const Tab = () => {

    const agency = useRef(null);
    const values = useRef(null);
    const missions = useRef(null);
    const strategy = useRef(null);
    const tab1 = useRef(null);
    const tab2 = useRef(null);
    const tab3 = useRef(null);
    const tab4 = useRef(null);

    // const switcherTab = useRef(null);

    const para = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

    const switchTabs = (e, tab) => {

        switch (tab) {
            case "agency":
                tab1.current.classList.add("active");
                tab2.current.classList.remove("active");
                tab3.current.classList.remove("active");
                tab4.current.classList.remove("active");
    
                agency.current.classList.remove("shiftToLeft");
                values.current.classList.remove("shiftToNeutralForm");
                values.current.classList.add("shiftToLeft1");

                missions.current.classList.remove("shiftToNeutralForm2");
                strategy.current.classList.remove("shiftToNeutralForm3");

                break;

            case "values":
                tab1.current.classList.remove("active");
                tab2.current.classList.add("active");
                tab3.current.classList.remove("active");
                tab4.current.classList.remove("active");


          
                values.current.classList.add("shiftToNeutralForm");
                values.current.classList.remove("shiftToLeft1");


                agency.current.classList.add("shiftToLeft");


                missions.current.classList.remove("shiftToNeutralForm2");
                missions.current.classList.add("shiftToLeft2");

                strategy.current.classList.add("shiftToLeft3");
                strategy.current.classList.remove("shiftToNeutralForm3");
                break;

            case "mission":
                tab1.current.classList.remove("active");
                tab2.current.classList.remove("active");
                tab3.current.classList.add("active");
                tab4.current.classList.remove("active");


                missions.current.classList.add("shiftToNeutralForm2");
                missions.current.classList.remove("shiftToLeft2");

    
                agency.current.classList.remove("shiftToNeutralForm");
                agency.current.classList.add("shiftToLeft");

                strategy.current.classList.remove("shiftToNeutralForm3");
                strategy.current.classList.add("shiftToLeft3");

                values.current.classList.remove("shiftToNeutralForm");
                values.current.classList.add("shiftToLeft1");
                break;

            case "strategy":
                tab1.current.classList.remove("active");
                tab2.current.classList.remove("active");
                tab3.current.classList.remove("active");
                tab4.current.classList.add("active");
          
                strategy.current.classList.add("shiftToNeutralForm3");
                strategy.current.classList.remove("shiftToLeft3");

                agency.current.classList.remove("shiftToNeutralForm");
                agency.current.classList.add("shiftToLeft");

                missions.current.classList.remove("shiftToNeutralForm2");
                missions.current.classList.add("shiftToLeft2");

                values.current.classList.add("shiftToLeft1");
                values.current.classList.remove("shiftToNeutralForm");
                break;

            default:
                break;
        }
      };
    

    return (
        <Fragment>
            <div data-aos="fade-up" className='tabsContainer'>
                <div className='tabBox'>
                    <div>
                        <div className="tabBtnToggle">
                            <div className='btn_sec1'>
                                <p className='active' ref={tab1} onClick={(e)=>switchTabs(e, "agency")}><span>01</span>Our Agency</p>
                                <p ref={tab2} onClick={(e)=>switchTabs(e, "values")}><span>02</span>Our Values</p>
                            </div>
                            <div className='btn_sec2'>
                                <p ref={tab3} onClick={(e)=>switchTabs(e, "mission")}><span>03</span>Our Mission</p>
                                <p ref={tab4} onClick={(e)=>switchTabs(e, "strategy")}><span>04</span>Our Strategy</p>
                            </div>
                        </div>
                        {/* <button ref={switcherTab}></button> */}

                        <div className='agencyTab' ref={agency}>
                            <div>
                                <h1>We're Koral</h1>
                                <p>{para}</p>
                                <button>GET KORAL</button>
                            </div>
                            <img src={agencyImg} alt="img" />
                        </div>  
                        <div className='valuesTab' ref={values}>
                            <div>
                                <h1>How we do business</h1>
                                <p>{para}</p>
                            </div>
                            <img src={valueImg} alt="img" />
                        </div>  
                        <div className='missionTab' ref={missions}>
                            <div>
                                <h1>Provide peace of mind</h1>
                                <p>{para}</p>
                            </div>
                            <img src={missionImg} alt="img" />
                        </div>  
                        <div className='strategyTab' ref={strategy}>
                            <div>
                                <h1>Video / Motion</h1>
                                <p>{para}</p>
                            </div>
                            <img src={valueImg} alt="img" />
                        </div>  
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Tab
