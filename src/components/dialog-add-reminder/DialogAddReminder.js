import React, { useContext } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import ReminderContext from 'Context/Context';
import useSubmit from 'Hooks/UseSubmit';


function DialogAddReminder(props) {
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  }

  const { months, setMonths } = useContext(ReminderContext);

  const addReminder = (inputs) => {
  }

  const {inputs, handleInputChange, handleSubmit} = useSubmit(addReminder);

	return(
		<Dialog onClose={handleClose} open={open}>
      <DialogTitle>Add Reminder</DialogTitle>
      <form onSubmit={handleSubmit}> 
        <div>
          <TextField
            id="date"
            name="date"
            type="date"
            label="Data"
            inputProps={{ min: "2020-01-01", max: "2020-12-31" }}
            onChange={handleInputChange}
            value={inputs.date || ''}
            InputLabelProps={{
              shrink: true
            }}
          />
          <TextField
            id="time"
            name="time"
            type="time"
            label="Time"
            onChange={handleInputChange}
            value={inputs.time || ''}
            InputLabelProps={{
              shrink: true
            }}
          />
        </div>
        <div>
          <input
            id="color"
            name="color"
            type="color"
            value={inputs.color || ''}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <TextField
            id="city"
            name="city"
            type="text"
            label="City"
            onChange={handleInputChange}
            value={inputs.city || ''}
            InputLabelProps={{
              shrink: true
            }}
          />
        </div>
        <div>
          <TextField
            id="text"
            name="text"
            type="text"
            label="Text"
            onChange={handleInputChange}
            value={inputs.text || ''}
            InputLabelProps={{
              shrink: true
            }}
          />
        </div>
        <button type="submit">Add new reminder</button>
      </form>
		</Dialog>
	);
}

export default DialogAddReminder;
