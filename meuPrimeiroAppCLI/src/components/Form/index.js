import React from 'react';

import {
    TextInput,
    Text ,
    View , 
    Button , 
    TouchableOpacity
} from 'react-native';

import styles from './style';
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
      <View style = {styles.formContext}>
          <View style={styles.form}>
            <Text style={styles.formLabel}>Altura</Text>
            <TextInput
            style={styles.formImput}
            onChangeText={setHeight}
            value={height}
            placeholder='Ex. 1.75' 
            keyboardType='numeric'

            ></TextInput>
            <Text style={styles.formLabel}>Peso</Text>
            <TextInput
            style={styles.formImput}
            onChangeText={setWeight}
            value={weight} 
            placeholder='Ex. 65.400' 
            keyboardType='numeric'></TextInput>
            <TouchableOpacity
            style={styles.buttonCalculator}
            onPress={() => validation()}
            >
              <Text  style={styles.textButtonCalculator}>{textButton}</Text>
            </TouchableOpacity>
        </View>
        <ResultImc messageResultImc={messageImc} resultImc={imc}/>
      </View>
    </View>
  );
}