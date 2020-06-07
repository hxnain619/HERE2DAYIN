import React from 'react';
import '../../App.css';

const AppContainer = ({ children, gradient = 'linear-gradient(180deg, #36D1DC -9.85%, #5B86E5 69.33%)' }) => {
    console.log(gradient);
    return (
        <div className="app-screen" style={styles.container(gradient)}>
            {children}
        </div>
    )
}

const styles = {
    container: gradient => {
        return {
            backgroundImage: `url(/static/media/background.a5cbf223.svg), ${gradient}`,
        }
    }
}
export default AppContainer;
