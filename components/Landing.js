import React from 'react'

import { Link } from "@reach/router";
import { Layout, Row, Col } from "antd"

import headerbackground from "../public/background-header.png"
import logo from "../public/logo.png"
import illustration from "../public/illustration.png"

import LoginForm from "./LoginForm"

const { Header, Content, Footer } = Layout

const Landing = (props) =>{
    return (
        <>
        <div className="flex-wrapper">
            <header className="header">
                <img src={logo} className="logo" />
                <img src={headerbackground} className="header-image" />
            </header>
            <div className="content">
                <Row>
                <Col span={14}>
                            <img src={illustration} className="illustration"/>
                        </Col>
                        <Col span={10} style={{paddingRight:64}}>
                            <LoginForm />
                        </Col>
                </Row>
            </div>
                <Footer className="footer">
                    <p>Footer</p>
                </Footer>
            </div>
            <style jsx>
                {
                `  .flex-wrapper {
                    display: flex;
                    min-height: 100vh;
                    flex-direction: column;
                    justify-content: space-between
                  }
                    .header {
                        position:relative;
                        margin:0;
                        height:auto;
                        background-color:white;
                    }
                    .header-image {
                        width:100%;
                        height:176px;
                        z-index:0;
                    }
                    .logo {
                        position:absolute;
                        width: 204.2px;
                        height: 88px;
                        object-fit: contain;
                        right:155.8px;
                        top:44px;
                    }
                    .content {
                        padding: 0 120px 0 80px;
                    }
                    .illustration {
                        width: 488px;
                        height: 392px;
                        object-fit: contain;
                    }
                    .footer {
                        background-color:#fff;
                    }
                `
                }
            </style>
        </>
    )
}

export default Landing;