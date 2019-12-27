import React from 'react'

import { Layout } from "antd"
import { Router, Link } from "@reach/router"

import Home from "./Home"
import Schedules from "./Schedules"
import Agents from "./Agents"
import Settings from "./Settings"
import Help from "./Help"

const { Header, Content, Sider} = Layout

const Dashboard = () =>{
    return (
        <Layout>
            <Sider width={240}>
                <Link to="">Home</Link>
                <Link to="schedules">Schedules</Link>
                <Link to="agents">Agents</Link>
                <Link to="settings">Settings</Link>
                <Link to="help">Help</Link>
            </Sider>
            <Layout>
                <Header>
                    <Link to="/">Logout</Link>
                    <p>Heading</p>
                </Header>
                <Content>
                    <Router>
                        <Home path="/" />
                        <Schedules path="/schedules" />
                        <Agents path="/agents" />
                        <Settings path="/settings" />
                        <Help path="/help" />
                    </Router>
                </Content>
            </Layout>
        </Layout>
    )
}

export default Dashboard;