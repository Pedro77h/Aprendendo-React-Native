import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  resultImc: {
    flex: 1,
    marginTop: 15 ,
    paddingTop: 30 , 
    borderRadius: 50 , 
    fontSize: 48 ,
    alignItems: 'center' ,
    width: '100%'
  } , 
  information:{
    fontSize: 18 , 
    color: "#0000FF" ,
    fontWeight: 'bold'
  } ,
  numberImc:{
    fontSize: 48 , 
    color: "#0000FF" ,
    fontWeight: 'bold'
  } ,
  boxShareButton: {
    width: '100%', 
    alignItems: "center" , 
    marginBottom: 10 , 
  } , 
  shared:{
    backgroundColor: '#B0E0E6' , 
    borderRadius: 50 , 
    paddingBottom: 5 , 
    paddingTop: 5
  } , 
  sharedText: {
    color: '#fff' ,
    fontWeight: 'bold' ,
    paddingHorizontal: 30 , 

  } 
});

export default styles