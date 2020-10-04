import React,{useState,useEffect,useContext,useRef} from 'react';
import {View,ScrollView,TouchableOpacity,Text,Alert,Touch,TouchableWithoutFeedback } from 'react-native';
import Styles from './style.scss';
import {AppContext} from '../../context/appContext';
import { SimpleAnimation } from 'react-native-simple-animations';
import {Edit,Exit,Plus,Acorn,Bee,Onion,Delete} from '../../parts/icon/icons';
import Icon from '../../parts/icon/';
import AsyncStorageHelper from '../../helpers/asyncStorageHelper';


export default function Reminders(props) {
  const [state,setState] = useContext(AppContext);
  return (
    <View style={Styles.body}>
    <Icon source={Acorn} size={100}/>
    <Text style={Styles.headline}>Reminders is work in progress</Text>
    </View>
  )
}
