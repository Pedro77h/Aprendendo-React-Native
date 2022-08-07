import React from 'react';

import {
    TextInput,
    Text ,
  View , 
    Button
} from 'react-native';

import { styles } from './styles';

export  default function Form(){
  return (
    <View>
        <View>
            <Text>Altura</Text>
            <TextInput placeholder='Ex. 1.75' keyboardType='numeric'></TextInput>
            <Text>Peso</Text>
            <TextInput placeholder='Ex. 65.400' keyboardType='numeric'></TextInput>
            <Button title='Calcular IMC'></Button>
        </View>
        <ResultImc md/>
    </View>
  );
}