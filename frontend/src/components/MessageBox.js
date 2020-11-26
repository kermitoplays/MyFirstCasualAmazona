import React from "react";

export default function MessageBox(props) {
  return <div className={`alert alert-${props.varriant || "info"}`}>
      {props.children /*we passed {error} in homescreen to here! as a child */} 
  </div>;
}
