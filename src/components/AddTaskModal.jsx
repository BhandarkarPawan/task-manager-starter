import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import * as React from 'react';



const AddTaskModal = ({addTask}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [taskName, setTaskName] = React.useState('');
    
  const handleAdd = () => {
        addTask(taskName);
        setTaskName('');
        handleClose();
    }

  return (
    <div>
      <Button onClick={handleOpen} variant="contained" color="success">Add Task</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-md shadow-md w-4/5">
          <Typography id="modal-modal-title" variant="h6" component="h2" className='pb-4'>
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" className="mb-4">
          Enter the required information about the task you would like to add: 
          </Typography>
          <Stack spacing={2} direction="column">
            <TextField
                id="outlined"
                label="Task Name"
                placeholder='Type Something'
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
            />
            <Button 
                variant="contained"
                color="success" 
                className="self-end"
                onClick={handleAdd}
            >
                Add
            </Button>
        </Stack>
        </Box>
      </Modal>
    </div>
  );
}

export default AddTaskModal;