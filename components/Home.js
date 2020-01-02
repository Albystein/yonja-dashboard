import React from "react";

import { Card, Row, Col } from "antd";

import Map from "./Map";

const Home = () => {
  return (
    <Row>
      <Col span={16}>
        <div style={{ paddingTop: 40, paddingLeft: 27, paddingRight: 40 }}>
          <Row gutter={32} type="flex" justify="space-between">
            {[1, 2, 3].map(_ => (
              <Col span={8}>
                <Card
                  style={{
                    minWidth: 186,
                    minHeight: 129,
                    width: "auto",
                    height: 150,
                    borderRadius: 14,
                    boxShadow: "0 6px 16px 0 rgba(0, 0, 0, 0.08)",
                    backgroundColor: "#ffffff"
                  }}
                  bordered={false}
                />
              </Col>
            ))}
          </Row>
          <Row style={{ marginTop: 32 }}>
            <Card
              style={{
                width: "100%",
                height: 243,
                borderRadius: 14,
                boxShadow: "0 6px 16px 0 rgba(0, 0, 0, 0.08)",
                backgroundColor: "#ffffff"
              }}
              bordered={false}
            />
          </Row>
        </div>
      </Col>
      <Col span={8}>
        <div style={{ height: "100vh", width: "100%" }}>
          <Map />
        </div>
      </Col>
    </Row>
  );
};

export default Home;
