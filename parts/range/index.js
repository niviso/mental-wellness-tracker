import React,{useState,useEffect,useContext} from 'react';
import {Text,View,TouchableOpacity} from 'react-native';
import {AppContext} from '../../context/appContext';
import Styles from './style.scss';
export default function Range() {
  const [state,setState] = useContext(AppContext);
  const [mood,setMood] = useState(null);
  const UpdateMood = (n) => {
    var tmp = JSON.parse(JSON.stringify(state));
    if(!tmp.data[state.currentDate]){
      tmp.data[state.currentDate] = {}
    }
    tmp.data[state.currentDate].mood = n;
    setState(tmp);
  }
  useEffect(() => {
    if(state.data[state.currentDate][i].){
      setMood(state.data[state.currentDate].mood);
    } else{
      setMood(null);
    }
  });
  return (
    <View style={Styles.body}>
    <Text style={Styles.header}>
    How are you feeling?
    </Text>
    <View style={Styles.wrapper}>
    <TouchableOpacity onPress={() => UpdateMood(1)} style={{...Styles.button,backgroundColor: mood == 1 ? '#44ba5d' : 'white' }}>
    <Text style={Styles.buttonText}>
    1
    </Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => UpdateMood(0)} style={{...Styles.button,backgroundColor: mood == 0 ? '#fff98b' : 'white' }}>
    <Text style={Styles.buttonText}>
    0
    </Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => UpdateMood(-1)} style={{...Styles.button,backgroundColor: mood == -1 ? '#D54F60' : 'white' }}>
    <Text style={Styles.buttonText}>
    -1
    </Text>
    </TouchableOpacity>
    </View>
    </View>
  );
}
