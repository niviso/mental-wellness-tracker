import React,{useState,useEffect} from 'react';
import {View,SafeAreaView} from 'react-native';
import Styles from './style.scss';
import DateHeader from '../../parts/dateHeader';
import MoodPicker from '../../parts/moodPicker';
import Navigation from '../../parts/navigation';

import Diary from '../../parts/diary';

export default function Default() {
  return (
    <View style={Styles.wrapper}>
      <DateHeader/>
      <MoodPicker/>
      <Diary/>
      <View style={Styles.navigation}>
      <Navigation/>
      </View>
    </View>
  );
}
