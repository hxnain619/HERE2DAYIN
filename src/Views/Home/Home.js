import React from "react";
import AppContainer from '../../Components/AppContainer';
import Logo from '../../Assets/logo.svg';
import { MDBBtn, MDBIcon } from "mdbreact";
import './style.css';
import Brain from '../../Assets/icons/brain.svg';
import Muscle from '../../Assets/icons/muscle.svg';
import Sleep from '../../Assets/icons/sleep.svg';
import Yoga from '../../Assets/icons/yoga.svg';
import Circle from '../../Assets/icons/circle.svg';

const Home = () => {
    return (
        <AppContainer>
            <div className="page-container">
                <div>
                    <div className="logoContainer">
                        <img src={Logo} alt="logo" />
                    </div>
                    <p className="sub-heading">Science-backed personalized programs</p>
                    <div className="categories-container">
                        <div className="category-container">
                            <img src={Brain} alt="Brain" />
                            <p className="category-text">Increase your brain power</p>
                        </div>
                        <div className="category-container">
                            <img src={Muscle} alt="Muscle" />
                            <p className="category-text">Be mentally and physically fit</p>
                        </div>
                        <div className="category-container" style={{position: 'relative'}}>
                            <img src={Yoga} alt="Yoga" style={{ position: 'absolute', top: '18px'}} />
                            <img src={Circle} alt="circle" style={{position: 'relative'}}/>
                            <p className="category-text">Build your resilience</p>
                        </div>
                        <div className="category-container">
                            <img src={Sleep} alt="Sleep" />
                            <p className="category-text">{`Sleep well & be happy`}</p>
                        </div>

                    </div>
                </div>


                <div className="footer">
                    <MDBBtn className="roundedBtn" color="white">
                        <span className="buttonText">Continue</span>
                    </MDBBtn>
                </div>
            </div>
        </AppContainer>
    )
}

export default Home;
