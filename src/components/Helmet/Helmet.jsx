import React from 'react'

const Helmet = (props) => {
    document.title = "Rent Car Service - " + props.title;
    return <div className="w-100">{props.children}</div>;
  };
// const Helmet = (props) => {
//   document.title = "Rent Car Service - " + props.title;
//   return Object.assign(document.createElement("div"), { children: props.children });
// };

  
  

export default Helmet

