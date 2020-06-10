import React from "react";
import AppContainer from '../../Components/AppContainer';
import Logo from '../../Assets/logo.svg';
import { MDBBtn, MDBIcon } from "mdbreact";
import googleIcon from '../../Assets/Social/google.png';
import fbIcon from '../../Assets/Social/fb.png';
import mailIcon from '../../Assets/Social/mail.png';
import { Link } from 'react-router-dom';

const Authorization = () => {
    return (
        <AppContainer>
            <div style={styles.pageContainer}>
                <div>
                    <Link to="/home"><p style={styles.skip}>Skip</p></Link>
                    <div style={styles.logoContainer}>
                        <img src={Logo} alt="logo" />
                    </div>
                </div>
                <div style={styles.footer}>
                    <MDBBtn style={styles.roundedBtn} color="white">
                        <img src={googleIcon} alt="google-icon" style={styles.icon} />
                        <span style={styles.buttonText}>Continue with Google</span>
                    </MDBBtn>
                    <MDBBtn style={styles.roundedBtn} color="white">
                        <img src={fbIcon} alt="google-icon" style={styles.icon} />
                        <span style={styles.buttonText}>Continue with Facebook</span>
                    </MDBBtn>
                    <MDBBtn style={styles.roundedBtn} color="white">
                        <img src={mailIcon} alt="google-icon" style={styles.icon} />
                        <span style={styles.buttonText}>Sign up with Email</span>
                    </MDBBtn>
                    <p style={styles.loginText}>Have an account? <span style={styles.underline}>Log in</span></p>
                </div>
            </div>
        </AppContainer>
    )
}

const styles = {
    underline: {
        textDecoration: 'underline'
    },
    loginText: {
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: '12px',
        lineHeight: '17px',
        letterSpacing: '0.06em',
        color: '#FFFFFF',
    },
    buttonText: {
        fontWeight: '600',
        letterSpacing: '0.02em',
        color: '#101F2D',
        textTransform: 'capitalize',
    },
    icon: {
        position: 'absolute',
        left: '22px',
        width: '16px',
    },
    pageContainer: {
        
        flex: 1,
        display: 'flex',
        minHeight: '100vh',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    footer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    roundedBtn: {
        borderRadius: '20px',
        height: '40px',
        width: '90%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    skip: {
        position: 'absolute',
        right: '16px',
        top: '20px',
        fontFamily: 'Gilroy',
        fontWeight: '500',
        fontSize: '17px',
        letterSpacing: '0.01em',
        color: '#FFFFFF',        
    },
    logoContainer: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '100px',
    }
}

export default Authorization;
