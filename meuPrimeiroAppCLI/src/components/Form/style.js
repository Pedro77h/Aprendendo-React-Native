import { Button, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  formContext: {
    width:"100%",
    height: '100%' ,
    bottom: 0 ,
    backgroundColor: '#fff' ,
    alignItems: 'center' ,
    borderTopLeftRadius: 30 ,
    borderTopRightRadius: 30 ,
    marginTop:30 ,
  } ,
  form:{
    width: "100%" ,
    height: 'auto' , 
    marginTop: 30 , 
    padding: 10 ,
  } ,
  formLabel:{ 
    color: '#000' ,
    fontSize: 18 ,
    paddingLeft: 20 ,
  } ,
  formImput: {
    width: "90%" , 
    borderRadius: 50 , 
    height: 40 ,
    margin: 12 ,
    paddingLeft: 50 ,
    backgroundColor: "#f6f6f6"
  } ,
  textButtonCalculator: {
    fontSize:20 ,
    color: "#ffff"
  } ,
  buttonCalculator:{
    width: "90%" ,
    borderRadius: 50 , 
    alignItems: 'center' , 
    justifyContent: 'center' ,
    backgroundColor:"#0000FF" , 
    paddingBottom: 14 , 
    paddingTop: 14 , 
    marginLeft: 12 , 
    marginTop: 30 , 
  }
});

export default styles