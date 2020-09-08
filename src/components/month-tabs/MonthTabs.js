import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Calendar from 'Components/calendar/Calendar';
  import style from './MonthTabs.module.scss';
//import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
    role="tabpanel"
    hidden={value !== index}
    id={`simple-tabpanel-${index}`}
    className={style['panel']}
    aria-labelledby={`simple-tab-${index}`}
    {...other}
    >
    {value === index && ( <div className={style['content-wrapper']}>{children}</div>)}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    height: '95vh',
    display: 'flex',
    flexDirection: 'column'
  },
}));

export default function MonthTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          { React.Children.toArray(
             Array.from({length: 12}, (x, i) => i).map( x => <Tab label={`${x}`} {...a11yProps(x)} /> ))
          }
        </Tabs>
      </AppBar>
      { React.Children.toArray(
         Array.from({length: 12}, (x,i) => i).map( x => {
           return (
             <TabPanel value={value} index={x}><Calendar/></TabPanel>
           )}
         ))
       }
    </div>
  );
}

