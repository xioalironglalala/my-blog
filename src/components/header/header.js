import React from "react";
import {Link, Route} from 'react-router-dom';
import './header.css'

class Header extends React.Component {

    render() {
        return (
            <>
                <div className="header">
                    <div className="nav">
                        <ul>
                            <li>
                                <a href="">标题1</a>
                            </li>
                            <li>
                                <a href="">标题2</a>
                            </li>
                            <li>
                                <a href="">标题3</a>
                            </li>
                            <li>
                                <a href="">标题4</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </>

        )
    }
}

export default Header;
