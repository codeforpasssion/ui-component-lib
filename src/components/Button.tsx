import React from "react";
import classNamesUtils from "./classNamesUtils";

const Button = ({ className = "", children, ...rest }) => {
  return (
    <button
      className={classNamesUtils(
        `bg-blue-500 text-blue-50 m-2 p-2 rounded-md ${className}`
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
