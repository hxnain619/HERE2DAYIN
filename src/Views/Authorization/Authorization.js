import React from "react";
import AppContainer from '../../Components/AppContainer';
import Logo from '../../Assets/logo.svg';
import { MDBBtn, MDBIcon } from "mdbreact";
// import 'font-awesome/css/font-awesome.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
const Authorization = () => {
    return (
        <AppContainer>
            <p style={styles.skip}>Skip</p>
            <div style={styles.logoContainer}>
                <img src={Logo} alt="logo" />
            </div>

            <div>
                <MDBBtn style={styles.roundedBtn} color="white">
                    <MDBIcon fab icon="facebook-f" className="pr-1" />facebook
                </MDBBtn>
            </div>
        </AppContainer>
    )
}

const styles = {
    roundedBtn: {
        borderRadius: '20px',
    },
    skip: {
        position: 'absolute',
        width: '34px',
        height: '22px',
        right: '16px',
        top: '20px',

        fontFamily: 'Gilroy',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '17px',
        lineHeight: '22px',
        /* identical to box height, or 129% */

        textAlign: 'right',
        letterSpacing: '0.01em',

        color: '#FFFFFF',
    },
    logoContainer: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '120px',
    }
}

export default Authorization;
