import React, { useState } from 'react';
import style from './AddReminder.module.scss';
import DialogAddReminder from 'Components/dialog-add-reminder/DialogAddReminder';

function AddReminder(props) {
  const [open, setOpen] = useState(false);
  
  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  }

	return(
		<div className={style['add-reminder']}>
      <button onClick={handleClickOpen}>Add new reminder</button>
      <DialogAddReminder open={open} onClose={handleClose} />
		</div>
	);
}

export default AddReminder;
