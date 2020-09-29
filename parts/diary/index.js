import React,{useState,useEffect,useContext,useRef} from 'react';
import {Text,View,TouchableOpacity,TextInput,Keyboard} from 'react-native';
import {AppContext} from '../../context/appContext';
import Styles from './style.scss';
export default function Diary() {
  const [state,setState] = useContext(AppContext);
  const [text,setText] = useState(null);
  const inputEl = useRef(null);
  const OnChange = (s) => {
    var tmp = JSON.parse(JSON.stringify(state));
    if(!tmp.data[state.currentDate]){
      tmp.data[state.currentDate] = {}
    }
    tmp.data[state.currentDate].diary = s;
    setState(tmp);
  }
  useEffect(() => {
    if(state.data[state.currentDate]){
      setText(state.data[state.currentDate].diary);
    } else{
      setText(null);
    }
  });
  return (
    <View style={Styles.wrapper}>
    <Text style={Styles.header}>
    Tell me about your day
    </Text>
    <TextInput style={Styles.Input}
    multiline={true}
    value={text}
    onChangeText={OnChange}
    ref={inputEl}
    onSubmitEditing={Keyboard.dismiss}
    maxLength={300}
    numberOfLines={4}/>
    </View>
  );
}
