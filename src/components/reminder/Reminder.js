import React, { useState } from 'react';
import style from './Reminder.module.scss';

function Reminder({reminder}) {
  const dynamicStyle = {
    background: reminder.color? reminder.color: 'white'
  }

	return(
		<div id='' className={style['reminder']} style={dynamicStyle}>
      {reminder.text} 
		</div>
	);
}

export default Reminder;
