import React from "react";
import AppContainer from '../../Components/AppContainer';
import { Link } from 'react-router-dom';

const ExperienceStep2 = () => {
    return (
        <AppContainer>
            <div style={styles.pageContainer}>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <Link to="/ExperienceStep1">
                        <p style={styles.back} >&lt;</p>
                    </Link>
                    <Link to="/ExperienceStep2">
                        <p style={styles.skip}>Skip</p>
                    </Link>
                </div>
                <div style={styles.progressBar}>
			    	<span style={styles.progressBarFill} ></span>
			    </div>
                <div>
                    <p style={styles.heading} >
                        Let's Personailize your experience
                    </p>
                </div>
                <div style={{display: 'flex', justifyContent: 'center'}} >
                    <div style={{textAlign: 'center', marginTop: 100, width: '95%' }} >
                        <div style={styles.roundedBtnSelected}>Kid</div>
                        <div style={styles.roundedBtn}>Female</div>
                        <div style={styles.roundedBtn}>Millennial</div>
                        <div style={styles.roundedBtn}>Senior</div>
                    </div>
                </div>
                {/* <div style={styles.footer}>
                </div> */}
            </div>
        </AppContainer>
    )
}

const styles = {
    pageContainer: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    heading: {
        textAlign: 'center',
        display: 'block',
        // marginTop: 20,
        color: 'white',
        fontSize: 24,
        margin: 20,
        // fontWeight: 700,
        fontFamily: 'Courgette'
    },
    back: {
        position: 'absolute',
        left: 16,
        top: 20,
        fontWeight: 500,
        fontSize: 17,
        letterSpacing: '0.01em',
        color: '#FFFFFF',        
    },
    skip: {
        position: 'absolute',
        right: 16,
        top: 20,
        fontFamily: 'Gilroy',
        fontWeight: 500,
        fontSize: 17,
        letterSpacing: '0.01em',
        color: '#FFFFFF',        
    },
    roundedBtn: {
        border: '2px solid White',
        textAlign: 'center',
        color: 'white',
        fontWeight: 700,
        borderRadius: 30,
        marginTop: 10,
        height: 50,
        width: '100%',
        padding: 10
    },
    roundedBtnSelected: {
        border: '2px solid White',
        textAlign: 'center',
        color: 'orange',
        backgroundColor: 'white',
        fontWeight: 700,
        borderRadius: 30,
        marginTop: 10,
        height: 50,
        width: '100%',
        padding: 10
    },
    progressBar: {
        margin: 20,
        marginTop: 80,
        backgroundColor: '#e0e0e0',
        borderRadius: 3,
        boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, .2)',
    },
    progressBarFill: {
        display: 'block',
        height: 3,
        background: 'linear-gradient(119deg, #FC9D83 -0.59%, #FFCE00 107.84%)',
        borderRadius: 3,
        transition: 'width 500ms ease-in-out',
        width: '30%',
    },
    footer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
}

export default ExperienceStep2;





