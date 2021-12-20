import React from "react";
import homeImg from '../../assets/home/home-background.jpeg'

const homeStyle = {
    backgroundImage:`url(${homeImg})`,
    height:"100vh",
    width:"100vw",
    backgroundSize:"100%",
    backgroundRepeat:"no-repeat"
}

class Home extends React.Component{

    render() {
        return (
            <div className="app">
                <div style={homeStyle} className="home-slogan"> jknj</div>
            </div>
        )
    }
}

export default Home;
