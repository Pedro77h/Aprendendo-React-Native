import React from 'react';

import {
  TextInput,
  Text,
  View,
  Button,
  TouchableOpacity,
  Vibration,
  Pressable,
  Keyboard , 
  FlatList
} from 'react-native';

import styles from './style';
import { ResultImc } from './ResultImc';
import { useState } from 'react';


export default function Form() {

  const [height, setHeight] = useState(null)
  const [weight, setWeight] = useState(null)
  const [messageImc, setMessageImc] = useState('Preencha o peso e altura')
  const [imc, setImc] = useState(null)
  const [textButton, setTextButton] = useState("Calcular")
  const [errorMessage, setErrorMessage] = useState(null)
  const [imcList , setImcList] = useState([])


  function imcCalculator() {
    let heightFormat = height.replace(",", ".")
    let totalImc = ((weight / (heightFormat * heightFormat)).toFixed(2))
    setImcList(arr => [...arr ,{id: new Date().getTime() , imc:totalImc}])
    setImc(totalImc)
  }


  function verification() {
    if (imc == null) {
      setErrorMessage('Campo Obrigatorio')
       Vibration.vibrate(500) ;
    }
  }


  function validation() {
    if (weight != null && height != null) {
      imcCalculator()
      setHeight(null)
      setWeight(null)
      setMessageImc("Seu imc é igual:")
      setTextButton("Calcular Novamente")
      setErrorMessage(null)
    }
    else {
    verification()
    setImc(null)
    setTextButton("Calcular")
    setMessageImc("Preencha o peso e altura")
    }
  }

  return (
    <View>
    <View style={styles.formContext}>
      {imc == null ?
        <Pressable onPress={Keyboard.dismiss} style={styles.form}>
          <Text style={styles.formLabel}>Altura</Text>
          <Text style={styles.errorMessage}>{errorMessage}</Text>
          <TextInput
            style={styles.formImput}
            onChangeText={setHeight}
            value={height}
            placeholder='Ex. 1.75'
            keyboardType='numeric'

          ></TextInput>
          <Text style={styles.formLabel}>Peso</Text>
          <Text style={styles.errorMessage}>{errorMessage}</Text>
          <TextInput
            style={styles.formImput}
            onChangeText={setWeight}
            value={weight}
            placeholder='Ex. 65.400'
            keyboardType='numeric'></TextInput>
          <TouchableOpacity
            style={styles.buttonCalculator}
            onPress={() => {validation()}}
          >
            <Text style={styles.textButtonCalculator}>{textButton}</Text>
          </TouchableOpacity>
        </Pressable>
        :
        <View style={styles.ehxibitionResultImc}>
          <ResultImc messageResultImc={messageImc} resultImc={imc} />
          <TouchableOpacity
            style={styles.buttonCalculator}
            onPress={() => {validation()}}
          >
            <Text style={styles.textButtonCalculator}>{textButton}</Text>
          </TouchableOpacity>
        </View>
      }
    </View>
    </View>
  );
}