import React, { useState } from 'react';
import {Dimensions} from 'react-native';
import moment from 'moment';
const AppContext = React.createContext([{}, () => {}]);

const AppProvider = (props) => {
  const [appState, setAppState] = useState({
    currentDate: moment().format('YYYY-MM-DD'),
    editing: false,
    status:{
      mood: 'sad' //happy,normal,sad
    },
    data:{
      '2020-10-01': {
        '1': {
          value: 0
        }
      }
    },
    pattern:[
      {
        id: "1",
        type: 'range',
        headline: 'How are you feeling today?',
      },
      {
        id: "3",
        type: 'input',
        headline: 'Notes about today',
      }
    ]
  });

  return (
    <AppContext.Provider value={[appState, setAppState]}>
      {props.children}
    </AppContext.Provider>
  );
}

export { AppContext, AppProvider };
