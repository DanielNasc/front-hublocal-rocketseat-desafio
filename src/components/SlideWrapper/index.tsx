import React from "react";
import "./styles.scss";

const SlideWrapper: React.FC = ({ children }) => {
  return <div className="slide-wrapper">{children}</div>;
};

export default SlideWrapper;
