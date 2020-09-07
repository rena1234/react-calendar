import React, { useState, useContext } from 'react';
import style from './App.module.scss';
import Calendar from 'Components/calendar/Calendar';
import AddReminder from 'Components/add-reminder/AddReminder';
import { ReminderProvider, ReminderContext } from 'Context/Context';

function App(props) {
  //console.log({context: useContext(reminderContext)});
  //const [number, setNumber] = useContext(reminderContext);
  //console.log(number);
  const reminders = [
    ['aaaaaa', 'bbbbb'], ['bbbbbb', 'cccccc']
  ];
	return(
    <ReminderProvider value={reminders}>
      <div className={style['app']}>
        {useContext[1]}
        <Calendar />
        <AddReminder />
      </div>
    </ReminderProvider>
	);
}

export default App;
