import React,{useState,useEffect,useContext,useRef} from 'react';
import {Text,View,TouchableOpacity,TextInput,Keyboard} from 'react-native';
import {AppContext} from '../../context/appContext';
import Slider from '@react-native-community/slider';

import Styles from './style.scss';
export default function Input(props) {
  const [state,setState] = useContext(AppContext);
  const [value,setValue] = useState(null);
  const element = useRef(null);
  const {data,edit,preview} = props;
  const SetValue = (n) => {
    n = n.toFixed(2);
    var tmp = JSON.parse(JSON.stringify(state));
    if(!state.data[state.currentDate]){
      tmp.data[state.currentDate] = {}
    }
    if(!tmp.data[state.currentDate][data.id]){
      tmp.data[state.currentDate][data.id] = {value: n}
    } else {
    tmp.data[state.currentDate][data.id].value = n;
    }
    setState(tmp);
  }
  const OnChanged = (n) => {
    //console.log(element.current);
  }

  useEffect(() => {
    if(!preview){
      if(state.data[state.currentDate] && state.data[state.currentDate][data.id]){
        setValue(state.data[state.currentDate][data.id].value);
      } else{
        setValue(0);
      }
    }
  });




  return (
    <View style={Styles.wrapper}>
    <Text style={Styles.header}>
    {preview ? 'preview' : data.headline}
    </Text>
    <Slider
      style={{width: '100%', height: 40}}
      value={value}
      ref={element}
      minimumValue={0}
      maximumValue={1}
      minimumTrackTintColor="#ffffff"
      maximumTrackTintColor="#ffffff"
      onSlidingComplete={SetValue}
      onValueChange={OnChanged}

    />
    <Text style={Styles.label}>{(value*100).toFixed(0)}%</Text>
    </View>
  );
}
