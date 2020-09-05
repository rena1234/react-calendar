import React, { useState } from 'react';
import style from './Col.module.scss';
import Cell from 'Components/cell/Cell';

function Col(props) {

	return(
		<div className={style['col']}>
      <div className={style['col__header']}>
        {props.dayName}
      </div>
      <div className={style['col__content']}>
        { React.Children.toArray(
           props.days.map( d => <Cell day={d}/> )
           )}
      </div>
		</div>
	);
}

export default Col;
