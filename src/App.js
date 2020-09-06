import React, { useState } from 'react';
import style from './App.module.scss';
import Calendar from 'Components/calendar/Calendar';
import AddReminder from 'Components/add-reminder/AddReminder';

function App(props) {

	return(
		<div className={style['app']}>
      <Calendar />
      <AddReminder />
		</div>
	);
}

export default App;
