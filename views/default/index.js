import React,{useState,useEffect,useContext} from 'react';
import {View,ScrollView,SafeAreaView} from 'react-native';
import Styles from './style.scss';
import DateHeader from '../../parts/dateHeader';
import Range from '../../parts/range';
import Navigation from '../../parts/navigation';
import {AppContext} from '../../context/appContext';

import Diary from '../../parts/diary';

export default function Default() {
  const [state,setState] = useContext(AppContext);

  return (
    <View style={Styles.body}>
    <ScrollView style={Styles.wrapper}>
    <View style={Styles.paddingWrapper}>
      <Diary/>
      {
        state.pattern.map((obj,index) => {
          console.log(obj);
          if(obj.type == 'range'){
            return <Range data={obj} key={index}/>
          }
        })
      }
      </View>
    </ScrollView>
    <View style={Styles.datePicker}>
      <DateHeader/>
    </View>
    <View style={Styles.navigation}>
      <Navigation/>
    </View>
    </View>
  );
}
