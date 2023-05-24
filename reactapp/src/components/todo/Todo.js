import React from "react";
import ToDoItem from "../toDoItem"
class Todo extends React.Component {
    state = {
        elements: [
            {
                id: '35464351', isCompleted: false, titlle: "zrobić zakupy"
            },
            {
                id: '89797873578', isCompleted: false, titlle: "opłacić domenę"
            }
        ]
    }
    markCompleted(id){
        const index = this.state.elements.findIndex(x => x.id === id)
        const newElements = this.state.elements
        newElements[index] = true
        this.setState({
            elements:newElements
        })
    }
    render() {
        const elements = this.state.elements.map(e => {
            return <ToDoItem element={e} markCliked={this.markCompleted.bind(this)}/>
        })
        return (
            <div>
                Todo app
                {elements}
            </div>
        )
    }
}

export default Todo