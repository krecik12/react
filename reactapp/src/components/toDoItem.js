import React from "react"
const ToDoItem = props => {
    return (<div className={`card ${props.element.isCompleted ? 'completed' : ""}`} key={props.element.id}>
        <h2>{props.element.titlle}</h2>
        <button onClick={() => props.markCliked(props.element.id)}>zakonczone</button>
    </div>
    )
}

export default ToDoItem