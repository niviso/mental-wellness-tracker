import React, { useState } from 'react';
import {Dimensions} from 'react-native';
import timestamp from 'time-stamp';
import moment from 'moment';
const AppContext = React.createContext([{}, () => {}]);

const AppProvider = (props) => {
  const [appState, setAppState] = useState({
    currentDate: moment().format('YYYY-MM-DD'),
    data:{
      '2020-09-29': {mood: 0,diary: "test"}
    },
    pattern:[
      {
        id: "1",
        type: 'range',
        headline: 'test',
        values: [0,1,2,3,4,5]
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
