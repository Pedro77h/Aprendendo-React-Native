import React from 'react';

import {
  View
} from 'react-native';

import { styles } from './styles';

export function ResultImc(props){
  return (
    <View>
    <Text>{props.ResultImc}</Text>
    <Text>{props.messageResultimc}</Text>
    </View>
  );
}