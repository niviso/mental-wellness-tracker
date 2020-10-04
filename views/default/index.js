import React,{useState,useEffect,useContext,useRef} from 'react';
import {View,ScrollView,TouchableOpacity,Text,Alert,Touch,TouchableWithoutFeedback } from 'react-native';
import Styles from './style.scss';
import DateHeader from '../../parts/dateHeader';
import Range from '../../parts/range';
import Input from '../../parts/input';
import Vote from '../../parts/vote';
import Slider from '../../parts/slider';
import Navigation from '../../parts/navigation';
import {AppContext} from '../../context/appContext';
import { SimpleAnimation } from 'react-native-simple-animations';
import {Edit,Exit,Plus,Acorn,Bee,Onion,Sunflower,Rainy,Trash} from '../../parts/icon/icons';
import Icon from '../../parts/icon/';
import AsyncStorageHelper from '../../helpers/asyncStorageHelper';

export default function Default(props) {
  const [state,setState] = useContext(AppContext);
  const [addView,setAddView] = useState(true);
  const scrollView = useRef(null);
  const {setView} = props;

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

  const UpdateHeader = (obj) => {
    if(!state.editing) {
      return;
    }
    Alert.prompt(
      "New headline for " + obj.type,
      "This will replace the old header",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        {
          text: "Update",
          onPress: header => SetHeader(obj.id,header)
        }
      ],
      "plain-text"
    );
  }

  const SetHeader = (id,header) => {
    const newPattern = JSON.parse(JSON.stringify(state.pattern));
    for(let i = 0; i!== newPattern.length;i++){
      if(newPattern[i].id == id){
        newPattern[i].headline = header;
      }
    }
    setState({...state, pattern: newPattern});
  }
  const RemoveObj = (obj) => {
    Alert.alert(
      "Are you sure you want to remove " + obj.type + " object?",
      "All data for this item will be removed.",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "I am sure", onPress: () => Delete(obj.id) }
      ],
      { cancelable: false }
    );

  }

  const Delete = (id) => {
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
      <TouchableOpacity onPress={() => RemoveObj(obj)} style={Styles.DeleteWrapper}>
      <Icon source={Trash} size={15}/>
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
    if(obj.type == 'vote'){
      return <Vote data={obj}/>
    }
  }

  const GetObj = (obj,index) => {
    const type = GetType(obj);
    return (
      <TouchableOpacity key={Guid()} style={{...Styles.typeWrapper}} onLongPress={() => UpdateHeader(obj)} activeOpacity={state.editing ? 0.5 : 1}>
        {state.editing && GetEditFrame(obj)}
        <View style={{ width: '100%',marginBottom: 25}}>
          {type}
        </View>
      </TouchableOpacity>
    )
  }
  const Save = () => {
    setTimeout(()=>{
      AsyncStorageHelper.set("mwtracker_data",JSON.stringify({data: state.data,pattern: state.pattern}));
    },1000);
  }

  useEffect(() => {
    if(!state.loaded){
      let tmpState = JSON.parse(JSON.stringify(state));
      AsyncStorageHelper.get("mwtracker_data").then(result => {
        if(result){
          result = JSON.parse(result);
          tmpState.pattern = result.pattern;
          tmpState.data = result.data;
          tmpState.loaded = true;
          setState(tmpState);
        }
      });
    } else if(!state.editing){
      Save();
    }

  });

  let data = state.pattern.map((obj,index) => {
      return GetObj(obj,index);
  });

  return (
    <View style={Styles.body}>
    <ScrollView style={Styles.wrapper} ref={scrollView} showsVerticalScrollIndicator ={false} showsHorizontalScrollIndicator={false}>
    <View style={{...Styles.paddingWrapper}}>
      { data  }
      { data.length == 0 && <Text styles={Styles.AddBtnOptionLabel}>Click the pen icon to add new objectives</Text>}
      </View>
    </ScrollView>
    <View style={Styles.datePicker}>
      <DateHeader/>
    </View>
    <TouchableOpacity onPress={() => ToggleEdit()} style={Styles.EditBtn}>
      <Icon size={30} source={state.editing ? Exit : Edit}/>
    </TouchableOpacity>

    {state.editing && (
      <>
      <SimpleAnimation duration={1000} aim="in" distance={1000} movementType="slide" direction="right" style={{position:'absolute',left: '17%',top: '75%',width: '66%',display:'flex',alignItems: 'center',backgroundColor: 'rgba(255,255,255,0.9)',borderRadius: 10,borderWidth: 1,borderColor:'black',borderStyle:'solid',padding: 5}}>
      <Text style={{fontWeight: '700'}}>Add new objectives to your diary</Text>
      </SimpleAnimation>
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
    <TouchableOpacity style={Styles.AddBtnOption} onPress={() => Add('range')}>
    <Icon size={30} source={Onion}/>
    <Text style={Styles.AddBtnOptionLabel}>Range</Text>
    </TouchableOpacity>
    <TouchableOpacity style={Styles.AddBtnOption} onPress={() => Add('vote')}>
    <Icon size={30} source={Sunflower}/>
    <Text style={Styles.AddBtnOptionLabel}>Vote</Text>
    </TouchableOpacity>
    <TouchableOpacity style={Styles.AddBtnOption} onPress={() => Add('range')}>
    <Icon size={30} source={Rainy}/>
    <Text style={Styles.AddBtnOptionLabel}>TBA</Text>
    </TouchableOpacity>
    <TouchableOpacity style={Styles.AddBtnOption} onPress={() => Add('range')}>
    <Icon size={30} source={Bee}/>
    <Text style={Styles.AddBtnOptionLabel}>TBA</Text>
    </TouchableOpacity>
    </ScrollView>
    </SimpleAnimation>
    </>
    )}
    </View>

  );
}
