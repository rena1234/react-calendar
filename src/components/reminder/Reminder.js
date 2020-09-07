import React, { useState } from 'react';
import style from './Reminder.module.scss';

function Reminder({reminder}) {
  const dynamicStyle = {
    background: reminder.color 
  }
	return(
		<div className={style['reminder']} style={dynamicStyle}>
      {reminder.text} 
		</div>
	);
}

export default Reminder;
