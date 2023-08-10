import React from "react";

function Button(props) {
  if (props.btn === "btn1") {
    return <button className={props.className}> {props.text}</button>;
  } else if (props.btn === "btn2") {
    return <button className={props.className}>{props.text}</button>;
  }
}

export default Button;
