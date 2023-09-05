import React from "react";
const ActiveTask = (props: any) => {
  return (
      <li className={`task ${props.status}`}>{props.title}</li>
  )
}

export default ActiveTask;