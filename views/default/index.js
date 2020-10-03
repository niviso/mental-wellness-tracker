import React,{useState,useEffect,useContext,useRef} from 'react';
import {View,ScrollView,TouchableOpacity,Text} from 'react-native';
import Styles from './style.scss';
import DateHeader from '../../parts/dateHeader';
import Range from '../../parts/range';
import Input from '../../parts/input';
import Navigation from '../../parts/navigation';
import {AppContext} from '../../context/appContext';
import { SimpleAnimation } from 'react-native-simple-animations';
import Icon from 'react-native-ionicons'

export default function Default() {
  const [state,setState] = useContext(AppContext);
  const [addView,setAddView] = useState(true);
  const scrollView = useRef(null);

  const Guid = () => {
    function chr4(){
      return Math.random().toString(16).slice(-4);
    }
    return chr4() + chr4() +
      '-' + chr4() +
      '-' + chr4() +
      '-' + chr4() +
      '-' + chr4() + chr4() + chr4();
}
  const ToggleEdit = () => {
    setState({...state,editing: !state.editing});
  }
  const RemoveObj = (id) => {
    let patternCopy = JSON.parse(JSON.stringify(state.pattern));
    let result = patternCopy.filter(obj => {
        return obj.id !== id
    });
    setState({...state,pattern: result});
  }
  const Add = (type) => {
    const newPattern = [...state.pattern, {id: Guid(),type:type,headline:'new '+type }];
    setState({...state, pattern: newPattern});
    setTimeout(()=>{
      scrollView.current.scrollToEnd({ animated: true });
    },250);

  }
  const GetEditFrame = (obj) => {
    return (
      <SimpleAnimation style={Styles.editFrame} duration={250} aim="in" distance={1000} movementType="slide" direction="right">

      <TouchableOpacity onPress={() => RemoveObj(obj.id)}>
        <Text style={Styles.editFrameText}>Delete</Text>
      </TouchableOpacity>
      </SimpleAnimation>


    );
  }
  const GetType = (obj) => {
    if(obj.type == 'range'){
      return <Range data={obj}/>
    }
    if(obj.type == 'input'){
      return <Input data={obj}/>
    }
  }

  const GetObj = (obj,index) => {
    const type = GetType(obj);
    return (
      <View key={index} style={{...Styles.typeWrapper}}>
        {state.editing && GetEditFrame(obj)}
        <View style={{ width: state.editing ? '85%' : '100%'}}>
          {type}
        </View>
      </View>
    )
  }

  let data = state.pattern.map((obj,index) => {
      return GetObj(obj,index);
  });

  return (
    <View style={Styles.body}>
    <ScrollView style={Styles.wrapper} ref={scrollView}>
    <View style={{...Styles.paddingWrapper}}>
    <TouchableOpacity onPress={() => ToggleEdit()} style={Styles.editWrapper}>
      <Text style={{color: 'black',fontSize: 15}}>{state.editing ? 'Stop edit' : 'Edit this view'}</Text>
    </TouchableOpacity>
      { data }
      {addView && (
        <View>
        <TouchableOpacity onPress={() => Add('input')}>
        <Text><Icon ios="ios-add" android="md-add" />new input </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Add('range')}>
        <Text>new range </Text>
        </TouchableOpacity>
        </View>
      ) }
      </View>
      <TouchableOpacity onPress={() => setAddView(true)} style={Styles.editWrapper}>
        <Text style={{color: 'black',fontSize: 15}}>Add</Text>
      </TouchableOpacity>
    </ScrollView>
    <View style={Styles.datePicker}>
      <DateHeader/>
    </View>
    <View style={Styles.navigation}>
      <Navigation/>
    </View>
    </View>
  );
}
