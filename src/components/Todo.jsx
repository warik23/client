import { Divider, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import DoneIcon from '@mui/icons-material/Done';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';
import { EditTodo } from './EditTodo';
import { useQueryClient } from '@tanstack/react-query';
import { delTodo, updateCompleted } from '../utils';

export const Todo = ({id,task,completed}) => {
  const [open, setOpen] = useState(false);
  const queryClient = useQueryClient()

  const handleDelete=async ()=>{
    await delTodo(id)
    queryClient.invalidateQueries('todos')
  }
  const handleDone=async()=>{
    await updateCompleted(id)
    queryClient.invalidateQueries('todos')
  }
  const handleEdit=()=>{
    setOpen(true);
  }

  return (
    <>
      <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{color:completed?"green":"gray"}}>
                <DoneIcon onClick={handleDone}/>
              </ListItemIcon>

              <ListItemText primary={task} sx={{textDecoration:completed?"line-through":"none"}}/>

              <ListItemIcon sx={{color:'red'}} >
                <DeleteIcon onClick={handleDelete} />
              </ListItemIcon>

              <ListItemIcon sx={{color:'blue'}}>
                <EditIcon onClick={handleEdit} />
              </ListItemIcon>

            </ListItemButton>
          </ListItem>
          <Divider/>
          {open && <EditTodo open={open} setOpen={setOpen} id={id} task={task} />}
    </>
  )
}


