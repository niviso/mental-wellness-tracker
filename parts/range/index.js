import React,{useState,useEffect,useContext} from 'react';
import {Text,View,TouchableOpacity} from 'react-native';
import {AppContext} from '../../context/appContext';
import Styles from './style.scss';
export default function Range(props) {
  const [state,setState] = useContext(AppContext);
  const [mood,setMood] = useState(null);
  const {data} = props;
  const Update = (n) => {
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
    if(state.data[state.currentDate] && state.data[state.currentDate][data.id]){
      setMood(state.data[state.currentDate][data.id].value);
    } else{
      setMood(0);
    }
  });
  return (
    <View style={Styles.body}>
    <Text style={Styles.header}>
    {data.headline}
    </Text>
    <View style={Styles.wrapper}>
    <TouchableOpacity onPress={() => Update(1)} style={{...Styles.button,backgroundColor: mood == 1 ? '#44ba5d' : 'white' }}>
    <Text style={Styles.buttonText}>
    1
    </Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => Update(0)} style={{...Styles.button,backgroundColor: mood == 0 ? '#fff98b' : 'white' }}>
    <Text style={Styles.buttonText}>
    0
    </Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => Update(-1)} style={{...Styles.button,backgroundColor: mood == -1 ? '#D54F60' : 'white' }}>
    <Text style={Styles.buttonText}>
    -1
    </Text>
    </TouchableOpacity>
    </View>
    </View>
  );
}
