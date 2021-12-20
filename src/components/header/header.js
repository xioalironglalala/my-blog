import React from "react";
import {BrowserRouter as Router, Link} from "react-router-dom";
import './header.css'
import Route from "../../router/router";

class Header extends React.Component {

    componentDidMount() {
        window.addEventListener("scroll",this.handleScroll)
    }

    handleScroll = (e) =>{
        const header = document.getElementById("header")
        if(window.pageYOffset>=80){
            header.classList.add("header-bg")
        }else{
            header.classList.remove("header-bg")
        }
    }

    render() {
        return (
            <Router>
                <div className="header" id="header">
                    <div className="nav">
                        <ul>
                            <li>
                                <Link to="/">表紙</Link>
                            </li>
                            <li>
                                <Link to="/blog">ブログ</Link>
                            </li>
                            <li>
                                <Link to="/blog">音楽</Link>
                            </li>
                            <li>
                                <Link to="/blog">ムード</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="content">
                    <Route/>
                </div>
            </Router>

        )
    }
}
export default Header;
