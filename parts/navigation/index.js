import React,{useState,useEffect,useContext} from 'react';
import {Text,View,TouchableOpacity} from 'react-native';
import {AppContext} from '../../context/appContext';
import Styles from './style.scss';
import {Statistics,Settings,Heart,Home} from '../icon/icons';
import Icon from '../icon/';
export default function Navigation(props) {
  const {setView,view} = props;
  const [state,setState] = useContext(AppContext);
  const UpdateMood = (n) => {
    var tmp = JSON.parse(JSON.stringify(state));
    if(!tmp.data[state.currentDate]){
      tmp.data[state.currentDate] = {}
    }
    tmp.data[state.currentDate].mood = n;
    setState(tmp);
  }
  useEffect(() => {

  });
  return (
    <View style={Styles.body}>
    <TouchableOpacity onPress={() => setView('default')} style={Styles.cell}>
    <Icon source={Home} size={20}/>
    <Text style={{...Styles.cellFont, fontWeight: view == 'default' ? '700' : '300'}}>Diary</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => setView('reminders')} style={Styles.cell}>
    <Icon source={Heart} size={20}/>
    <Text style={{...Styles.cellFont, fontWeight: view == 'reminders' ? '700' : '300'}}>Reminders</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => setView('analytics')} style={Styles.cell}>
    <Icon source={Statistics} size={20}/>
    <Text style={{...Styles.cellFont, fontWeight: view == 'analytics' ? '700' : '300'}}>Analytics</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => setView('settings')} style={Styles.cell}>
    <Icon source={Settings} size={20}/>
    <Text style={{...Styles.cellFont, fontWeight: view == 'settings' ? '700' : '300'}}>Settings</Text>
    </TouchableOpacity>
    </View>
  );
}
