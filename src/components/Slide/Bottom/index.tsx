import React from "react";
import { Slide } from "../Generic";

interface BottomProps {
  children?: React.ReactNode;
}

export const Bottom: React.FC<BottomProps> = (props) => {
  return (
    <div className="Bottom">
      <Slide
        title="Deseja participar?"
        background="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
        children={props.children}
      />
    </div>
  );
};
