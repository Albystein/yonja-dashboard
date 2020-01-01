import React from "react";

import { Link } from "@reach/router";
import {
  Form,
  Icon,
  Input,
  Button,
  Checkbox,
  Row,
  Col,
  Typography
} from "antd";
import { CustomButton as YonjaButton } from "./CustomButton";

const { Text, Paragraph } = Typography;

class LoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator("username", {
            rules: [{ required: true, message: "Please input your username!" }]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Username"
              size="large"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "Please input your Password!" }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              size="large"
              placeholder="Password"
            />
          )}
        </Form.Item>
        <Form.Item>
          <Row>
            <Col span={12}>
              {getFieldDecorator("remember", {
                valuePropName: "checked",
                initialValue: true
              })(<Checkbox>Remember me</Checkbox>)}
            </Col>
            <Col span={12}>
              <a className="login-form-forgot" href="">
                Forgot password?
              </a>
            </Col>
          </Row>
        </Form.Item>
        <Form.Item>
          <Row>
            <Col
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: 24
              }}
            >
              <YonjaButton type="submit">
                <Link to="dashboard">
                  <Text
                    style={{
                      color: "white",
                      fontWeight: 100,
                      fontFamily: "inherit"
                    }}
                  >
                    Sign In
                  </Text>
                </Link>
              </YonjaButton>
            </Col>
            <Col style={{ display: "flex", justifyContent: "center" }}>
              <Paragraph type="secondary">
                I don’t have an account,{" "}
                <Text strong>
                  <a>Register</a>
                </Text>{" "}
              </Paragraph>
            </Col>
          </Row>
        </Form.Item>
      </Form>
    );
  }
}

export default Form.create({ name: "normal_login" })(LoginForm);
