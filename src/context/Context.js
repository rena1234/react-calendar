import React, {useState, createContext} from 'react'

const ReminderContext = createContext();

export const ReminderProvider = ({children}) => {

  const [months, setMonths] = useState(Array.from({length: 12}, x => Array.from({length: 31}, x => [])));

  return(
    <ReminderContext.Provider value={{
      months,
      setMonths
    }}>
      {children}
    </ReminderContext.Provider>
  )
}

export default ReminderContext;
