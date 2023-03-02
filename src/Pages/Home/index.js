import React, {useState, useEffect} from "react";
import axios from "axios";
import './styles.css'
import {BsFillCheckSquareFill} from 'react-icons/bs'
import { toast } from "react-toastify";
export default function Home(){

const [task, setTask] = useState([])


useEffect(() => {
  async function getTask(){
    const response = await axios.get("http://localhost:3307/task")
 setTask(response.data)
 console.log(response.data)
}
 getTask()
 
  }, [])

  async function handleDelete(id){
    try {
    await  axios.delete("http://localhost:3307/finish",{data: {id:id}})
    toast.success("Tarefa concluida com sucesso")
    window.location.reload(true);
      
    } catch (error) {
      toast.error(error)
      
    }
  }



 return(
    <div className="list-container">
      <h1>Minhas Tarefas</h1>
      {task.length > 5 ? <h3 style={{color: 'red'}}>Se continar assim o dia nao vai render nada</h3> 
      : <h3 style={{color: 'green'}}> Parabens esta indo muito bem</h3> }
       <div className="list" >
       <div className="item">
        {task.map((item)=>(
          <li key={item.id}>
            <strong>{item.title}</strong>
            <span>{item.descrpition}</span>
        <BsFillCheckSquareFill onClick={()=>handleDelete(item.id)} size={15}/> 
        </li>
        ))}
      </div>
      </div>
      <a href="/create">Adicionar mais tarefas</a>
    </div>
  );
}