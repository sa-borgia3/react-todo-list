import React from 'react'

function InputTodo(props) {
    return (
        <div>
            <input type="text" value={props.value} onChange={props.change} placeholder='Add Task' onKeyPress={props.add}/>
        </div>
    )
}

export default InputTodo
