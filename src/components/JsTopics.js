import react from "react"

const JsTopic = ({text, todo,toDos,setTodos}) => {
    const onClickDelete = (e) => {
        setTodos(toDos.filter(el => el.id !== todo.id))
    }
    const onClickDone = () => {
        setTodos(toDos.map(item => {
            if(item.id === todo.id){
                return{
                    ...item, completed:!item.completed
                }
            } return item;
        }))
    }
    return(
        <div className='todo'>
            <li className={`todo-item ${todo.completed ? 'completed': ''}`}> {text}</li>
            <button className="complete-btn" onClick={onClickDone}>
                <i className="fas fa-check"></i>
            </button>
            <button className="trash-btn" onClick={onClickDelete}> 
                <i className="fas fa-trash"></i>
            </button>
        </div>
    )
}

export default JsTopic