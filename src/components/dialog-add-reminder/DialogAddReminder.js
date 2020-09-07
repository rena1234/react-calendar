import React, { useContext } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import ReminderContext from 'Contexts/Context';
import useSubmit from 'Hooks/UseSubmit';


function DialogAddReminder(props) {
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  }

  const { months, setMonths } = useContext(ReminderContext);

  const addReminder = ({city, date, text, time, color}) => {
    const day = parseInt(date.split('-')[2]);
    const month = parseInt(date.split('-')[1]);
    let updatedMonths = JSON.parse(JSON.stringify(months));
    updatedMonths[month - 1][day - 1].push(
        {text: text, color: color, time: time, city: city});
    setMonths(updatedMonths);
  }

  const {inputs, handleInputChange, handleSubmit} = useSubmit(addReminder);

	return(
		<Dialog onClose={handleClose} open={open}>
      <DialogTitle>Add Reminder</DialogTitle>
      <form onSubmit={handleSubmit}> 
        <div>
          <TextField
            id="add-date-input"
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
            id="add-time-input"
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
            id="add-color-input"
            name="color"
            type="color"
            value={inputs.color || ''}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <TextField
            id="add-city-input"
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
            id="add-text-input"
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
        <button id="add-reminder-button" type="submit" onClick={handleSubmit}>Add new reminder</button>
      </form>
		</Dialog>
	);
}

export default DialogAddReminder;
