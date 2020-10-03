import React,{useState,useEffect,useContext,useRef} from 'react';
import {View,ScrollView,TouchableOpacity,Text} from 'react-native';
import Styles from './style.scss';
import DateHeader from '../../parts/dateHeader';
import Range from '../../parts/range';
import Input from '../../parts/input';
import Slider from '../../parts/slider';
import Navigation from '../../parts/navigation';
import {AppContext} from '../../context/appContext';
import { SimpleAnimation } from 'react-native-simple-animations';
import {Edit,Exit,Plus,Acorn,Bee,Onion,Rainy,Delete} from '../../parts/icon/icons';
import Icon from '../../parts/icon/';
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
    setTimeout(()=>{
      scrollView.current.scrollTo({y: 0, animated: true });
    },250);
  }
  const RemoveObj = (id) => {
    let patternCopy = JSON.parse(JSON.stringify(state.pattern));
    let result = patternCopy.filter(obj => {
        return obj.id !== id
    });
    setState({...state,pattern: result});
  }
  const Add = (type) => {
    const newPattern = [...state.pattern, {id: Guid(),type:type,headline:'Custom ' + type }];
    setState({...state, pattern: newPattern});
    setTimeout(()=>{
      scrollView.current.scrollToEnd({ animated: true });
    },250);

  }
  const GetEditFrame = (obj) => {
    return (
      <SimpleAnimation style={Styles.editFrame} duration={1000} aim="in" distance={1000} movementType="slide" direction="right">
      <TouchableOpacity onPress={() => RemoveObj(obj.id)} style={Styles.DeleteWrapper}>
      <Icon source={Delete} size={15}/>
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
    if(obj.type == 'slider'){
      return <Slider data={obj}/>
    }
  }

  const GetObj = (obj,index) => {
    const type = GetType(obj);
    return (
      <View key={index} style={{...Styles.typeWrapper}}>
        {state.editing && GetEditFrame(obj)}
        <View style={{ width: '100%',marginBottom: 25}}>
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
    <ScrollView style={Styles.wrapper} ref={scrollView} showsVerticalScrollIndicator ={false} showsHorizontalScrollIndicator={false}>
    <View style={{...Styles.paddingWrapper}}>
      { data }
      </View>
    </ScrollView>
    <View style={Styles.datePicker}>
      <DateHeader/>
    </View>
    <View style={Styles.navigation}>
      <Navigation/>
    </View>
    <TouchableOpacity onPress={() => ToggleEdit()} style={Styles.EditBtn}>
      <Icon size={30} source={state.editing ? Exit : Edit}/>
    </TouchableOpacity>

    {state.editing && (

      <SimpleAnimation style={Styles.AddBtn} duration={1000} aim="in" distance={1000} movementType="slide" direction="left">
      <ScrollView style={{width: '100%',overflow: 'hidden',borderRadius: 25}} directionalLockEnabled horizontal   showsVerticalScrollIndicator ={false} showsHorizontalScrollIndicator={false}>
    <TouchableOpacity style={Styles.AddBtnOption} onPress={() => Add('input')}>
      <Icon size={30} source={Acorn}/>
      <Text style={Styles.AddBtnOptionLabel}>Text field</Text>
    </TouchableOpacity>
    <TouchableOpacity style={Styles.AddBtnOption} onPress={() => Add('slider')}>
    <Icon size={30} source={Bee}/>
    <Text style={Styles.AddBtnOptionLabel}>Slider</Text>
    </TouchableOpacity>
    <TouchableOpacity style={Styles.AddBtnOption} onPress={() => Add('slider')}>
    <Icon size={30} source={Onion}/>
    <Text style={Styles.AddBtnOptionLabel}>Range</Text>
    </TouchableOpacity>
    <TouchableOpacity style={Styles.AddBtnOption} onPress={() => Add('range')}>
    <Icon size={30} source={Rainy}/>
    <Text style={Styles.AddBtnOptionLabel}>Draw</Text>
    </TouchableOpacity>
    <TouchableOpacity style={Styles.AddBtnOption} onPress={() => Add('range')}>
    <Icon size={30} source={Bee}/>
    <Text style={Styles.AddBtnOptionLabel}>Vote</Text>
    </TouchableOpacity>
    <TouchableOpacity style={Styles.AddBtnOption} onPress={() => Add('range')}>
    <Icon size={30} source={Bee}/>
    <Text style={Styles.AddBtnOptionLabel}>Vote</Text>
    </TouchableOpacity>
    </ScrollView>
    </SimpleAnimation>
    )}
    </View>
  );
}
