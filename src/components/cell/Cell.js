import React, { useState, useContext } from 'react';
import style from './Cell.module.scss';
import Reminder from 'Components/reminder/Reminder';
import dayjs from 'dayjs';
import ReminderContext from 'Context/Context';

function Cell(props) {
  console.log(useContext(ReminderContext));
	return(
		<div className={style['cell']}>
      <div className={
          `${style['cell__number']} ${props.day.get('month') != dayjs().get('month')? style['cell__number--out--month'] : ''} `}>
        {props.day.get('date')}</div> 
      <div className={style['cell__reminder--container']}>
        <Reminder text="test"  />      
      </div>
		</div>
	);
}

export default Cell;
