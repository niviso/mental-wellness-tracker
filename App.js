import React,{useState,useEffect} from 'react';
import {View} from 'react-native';
import {AppProvider} from './context/appContext';
import Default from './views/default';
import Reminders from './views/reminders';
import OnBoarding from './views/onBoarding';
import Analytics from './views/analytics';
import Settings from './views/settings';
import Loading from './views/loading';
import Navigation from './parts/navigation';
import Styles from './styles.scss';
import AsyncStorageHelper from './helpers/asyncStorageHelper';
export default function App(){
  const [view,setView] = useState('loading');
  const [loaded,setLoaded] = useState(false);

    useEffect(() => {
      if(!loaded){
        AsyncStorageHelper.get("mwtracker_data").then(result => {
          setLoaded(true);
          if(result){
            setView('default');
          } else {
            setView('onboarding');
          }
        });
      }
    });

  return (
    <>
    <AppProvider>
    {view == 'default' && <Default setView={setView}/>}
    {view == 'onboarding' && <OnBoarding setView={setView}/>}
    {view == 'reminders' && <Reminders setView={setView}/>}
    {view == 'analytics' && <Analytics setView={setView}/>}
    {view == 'settings' && <Settings setView={setView}/>}
    {view == 'loading' && <Loading/>}

    {view !== 'onboarding' && view !== 'loading' && (
    <View style={Styles.navigation}>
      <Navigation setView={setView} view={view}/>
    </View>
    )}
    </AppProvider>
    </>
  );
}
