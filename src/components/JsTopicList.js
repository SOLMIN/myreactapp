import react from 'react'
import JsTopics from './JsTopics'

const JsTopicList = ({toDos, setTodos, filteredTodos}) => {
    return(
        <div className='todo-container'>
            <ul className='todo-list'>
                {filteredTodos.map((a) => (
                    <JsTopics 
                        todo={a}
                        toDos={toDos} 
                        setTodos={setTodos} 
                        key = {a.id} 
                        text={a.text}/>
                ))}
            </ul>
        </div>
    );
};
export default JsTopicList