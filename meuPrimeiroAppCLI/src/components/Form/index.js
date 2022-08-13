import React from 'react';

import {
    TextInput,
    Text ,
    View , 
    Button
} from 'react-native';

import { styles } from './styles';
import { ResultImc } from './ResultImc';
import { useState } from 'react';

export  default function Form(){

const [height , setHeight] = useState(null)
const [ weight , setWeight] = useState(null)
const [ messageImc , setMessageImc] = useState(null)
const [] = useState(null)
const [] = useState(null)

  return (
    <View>
        <View>
            <Text>Altura</Text>
            <TextInput placeholder='Ex. 1.75' keyboardType='numeric'></TextInput>
            <Text>Peso</Text>
            <TextInput placeholder='Ex. 65.400' keyboardType='numeric'></TextInput>
            <Button title='Calcular IMC'></Button>
        </View>
        <ResultImc messageResultImc={messageImc} ResultImc={imc}/>
    </View>
  );
}