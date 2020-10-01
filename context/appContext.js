import React, { useState } from 'react';
import {Dimensions} from 'react-native';
import moment from 'moment';
const AppContext = React.createContext([{}, () => {}]);

const AppProvider = (props) => {
  const [appState, setAppState] = useState({
    currentDate: moment().format('YYYY-MM-DD'),
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
        headline: '1',
        values: [0,1,2,3,4,5],
      },
      {
        id: "2",
        type: 'input',
        headline: '2',
        values: [0,1,2,3,4,5],
      },
      {
        id: "3",
        type: 'range',
        headline: '3',
        values: [0,1,2,3,4,5],
      },
      {
        id: "4",
        type: 'range',
        headline: '4',
        values: [0,1,2,3,4,5],
      },
      {
        id: "5",
        type: 'range',
        headline: '5',
        values: [0,1,2,3,4,5],
      },
    ]
  });

  return (
    <AppContext.Provider value={[appState, setAppState]}>
      {props.children}
    </AppContext.Provider>
  );
}

export { AppContext, AppProvider };
