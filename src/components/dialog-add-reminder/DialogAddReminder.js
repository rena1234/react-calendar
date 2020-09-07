import React, { useContext } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import ReminderContext from 'Context/Context';


function DialogAddReminder(props) {
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  }

  const { number, setNumber } = useContext(ReminderContext);
  const addReminder = () => {
    console.log(ReminderContext);
    setNumber([['ggggga', 'ddddd'], ['bbbbbb', 'eeeeee']]);
  }

	return(
		<Dialog onClose={handleClose} open={open}>
      <DialogTitle>Add Reminder</DialogTitle>
      <form> 
        <div>
            <TextField
              id="date"
              type="date"
              label="Data"
              InputLabelProps={{
                shrink: true
              }}
            />
          <TextField
            id="time"
            type="time"
            label="Time"
            InputLabelProps={{
              shrink: true
            }}
          />
        </div>
        <div>
          <input
            id="color"
            type="color"
          />
        </div>
        <div>
          <TextField
            id="city"
            type="text"
            label="City"
            InputLabelProps={{
              shrink: true
            }}
          />
        </div>
        <div>
          <TextField
            id="text"
            type="text"
            label="Text"
            InputLabelProps={{
              shrink: true
            }}
          />
        </div>
      </form>
      <button onClick={addReminder}>Add new reminder</button>
		</Dialog>
	);
}

export default DialogAddReminder;
