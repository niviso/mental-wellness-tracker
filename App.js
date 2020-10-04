import React,{useState,useEffect} from 'react';
import {AppProvider} from './context/appContext';
import Default from './views/default';
import OnBoarding from './views/onBoarding';

export default function App(){
  const [view,setView] = useState('onboarding');
  return (
    <>
    <AppProvider>
    {view == 'default' && <Default setView={setView}/>}
    {view == 'onboarding' && <OnBoarding setView={setView}/>}

    </AppProvider>
    </>
  );
}
