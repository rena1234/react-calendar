import React, { useState } from 'react';
import style from './AddReminder.module.scss';

function AddReminder(props) {

	return(
		<div className={style['add-reminder']}>
      <button>Add new reminder</button>
		</div>
	);
}

export default AddReminder;
