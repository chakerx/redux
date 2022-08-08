import './App.css';
import {useSelector} from 'react-redux'
import TodoListe from './component/todoList';
import AddItem from './component/add';
import FilterTodo from './component/filtre';
import Header from './component/header';


function App() {
  
  let todoListe = useSelector(state => state.Todo.todoListe)
  let Filtered = useSelector(state => state.Todo.filterItem)
  return (
    <div className="App">
      <div className='container'>
      <div className='app-wrapper'>
    <Header></Header>
    <AddItem></AddItem>
    <TodoListe todoListe={(Filtered==='Completed')?todoListe.filter(el=>el.completed===true):(Filtered==='Undone') ?todoListe.filter(el=>el.completed===false): todoListe}></TodoListe> 
    <FilterTodo></FilterTodo>
   
    </div>
    </div> 
    </div>
  );
}

export default App;