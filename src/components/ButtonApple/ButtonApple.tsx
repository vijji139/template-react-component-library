import React from "react";

export interface ButtonProps {
  label: string;
}

const ButtonApple = (props: ButtonProps) => {
  return <button>{props.label}</button>;
};

export default ButtonApple;