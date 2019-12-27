import React from 'react'

import { Router } from "@reach/router";
import Landing from "../components/Landing";
import Dashboard from "../components/Dashboard"

import "./antd.less"

const Home = () => (
  <Router>
    <Landing path="/" />
    <Dashboard path="/dashboard/*" />
  </Router>
)

export default Home
