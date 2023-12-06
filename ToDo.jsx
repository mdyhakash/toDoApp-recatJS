import './main'
import  { useState } from "react";


const Todo = () => {

const [title, settitle] = useState("")
const [desc, setdesc] = useState("")
const [mainTask, setMainTask]=useState([])

const submitHandler = (e)=>{
e.preventDefault();

setMainTask([...mainTask, {title, desc}])
settitle("")
setdesc("")
}
const deleteHandler = (i) =>{
  let copyTask = [...mainTask]
  copyTask.splice(i,1)
  setMainTask(copyTask)
}

let renderTask = <h2>No task to do</h2>
if(mainTask.length>0){
  renderTask = mainTask.map((t,i)=>{
    return (
      <li key={i}> 
        <div>
        <h5>Title: {t.title}</h5>
        <h5> Description: {t.desc}</h5>
        <button onClick={()=>{deleteHandler(i)}}>Delete</button>
        <hr />
      </div>
      </li>
    );
  })
}

  return (
    <>
    <h1 className="bg-black">My ToDos</h1>
    <form onSubmit={submitHandler}> 
    <input type="text" placeholder="Enter your task" value={title}
    
    onChange={(e)=>{
      settitle(e.target.value)
    }}
    />
    <br />
    <input type="text" placeholder="Enter description" value={desc}
    
    onChange={(e)=>{
      setdesc(e.target.value)
    }} />
    <br />
    <button>Add</button>
    </form>

    <hr />
    <div>
    <ul>{renderTask}</ul>
    </div>
    

    
    
        
    </>
  )
}

export default Todo;
