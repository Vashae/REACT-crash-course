import Modal from './components/Modal.jsx';
import Title from './components/Title.jsx';
import './App.css';
import Todo from './components/Todo.jsx';
import Counter from './components/Counter.jsx'
import React, { useState } from 'react';

function App() {
  return <Counter />
   // eslint-disable-next-line 
 const [showModal, setShowModal] = useState(false)


  return (
    <div>
<Title></Title>
<div>
  <input type="text" onChange={(event) => {console.log(event.target.value)}}/>
  <button onClick={() => setShowModal(true)}>Add todo</button>
</div>
<div className='todo__wrapper'>
      <Todo title="Finish Frontend Simplified"
     />
      <Todo title="Finish Interview Section"
       />
      <Todo title="Land a $100k Job"
      />
      
      </div>
      { showModal && <Modal modalcode="confirm delete"></Modal> }
    </div>
    
  );
}

export default App;
