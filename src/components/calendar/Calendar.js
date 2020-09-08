import React, { useState } from 'react';
import style from './Calendar.module.scss';
import Col from 'Components/col/Col.js';
import dayjs from 'dayjs';

function Calendar({monthNunmber}) {
  const currentMonthDates = Array.from({length: dayjs().daysInMonth()}, (x, i) => dayjs().startOf('month').add(i, 'days')); 

  const prevMonthDaysOnView = Array.from({length: currentMonthDates[0].get('day')}, (x, i) => dayjs().startOf('month').subtract(i + 1, 'days')).reverse(); 

  const nextMonthDaysOnView = Array.from({length: currentMonthDates[0].get('day') + 31 - currentMonthDates.length}, (x, i) => dayjs().startOf('month').add(1, 'month').add(i, 'days')); 

  const datesByDay = [...prevMonthDaysOnView, ...currentMonthDates, ...nextMonthDaysOnView].reduce(
     (acc, curr) => {
       acc[curr.get('day')].push(curr);
       return acc;
     }
    ,Array.from({length: 7}, (x) => []));

	return(
		<div className={style['calendar']}>
      {
        React.Children.toArray(
          datesByDay.map( d => <Col className={style['cols']}  dayName={d[0].format('dddd')} days={d} />)
        )
      }
		</div>
	);
}

export default Calendar;
