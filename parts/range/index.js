import React,{useState,useEffect,useContext} from 'react';
import {Text,View,TouchableOpacity,TouchableHighlight} from 'react-native';
import {AppContext} from '../../context/appContext';
import Styles from './style.scss';
import Icon from '../icon/';
import {Apple,Rainy,Onion} from  '../icon/icons';
import { SimpleAnimation } from 'react-native-simple-animations';

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
  const values = [1,2,3,4,5];
  const btns = values.map((obj,index) => {
    return (
      <TouchableHighlight onPress={() => Update(obj)} style={{...Styles.button, opacity: mood == obj ? 1 : 0.7}}>
      <>

      {mood == obj && (<SimpleAnimation duration={1000} aim="in" distance={500} staticType='bounce' style={{position:'absolute',opacity: 0.6}}><Icon size={100} source={Onion} /></SimpleAnimation>)}
        <Text style={{...Styles.buttonText,color: mood == obj ? 'indigo' : 'indigo',fontWeight: mood == obj ? '900' : '300' }}>
        {obj}
        </Text>
        </>
        </TouchableHighlight>);
  })
  return (
    <View style={Styles.body}>
    <Text style={Styles.header}>
    {data.headline}
    </Text>
    <View style={Styles.wrapper}>
    {btns}
    </View>
    </View>
  );
}
