const withLess = require('@zeit/next-less')
const withCSS = require("@zeit/next-css")
module.exports = withLess(
  withCSS({
    lessLoaderOptions: {
    javascriptEnabled: true
    }}))