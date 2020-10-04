import React,{useState,useEffect,useContext,useRef} from 'react';
import {View,ScrollView,TouchableOpacity,Text} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import {Edit,Exit,Plus,Heart,Acorn,Bee,Onion,Rainy,Statistics,AppIcon,Sunflower} from '../../parts/icon/icons';
import Icon from '../../parts/icon/';

export default function OnBoarding(props){
  const {setView} = props;
  return (
    <Onboarding
  pages={[
    {
      backgroundColor: '#fff',
      image: <Icon size={100} source={AppIcon}/>,
      title: 'Mental wellness tracker',
      subtitle: 'This app allows you to create a custom diary for your mental needs.\n\nThis is not any substitute for any treatment but a way of analysing yourself.',
    },
    {
      backgroundColor: '#fff',
      image: <Icon size={100} source={Sunflower}/>,
      title: 'Seek help!',
      subtitle: 'Talking to a professesional will always make things better.\n\n\n\n',
    },
    {
      backgroundColor: '#fff',
      image: <Icon size={100} source={Onion}/>,
      title: 'Create your custom diary',
      subtitle: 'Copy TBA.\n\n\n\n',
    },
    {
      backgroundColor: '#fff',
      image: <Icon size={100} source={Rainy}/>,
      title: 'Edit your view',
      subtitle: 'Copy TBA.\n\n\n\n',
    },
    {
      backgroundColor: '#fff',
      image: <Icon size={100} source={Statistics}/>,
      title: 'Analytics',
      subtitle: 'Copy TBA.\n\n\n\n',
    },
    {
      backgroundColor: '#fff',
      image: <Icon size={100} source={Heart}/>,
      title: 'Reminders',
      subtitle: 'Copy TBA.\n\n\n\n',
    }
  ]}
  onDone={() => setView('default')}
  onSkip={() => setView('default')}
  containerStyles={{paddingLeft: 20,paddingRight: 20}}
/>
  )
}
