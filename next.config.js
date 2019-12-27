const withLess = require('@zeit/next-less')
const withCSS = require("@zeit/next-css")
const withImage = require("next-images")

module.exports = withLess(
  withImage(
  withCSS({
    lessLoaderOptions: {
    javascriptEnabled: true
}})))