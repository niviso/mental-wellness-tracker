import React,{useState,useEffect,useContext} from 'react';
import {Text,View,TouchableOpacity} from 'react-native';
import {AppContext} from '../../context/appContext';
import Styles from './style.scss';
import {Statistics,Settings,Heart,Home} from '../icon/icons';
import Icon from '../icon/';
export default function Navigation() {
  const [state,setState] = useContext(AppContext);
  const [selected,setSelected] = useState(0);
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
    <TouchableOpacity style={Styles.cell}>
    <Icon source={Home} size={20}/>
    <Text style={{...Styles.cellFont, fontWeight: selected == 0 ? '700' : '300'}}>Diary</Text>
    </TouchableOpacity>
    <TouchableOpacity style={Styles.cell}>
    <Icon source={Heart} size={20}/>
    <Text style={{...Styles.cellFont, fontWeight: selected == 1 ? '700' : '300'}}>Reminders</Text>
    </TouchableOpacity>
    <TouchableOpacity style={Styles.cell}>
    <Icon source={Statistics} size={20}/>
    <Text style={{...Styles.cellFont, fontWeight: selected == 1 ? '700' : '300'}}>Analytics</Text>
    </TouchableOpacity>
    <TouchableOpacity style={Styles.cell}>
    <Icon source={Settings} size={20}/>
    <Text style={{...Styles.cellFont, fontWeight: selected == 2 ? '700' : '300'}}>Settings</Text>
    </TouchableOpacity>
    </View>
  );
}
