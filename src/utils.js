import axios from 'axios'

const url = "http://localhost:3000"

export const getTodos=async ()=>{
    const response = await axios.get(url+'/todos')
    return response;
}

export const delTodo=async (id)=>{
    const response = await axios.delete(url+'/todos/'+id)
    return response;
}

export const updateCompleted=async (id)=>{
    const response = await axios.put(url+'/todos/completed/'+id)
    return response;
}

export const updateTask=async (id,data)=>{
    const response = await axios.put(url+'/todos/task/'+id,data)
    return response;
}

export const addTodo=async (data)=>{
    const response = await axios.post(url+'/todos',data)
    return response;
}

