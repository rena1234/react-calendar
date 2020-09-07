import React, { useState, useContext } from 'react';
import style from './App.module.scss';
import Calendar from 'Components/calendar/Calendar';
import AddReminder from 'Components/add-reminder/AddReminder';
import { ReminderProvider, ReminderContext } from 'Contexts/Context';

function App (props) {
  const [months, setMonths] = useState(Array.from({length: 12}, x => Array.from({length: 31}, x => [])));
  const dialogOpen = props.dialogOpen? props.dialogOpen: false;
	return(
    <ReminderProvider value={months}>
      <div className={style['app']}>
        {useContext[1]}
        <Calendar />
        <AddReminder dialogOpen={dialogOpen}/>
      </div>
    </ReminderProvider>
	);
}

export default App;
