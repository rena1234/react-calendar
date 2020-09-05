import React from 'react';
import ReactDOM from 'react-dom';
import Calendar from	'Components/calendar/Calendar.js';

const wrapper = document.getElementById('root');
wrapper ? ReactDOM.render(
	<React.StrictMode>
		<Calendar/>
	</React.StrictMode>,
	wrapper):
	false;
