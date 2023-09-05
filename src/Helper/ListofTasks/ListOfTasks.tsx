import React from "react";
import ActiveTask from "../activeTask/ActiveTask";

const ListOfTasks = (props: any) => {
  return (
      props.list.map((task: any): any => {
          if (task.status === props.status){
              return <ActiveTask title={task.title} key={task.id} status={task.status}/>
          }
      })
  )
}

export default ListOfTasks;