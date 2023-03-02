import React,{useState, FormEvent}from "react";
import './styles.css'
import axios from "axios";
import { toast } from "react-toastify";
export default function AddTask(){
const [title, setTitle] = useState("")
const [descrpition, setDescrpition] = useState("")

async function onSubmit(event){
  event.preventDefault();

  try {
  await axios.post("http://localhost:3307/create",{
      title: title,
      descrpition: descrpition
    })
    setTitle("")
    setDescrpition("")
    toast.success("Tarefa adicionada com sucesso!")
    
    
  } catch (error) {
    toast.error(error)
    
  }
}


  return(
    <div className="home-container">
      <h1>Any Task List</h1>
      <span>Gerenciando minha agenda de forma fácil.</span>
      <form className="form">
      <input 
       type="text"
        placeholder="Digite o Titulo da Tarefa"
        value={title}
        onChange={(e)=> setTitle(e.target.value)}
      />
      <textarea 
      placeholder="Digite os detalhes da Tarefa" 
      value={descrpition} 
      onChange={(e)=> setDescrpition(e.target.value)}/>
      <button onClick={onSubmit} type="submit">Adicionar Tarefa</button>
      </form>
      <a href="/">Verificar Tarefas</a>
    </div>
  );
}