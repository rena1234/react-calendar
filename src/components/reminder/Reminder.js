import React, { useState } from 'react';
import style from './Reminder.module.scss';

function Reminder(props) {

	return(
		<div className={style['reminder']} data-color="green">
      {props.text} 
		</div>
	);
}

export default Reminder;
