import React,{useState,useEffect} from 'react';
import {AppProvider} from './context/appContext';
import Default from './views/default';
export default function App() {
  return (
    <>
    <AppProvider>
    <Default/>
    </AppProvider>
    </>
  );
}
