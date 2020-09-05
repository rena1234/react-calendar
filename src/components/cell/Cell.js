import React, { useState } from 'react';
import style from './Cell.module.scss';
import DoneIcon from '@material-ui/icons/Done';

function Cell(props) {

	return(
		<div className={style['cell']}>
      <div className={style['cell__number']}>{props.day.get('date')}</div> 
		</div>
	);
}

export default Cell;
