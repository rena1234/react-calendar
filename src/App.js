import React, { useState, useContext } from 'react';
import style from './App.module.scss';
import Calendar from 'Components/calendar/Calendar';
import AddReminder from 'Components/add-reminder/AddReminder';
import { ReminderProvider, ReminderContext } from 'Contexts/Context';
import MonthTabs from 'Components/month-tabs/MonthTabs';

function App (props) {
  const [months, setMonths] = useState(Array.from({length: 12}, x => Array.from({length: 31}, x => [])));
  const dialogOpen = props.dialogOpen? props.dialogOpen: false;
      /*
      <div className={style['app']}>
        <Calendar />
        <AddReminder dialogOpen={dialogOpen}/>
      </div>
      */
	return(
    <ReminderProvider value={months}>
      <MonthTabs className="teste" />
      <AddReminder dialogOpen={dialogOpen}/>
    </ReminderProvider>
	);
}

export default App;
