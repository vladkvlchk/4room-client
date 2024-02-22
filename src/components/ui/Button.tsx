import React from "react";

type ButtonComponentType = {
    disabled?: boolean;
    type?: 'submit';
    children?: any;
}

const Button : React.FC<ButtonComponentType> = ({ disabled, type, children }) => {
  return (
    <button
      className={`${
        disabled ? "bg-color3 text-color2" : "bg-black text-white"
      } p-3.5 border-2 rounded-lg font-inter m-2`}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
