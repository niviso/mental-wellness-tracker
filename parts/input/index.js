import React,{useState,useEffect,useContext,useRef} from 'react';
import {Text,View,TouchableOpacity,TextInput,Keyboard} from 'react-native';
import {AppContext} from '../../context/appContext';
import Styles from './style.scss';
export default function Input(props) {
  const [state,setState] = useContext(AppContext);
  const [text,setText] = useState(null);
  const inputEl = useRef(null);
  const {data,edit,preview} = props;
  const OnChange = (n) => {
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
  useEffect(() => {
    if(!preview){
      if(state.data[state.currentDate] && state.data[state.currentDate][data.id]){
        setText(state.data[state.currentDate][data.id].value);
      } else{
        setText(0);
      }
    }
  });




  return (
    <View style={Styles.wrapper}>
    <Text style={Styles.header}>
    {preview ? 'preview' : data.headline}
    </Text>
    <TextInput style={Styles.Input}
    multiline={true}
    value={text}
    onChangeText={OnChange}
    ref={inputEl}
    onSubmitEditing={Keyboard.dismiss}
    maxLength={300}
    placeholder="Write something ..."
    numberOfLines={4}/>
    </View>
  );
}
