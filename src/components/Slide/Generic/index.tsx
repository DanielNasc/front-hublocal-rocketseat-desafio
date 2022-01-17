import React from "react";
import "./styles.scss";

const Slide: React.FC<SlideProps> = (props) => {
  return (
    <div
      className="slide"
      {...(props.background && {
        style: { backgroundImage: `url(${props.background})` },
      })}
    >
      <h1>{props.title}</h1>
      <p> {props.paragraph} </p>
    </div>
  );
};

export default Slide;
