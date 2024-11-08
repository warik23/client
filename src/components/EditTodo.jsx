import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField } from '@mui/material';
import { useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { updateTask } from '../utils';

export const EditTodo=({open, setOpen, id, task}) => {
  const [updatedTask, setUpdatedTask] = useState(task)
  const queryClient = useQueryClient();

  const handleClose = () => {
    setOpen(false);
  };

  const handleUpdate = async () => {
    await updateTask(id,{task:updatedTask})
    queryClient.invalidateQueries('todos')
    handleClose();
  }

  return (
    <React.Fragment>
      
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Edit Task
        </DialogTitle>

        <DialogContent>
        <TextField id="outlined-basic" label="Todo" variant="outlined"
                value={updatedTask}
                onChange={(e)=>setUpdatedTask(e.target.value)}
                multiline
            />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleUpdate} autoFocus>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
