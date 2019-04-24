import React from "react";
import "./style.css";

function Title(props) {
  return <div classnName="card">
    <h1 className="title">{props.children}</h1>
    <p className="message">{props.message}</p>
  </div>
}

export default Title;
