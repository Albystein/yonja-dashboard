import React from "react";

import { Button } from "antd";
import "../css/main.css";

export const CustomButton = props => {
  const { children, ...moreProps } = props;
  return (
    <div className="custom-button">
      <a href="#" className="button" {...moreProps}>
        {children}
      </a>
    </div>
  );
};
