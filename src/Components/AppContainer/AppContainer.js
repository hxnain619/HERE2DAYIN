import React from 'react';
import '../../App.css';
import BgImage from '../../Assets/background.svg';
const AppContainer = ({ children, gradient = 'linear-gradient(180deg, #36D1DC -9.85%, #5B86E5 69.33%)' }) => {
    return (
        <div className="app-screen" style={styles.container(gradient)}>
            {children}
        </div>
    )
}

const styles = {
    container: gradient => {
        return {
            backgroundImage: `${gradient}`,
            
        }
    }
}
export default AppContainer;
