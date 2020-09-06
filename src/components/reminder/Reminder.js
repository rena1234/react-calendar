import React, { useState } from 'react';
import style from './Reminder.module.scss';

function Reminder(props) {

	return(
		<div className={style['reminder']}>
      {props.text} 
		</div>
	);
}

export default Reminder;
