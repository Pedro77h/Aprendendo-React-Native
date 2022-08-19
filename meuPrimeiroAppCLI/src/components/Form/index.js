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
const [weight , setWeight] = useState(null)
const [ messageImc , setMessageImc] = useState('Preencha o peso e altura')
const [imc , setImc] = useState(null)
const [textButton , setTextButton] = useState("Calcular")

function imcCalculator() {
    return setImc((weight/(height*height)).toFixed(2))
}

function validation(){
  if(weight != null && height != null){
    imcCalculator()
    setHeight(null)
    setWeight(null)
    setMessageImc("Seu imc é igual:")
    setTextButton("Calcular Novamente")
    return 
  }
  setImc(null)
  setTextButton("Calcular")
  setMessageImc("Preencha o peso e altura")
}

  return (
    <View>
        <View>
            <Text>Altura</Text>
            <TextInput
            onChangeText={setHeight}
            value={height}
            placeholder='Ex. 1.75' 
            keyboardType='numeric'></TextInput>
            <Text>Peso</Text>
            <TextInput
            onChangeText={setWeight}
            value={weight} 
            placeholder='Ex. 65.400' 
            keyboardType='numeric'></TextInput>
            <Button 
            title={textButton}
            onPress={() => validation()}
            ></Button>
        </View>
        <ResultImc messageResultImc={messageImc} resultImc={imc}/>
    </View>
  );
}