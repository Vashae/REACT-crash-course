import  './Todo.css'
function Todo ({title, paragraph}){
    return (
        <div className='todo'>
        <h1>{title}</h1>
        <p> {paragraph} </p>
        <button>Delete</button>
      </div>
    );
}

export default Todo