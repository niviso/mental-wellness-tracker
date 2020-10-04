import React,{useState,useEffect,useContext,useRef} from 'react';
import {View,ActivityIndicator } from 'react-native';
import Styles from './style.scss';
import {AppContext} from '../../context/appContext';
import { SimpleAnimation } from 'react-native-simple-animations';
import {Rainy} from '../../parts/icon/icons';
import Icon from '../../parts/icon/';
import AsyncStorageHelper from '../../helpers/asyncStorageHelper';


export default function Loading(props) {
  const [state,setState] = useContext(AppContext);
  return (
    <View style={Styles.body}>
<ActivityIndicator size="large" color="#00ff00" />
    </View>
  )
}
