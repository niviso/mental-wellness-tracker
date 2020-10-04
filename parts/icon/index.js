import React from 'react';
import {Image} from 'react-native';

export default function Input(props) {
  const {source,size=50} = props;
  return (
    <>
    <Image style={{width: size,height:size}} source={source} />
    </>
  );
}
