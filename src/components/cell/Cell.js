import React, { useState, useContext } from 'react';
import style from './Cell.module.scss';
import Reminder from 'Components/reminder/Reminder';
import dayjs from 'dayjs';
import ReminderContext from 'Contexts/Context';
import DeleteIcon from '@material-ui/icons/Delete';

function Cell(props) {
  const { months, setMonths } = useContext(ReminderContext);
  const month = props.day.get('month');
  const date = props.day.get('date');
  const reminders = months[month][ date - 1];

  const deleteAll = () => {
    const updatedMonths = JSON.parse(JSON.stringify(months));
    updatedMonths[month][ date - 1] = [];
    setMonths(updatedMonths);

  }

	return(
		<div id={`r-${month}-${date}`} className={style['cell']}>
      <div className={
          `${style['cell__number']} ${props.day.get('month') != dayjs().get('month')? style['cell__number--out--month'] : ''} `}>
        {props.day.get('date')}</div> 
      <div className={style['cell__reminder--container']}>
        { React.Children.toArray(
           reminders.map( (r, i) => <Reminder position={i} reminder={r}/> )
           )}
      </div>
      <DeleteIcon onClick={deleteAll}/>
		</div>
	);
}

export default Cell;
