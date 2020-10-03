import React, { useState } from 'react';
import {Dimensions} from 'react-native';
import moment from 'moment';
const AppContext = React.createContext([{}, () => {}]);

const AppProvider = (props) => {
  const [appState, setAppState] = useState({
    currentDate: moment().format('YYYY-MM-DD'),
    editing: false,
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
        headline: 'How do you feel today?',
      },
      {
        id: "3",
        type: 'input',
        headline: 'Diary',
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
