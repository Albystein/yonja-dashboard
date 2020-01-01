import React, { Component } from "react";

import {
  Layout,
  Menu,
  Icon,
  Row,
  Col,
  Avatar,
  Dropdown,
  Typography,
  Card
} from "antd";
import { Router, Link } from "@reach/router";

import Home from "./Home";
import Schedules from "./Schedules";
import Agents from "./Agents";
import Settings from "./Settings";
import Help from "./Help";

import sidebarBackground from "../public/sidebar.png";
import Logo from "../public/logo.png";

const { Header, Content, Sider } = Layout;

const menu = (
  <Menu>
    <Menu.Item key="1">
      <Icon type="user" />
      1st menu item
    </Menu.Item>
    <Menu.Item key="2">
      <Icon type="user" />
      2nd menu item
    </Menu.Item>
    <Menu.Item key="3">
      <Icon type="user" />
      3rd item
    </Menu.Item>
  </Menu>
);

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarHeight: window.innerHeight
    };
  }
  componentDidMount() {
    window.addEventListener("resize", this.updateSidebarHeight);
  }

  componentWillMount() {
    window.removeEventListener("resize", this.updateSidebarHeight);
  }

  updateSidebarHeight = () => {
    this.setState({ sidebarHeight: window.innerHeight });
  };

  render() {
    return (
      <Layout>
        <Sider
          width={240}
          style={{ height: this.state.sidebarHeight }}
          className="sidebar"
        >
          <img src={sidebarBackground} className="sidebar-image" />
          <div style={{ width: "100%", height: "100%", position: "relative" }}>
            <div className="logo-container">
              <img src={Logo} className="logo" />
            </div>
            <Menu
              defaultSelectedKeys={["home"]}
              mode="inline"
              style={{ backgroundColor: "rgba(0,0,0,0)" }}
              theme="dark"
            >
              <Menu.Item key="home">
                <Link to="">
                  <Icon type="layout" />
                  <span>Home</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="schedules">
                <Link to="schedules">
                  <Icon type="layout" />
                  <span>Schedules</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="agents">
                <Link to="agents">
                  <Icon type="layout" />
                  <span>Agents</span>
                </Link>
              </Menu.Item>
              <div style={{ height: 280 }}></div>
              <Menu.Item key="settings">
                <Link to="settings">
                  <Icon type="layout" />
                  <span>Settings</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="help">
                <Link to="help">
                  <Icon type="layout" />
                  <span>Help</span>
                </Link>
              </Menu.Item>
            </Menu>
          </div>
        </Sider>
        <Layout>
          <Header className="header">
            <Row>
              <Col span={18}>
                <Row type="flex" align="middle">
                  <Col
                    span={2}
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <Icon
                      type="search"
                      style={{ fontSize: 24, fontWeight: "bold" }}
                    />
                  </Col>
                  <Col span={22}>
                    <input
                      className="search-input"
                      placeholder="Find an agent, order..."
                    />
                  </Col>
                </Row>
              </Col>
              <Col span={6} style={{ display: "flex", flexGrow: "inherit" }}>
                <Row type="flex" align="middle">
                  <Col
                    span={4}
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <Icon type="bell" style={{ fontSize: 24 }} />
                  </Col>
                  <Col
                    span={20}
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <Dropdown overlay={menu}>
                      <Card
                        bodyStyle={{
                          display: "flex",
                          alignItems: "center",
                          padding: 0,
                          height: "auto"
                        }}
                        bordered={false}
                      >
                        <Avatar
                          size={48}
                          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80"
                        />
                        <Typography.Text
                          style={{ marginLeft: 10, marginRight: 10 }}
                        >
                          Benjamin Duncan
                        </Typography.Text>
                        <Icon type="down" />
                      </Card>
                    </Dropdown>
                  </Col>
                </Row>
              </Col>
            </Row>
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
    );
  }
}

export default Dashboard;
