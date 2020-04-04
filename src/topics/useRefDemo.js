import React from "react";
import ImgComponent from "./imgComponent";

const ImgHoverEffect = (params) => {
  return <div style={{ display: 'flex', justifyContent: 'space-between', overflow: 'hidden' }}>
    <ImgComponent
      primaryImg="https://images.unsplash.com/photo-1560779937-740129433ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80"
      secondryImg="https://images.unsplash.com/photo-1557348959-b081033fb6ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80" />
    <ImgComponent
      primaryImg="https://images.unsplash.com/photo-1568299273577-64c090fb8354?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80" secondryImg="https://images.unsplash.com/photo-1525332597345-33ca938484b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80" />
  </div>
}

export { ImgHoverEffect };
