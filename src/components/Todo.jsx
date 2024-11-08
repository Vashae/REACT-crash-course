import  './Todo.css'
function deletetodo (){
console.log(`wow`)
}



function Todo ({title}){
    return (
        <div className='todo'>
        <p>{title}</p>
        <button onClick={deletetodo}>Delete</button>
      </div>
    );
}

export default Todo