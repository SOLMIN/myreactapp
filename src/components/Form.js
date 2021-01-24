import react from 'react'

const Form = (props) => {
    
    // Saving After Typing
    const onTyping =(e) => {
        props.setInputText(e.target.value)
    }

    // On CLicking Add Button
    const OnSubmit = (e) => {
        e.preventDefault() // For preveting it from vanishing 
        props.setTodos([
            ...props.toDos, 
            {text: props.inputText, completed:false, id:Math.floor(Math.random() * 1000)}
        ]);
        props.setInputText('');
    }

    const OnStatusCLicked = (e) => {
        props.setStatus(e.target.value)
    }
    return(
        <form>
            <input 
                value={props.inputText} 
                onChange={onTyping} 
                type="text" 
                className="todo-input" />
            <button onClick={OnSubmit} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select name="todos" className="filter-todo" onClick={OnStatusCLicked}>
                    <option value="all">All Topics</option>
                    <option value="completed">Completed Topics</option>
                    <option value="uncompleted">Uncompleted Topics</option>
                </select>
            </div>
        </form>
    )
}

export default Form