import React, { useState } from 'react';
import {Dimensions} from 'react-native';
import moment from 'moment';
const AppContext = React.createContext([{}, () => {}]);

const AppProvider = (props) => {
  const [appState, setAppState] = useState({
    currentDate: moment().format('YYYY-MM-DD'),
    editing: false,
    loaded: false,
    data:{},
    pattern:[]
  });

  return (
    <AppContext.Provider value={[appState, setAppState]}>
      {props.children}
    </AppContext.Provider>
  );
}

export { AppContext, AppProvider };
