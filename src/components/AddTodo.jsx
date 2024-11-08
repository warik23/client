import { Button, TextField } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { v4 } from 'uuid';
import { addTodo } from '../utils';
import { QueryClient, useQueryClient } from '@tanstack/react-query';

export const AddTodo = () => {
    const [newTask, setNewTask] = useState("");

    const queryClient = useQueryClient();

    const handleAdd= async ()=>{
        await addTodo({task:newTask});
        queryClient.invalidateQueries('todos');
         setNewTask('')
    }

    return (
        <div className='addtodo'>
            <TextField id="outlined-basic" label="Todo" variant="outlined"
                sx={{ backgroundColor: "bisque" }}
                value={newTask}
                onChange={(e)=>setNewTask(e.target.value)}
            />

            <Button variant="contained"
                sx={{ backgroundColor:"bisque", border:"1px solid black", color:"black" }}
                onClick={handleAdd}

                disabled={newTask.length==0 ? true : false}
            >Add Task</Button>
        </div>
    )
}


