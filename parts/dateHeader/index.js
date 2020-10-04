import React,{useState,useEffect,useContext} from 'react';
import {Text,View,TouchableOpacity,Image} from 'react-native';
import {AppContext} from '../../context/appContext';
import Styles from './style.scss';
import moment from 'moment';
import Icon from '../icon/';
import {Apple,Rainy,Onion} from  '../icon/icons';

export default function DateHeader() {
  const [state,setState] = useContext(AppContext);
  const UpdateDate = (n) => {
    var newDate = moment(state.currentDate).add(n, 'days').format('YYYY-MM-DD');
    setState({...state,currentDate:newDate});
  }
  const GetStatus = () => {
    if(state.status.mood == 'happy'){
      return Apple
    }
    if(state.status.mood == 'normal'){
      return Onion
    }
    if(state.status.mood == 'sad'){
        return Rainy
    }
  }
  return (
    <View style={Styles.body}>
    <View style={Styles.wrapper}>
    <TouchableOpacity style={Styles.cellSide} onPress={() => UpdateDate(-1)}>
    <Text style={Styles.textSize}>←</Text>
    </TouchableOpacity>
    <View style={Styles.cellMiddle}>
    <Text style={Styles.textSize}>{state.currentDate.toString()}</Text>
    </View>
    <TouchableOpacity style={Styles.cellSide} onPress={() => UpdateDate(1)}>
    <Text style={Styles.textSize}>→</Text>
    </TouchableOpacity>
    </View>
    <Text style={Styles.textSizeSmall}>{state.editing ? 'EDITING' : moment(state.currentDate).format('dddd')}</Text>
    </View>
  );
}
