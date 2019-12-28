import React from 'react'

import { Link } from "@reach/router";
import { Layout, Row, Col, Typography, Button } from "antd"

import headerbackground from "../public/background-header.png"
import logo from "../public/logo.png"
import illustration from "../public/illustration.png"

import LoginForm from "./LoginForm"

const { Footer } = Layout
const { Title, Text, Paragraph } = Typography;

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
                        <Col span={8} style={{paddingRight:64}}>
                            <Title style={{marginBottom: 0}}>Welcome,</Title>
                            <Text type="secondary">Please sign into your account.</Text>
                            <p></p>
                            <LoginForm />
                        </Col>
                </Row>
            </div>
                <Footer>
                    <Row style={{marginRight:46, marginLeft:16}} type="flex" align="center" justify="center"> 
                        <Col span={14} style={{display:"flex", alignItems:"center"}}>
                            <Paragraph type="secondary" style={{marginBottom:0}}>© Yonja 2019  |  All Rights Reserved</Paragraph>
                        </Col>
                        <Col span={10}>
                            <Row type="flex" justify="space-around">
                                <Col>
                                    <Button type="link">Help</Button>
                                </Col>
                                <Col>
                                    <Button type="link">Contact Us</Button>

                                </Col>
                                <Col>
                                    <Button type="link">Terms & Conditions</Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
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
                `
                }
            </style>
        </>
    )
}

export default Landing;