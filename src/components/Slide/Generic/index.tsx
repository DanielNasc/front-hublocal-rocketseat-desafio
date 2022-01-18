import React from "react";
import "./styles.scss";

interface SlideProps {
  title?: string;
  paragraph?: string;
  background?: string;
  children?: React.ReactNode;
}

export const Slide: React.FC<SlideProps> = (props) => {
  return (
    <div
      className="slide"
      {...(props.background && {
        style: { backgroundImage: `url(${props.background})` },
      })}
    >
      <h1>{props.title}</h1>
      {props.paragraph && <p>{props.paragraph}</p>}
      {props.children}
    </div>
  );
};
