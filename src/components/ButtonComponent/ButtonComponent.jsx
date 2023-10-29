import React from "react";
import { Button } from "antd";
const ButtonComponent = (props) => {
  const { size, styleButton, styleTextButton, textButton, ...rest } = props;

  return (
    <Button size={size} style={styleButton} {...rest}>
      <span style={styleTextButton}>{textButton}</span>
    </Button>
  );
};

export default ButtonComponent;
