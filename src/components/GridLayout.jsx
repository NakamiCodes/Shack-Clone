import React from "react";
import { WidthProvider, Responsive } from "react-grid-layout";
import "../css/Grid.css";

const ResponsiveGridLayout = WidthProvider(Responsive);

const GridLayout = () => {
  const layouts = {
    lg: [
      { i: "a", x: 0, y: 0, w: 1, h: 2 },
      { i: "b", x: 1, y: 0, w: 3, h: 2 },
      { i: "c", x: 4, y: 0, w: 1, h: 2 },
    ],
  };

  return (
    <div class="container">
      <div>Hello world</div>
      <div>I ma boy</div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default GridLayout;
