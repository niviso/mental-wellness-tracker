import React,{useState,useEffect,useContext,useRef} from 'react';
import {View,ScrollView,TouchableOpacity,Text,Alert,Touch,TouchableWithoutFeedback } from 'react-native';
import Styles from './style.scss';
import {AppContext} from '../../context/appContext';
import { SimpleAnimation } from 'react-native-simple-animations';
import {Rainy} from '../../parts/icon/icons';
import Icon from '../../parts/icon/';
import AsyncStorageHelper from '../../helpers/asyncStorageHelper';


export default function Settings(props) {
  const [state,setState] = useContext(AppContext);
  return (
    <View style={Styles.body}>
    <Icon source={Rainy} size={100}/>
    <Text style={Styles.headline}>Settings is work in progress</Text>
    </View>
  )
}
