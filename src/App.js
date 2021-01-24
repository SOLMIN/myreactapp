
import react, {useState, useEffect} from 'react'
import './App.css';
import Form from './components/Form'
import JsTopics from './components/JsTopics';
import JsTopicList from './components/JsTopicList'
import Example from './components/Example';


function App () {
  const [inputText, setInputText] = useState("")
  const [toDos, setTodos] = useState([])
  const [status, setStatus] = useState("all")
  const [filteredTodos, setFilterTodos] = useState([])

  // component Did Mount
  useEffect(() => {
    filterHandler()
    savelocalStorage()
   }, [toDos, status]);

   useEffect(() => {
     console.log(' Use Effect CAlled')
     getLocalStorage()
   },[])

  const filterHandler = () => {
    switch(status) {
      case 'completed': setFilterTodos(toDos.filter(todo =>  todo.completed === true))
      break;
      case 'uncompleted': setFilterTodos(toDos.filter(todo =>  todo.completed === false))
      break;
      default : setFilterTodos(toDos)
      break
    }
  }

  const savelocalStorage = () => {
    localStorage.setItem("toDos", JSON.stringify(toDos))
    console.log('toDoLocal While Setting', localStorage.getItem("toDos", JSON.stringify(toDos)))
  }

  const getLocalStorage = () => {
    let toDoLocal = localStorage.getItem("toDos", toDos)
    console.log('toDoLocal', toDoLocal)
    // if(localStorage.getItem("toDos") === null) {
    //   localStorage.setItem("toDos", JSON.stringify([]))
    // } else{
    //   console.log('Entered in else ')
    //   let toDoLocal = localStorage.getItem("toDos", toDos)
    //   console.log(toDoLocal)
    //   // setTodos(toDoLocal)
    // }
  }

  return (
    <div className="App">
      <header>
        <h2>JavaScript Topics To Be Covered</h2>
      </header>
      <Form 
        toDos={toDos} 
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
        status={status}
        setStatus={setStatus}
        />
      <JsTopicList toDos={toDos} setTodos={setTodos} filteredTodos={filteredTodos}/>
      {/*<  Example/> */}
    </div>
  );
}

export default App;
