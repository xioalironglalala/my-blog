import React from "react";
import {Layout} from "antd";
import Header from '../header/header'
import Footer from '../footer/footer'
import './layout.css'

class HomeLayout extends React.Component{

    render() {
        return (
            <div className="app">
                <Layout>
                    <Header />
                    <Footer />
                </Layout>

            </div>
        )
    }
}

export default HomeLayout;
