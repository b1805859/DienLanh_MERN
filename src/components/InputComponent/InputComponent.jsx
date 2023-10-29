import React from "react";
import { Button, Input } from "antd";

const InputComponent = (props) => {
  const { size, placeholder, bordered, style, ...rests } = props;
  return (
    <Input
      size={size}
      placeholder={placeholder}
      bordered={bordered}
      style={style}
      {...rests}
    />
  );
};

export default InputComponent;
