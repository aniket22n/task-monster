import React from 'react'

function Display() {
    const todos = [
        {
          task: 1,
          value: "Work on Project"
        },
        {
          task: 2,
          value: "meeting at 10 am"
        }
      ];
  return (
    <div>
       {todos.map(task=>{
        return <p1>{task.value}<span>   </span><button type="button" className="btn btn-primary">
         delete
         </button>
         <br></br>
         </p1>
       })}
    </div>
  )
}

export default Display