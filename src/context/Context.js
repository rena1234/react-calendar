import React, {useState, createContext} from 'react'

const ReminderContext = createContext([['aaaaaa', 'bbbbb'], ['bbbbbb', 'cccccc']]);

export const ReminderProvider = ({children}) => {

  const [number, setNumber] = useState([['aaaaaa', 'ddddd'], ['bbbbbb', 'eeeeee']]);

  return(
    <ReminderContext.Provider value={{
      number,
      setNumber
    }}>
      {children}
    </ReminderContext.Provider>
  )
}

export default ReminderContext;
