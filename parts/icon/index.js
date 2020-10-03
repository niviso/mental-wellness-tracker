import React from 'react';
import {View,Image} from 'react-native';

export default function Input(props) {
  const {source,size=50,color='white'} = props;
  return (
    <View>
    <Image style={{width: size,height:size,fill: color}} source={source} />
    </View>
  );
}
