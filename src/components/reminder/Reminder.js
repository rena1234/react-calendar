import React, { useState } from 'react';
import style from './Reminder.module.scss';

function Reminder(props) {
  const dynamicStyle = {
    background: 'red'
  }
	return(
		<div className={style['reminder']} style={dynamicStyle}>
      {props.text} 
		</div>
	);
}

export default Reminder;
