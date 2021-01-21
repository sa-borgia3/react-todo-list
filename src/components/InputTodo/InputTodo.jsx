import classes from './InputTodo.module.css'


const InputTodo = ({setInputText}) => {
    //functions
    const inputTexthandler = (e) => {
        //console.log(e.target.value);
        setInputText(e.target.value);
    }

    return (
        <div>
            <input className={classes.input} type="text" value={inputTexthandler} onChange={inputTexthandler} placeholder='Add Task' />
        </div>
    )
}

export default InputTodo
