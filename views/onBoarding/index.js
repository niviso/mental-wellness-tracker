import React,{useState,useEffect,useContext,useRef} from 'react';
import {View,ScrollView,TouchableOpacity,Text} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import {Edit,Exit,Plus,Heart,Acorn,Bee,Onion,Rainy,Statistics,AppIcon,Sunflower,Home} from '../../parts/icon/icons';
import Icon from '../../parts/icon/';
import AsyncStorageHelper from '../../helpers/asyncStorageHelper';

export default function OnBoarding(props){
  const {setView} = props;
  const Done = () => {
    AsyncStorageHelper.set("mwtracker_data",JSON.stringify({pattern: [],data: {}})).then(result => {
        setView('default');
    });

  }
  return (
    <Onboarding
  pages={[
    {
      backgroundColor: '#fff',
      image: <Icon size={100} source={AppIcon}/>,
      title: 'Mental wellness tracker',
      subtitle: 'This app allows you to create a custom diary for your mental needs.\n\nThis app not any substitute for any treatment but a way of analysing yourself.',
    },
    {
      backgroundColor: '#fff',
      image: <Icon size={100} source={Onion}/>,
      title: 'Seek help!',
      subtitle: 'Talking to a professesional will always make things better.\n\n\n This app does not send any data to any server anywhere so you do not need to worry about sharing your data.',
    },
    {
      backgroundColor: '#fff',
      image: <Icon size={100} source={Home}/>,
      title: 'Create your custom diary',
      subtitle: 'Mental wellness tracker helps you create a custom diary.\n\n\n\n\n',
    },
    {
      backgroundColor: '#fff',
      image: <Icon size={100} source={Edit}/>,
      title: 'Edit your view',
      subtitle: 'Click the edit button in your view to \n add/remove/modify current objectives.\n\n\n\n\n',
    },
    {
      backgroundColor: '#fff',
      image: <Icon size={100} source={Statistics}/>,
      title: 'Analytics',
      subtitle: 'This app makes charts from your input data to display your trends and behaviours.\n\n\n\n\n',
    },
    {
      backgroundColor: '#fff',
      image: <Icon size={100} source={Heart}/>,
      title: 'Reminders',
      subtitle: 'You can create push notifications for objectives in your diary.\n\n\n\n\n',
    },
    {
      backgroundColor: '#fff',
      image: <Icon size={100} source={Sunflower}/>,
      title: 'Done!',
      subtitle: 'Start improving your mental wellbeing.\n\n\n\n\n\n',
    }
  ]}
  onDone={() => Done()}
  onSkip={() => Done()}
  containerStyles={{paddingLeft: 20,paddingRight: 20}}
/>
  )
}
