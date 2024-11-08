import Modal from './components/Modal.jsx'
import Title from './components/Title.jsx'
import './App.css';
import Todo from './components/Todo.jsx'
function App() {
  return (
    <div>

<Title></Title>
<div>
  <input type="text" onChange={(event) => {console.log(event.target.value)}}/>
  <button>Add todo</button>
</div>
<div className='todo__wrapper'>
      <Todo title="Finish Frontend Simplified"
     />
      <Todo title="Finish Interview Section"
       />
      <Todo title="Land a $100k Job"
      />
      
      </div>
      { <Modal modalcode="fasho"></Modal> }
    </div>
    
  );
}

export default App;
