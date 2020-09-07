import React, { useState } from 'react';
import style from './Reminder.module.scss';
import DialogAddReminder from 'Components/dialog-add-reminder/DialogAddReminder';

function Reminder({position, reminder}) {
  const dynamicStyle = {
    background: reminder.color? reminder.color: 'white'
  }

  const [open, setOpen] = useState(false);
  
  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  }

	return(
    <div>
      <div onClick={handleClickOpen} className={style['reminder']} style={dynamicStyle}>
        {reminder.text} 
      </div>
      <DialogAddReminder position={position} open={open} edit={true} data={reminder} onClose={handleClose} />
    </div>
	);
}

export default Reminder;
