import React from "react";
import {Layout} from "antd";
import Header from '../header/header'
import Footer from '../footer/footer'
import './layout.css'

class HomeLayout extends React.Component{

    render() {
        const {children,page} = this.props
        return (
            <div className="app">
                <Layout>
                    <Layout.Header>
                        <Header />
                    </Layout.Header>

                    <Layout.Content>
                        {children}
                    </Layout.Content>

                    <Layout.Footer>
                        <Footer />
                    </Layout.Footer>
                </Layout>

            </div>
        )
    }
}

export default HomeLayout;
