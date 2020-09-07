import React, { useState } from 'react';
import style from './AddReminder.module.scss';
import DialogAddReminder from 'Components/dialog-add-reminder/DialogAddReminder';

function AddReminder(props) {
  const [open, setOpen] = useState(props.dialogOpen);
  
  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  }

	return(
		<div id='test-add-reminder-button' className={style['add-reminder']}>
      <button onClick={handleClickOpen}>Add new reminder</button>
      <DialogAddReminder open={open} edit={false} onClose={handleClose} />
		</div>
	);
}

export default AddReminder;
