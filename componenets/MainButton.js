import React from 'react'
import { TouchableNativeFeedback } from 'react-native'
import {StyleSheet,View,Text} from "react-native"

function MainButton(props) {
  return (
    <View style = {styles.container}>
  <TouchableNativeFeedback onPress={props.onPress}>
<View style = {styles.buttonContainer}>
<Text style = {styles.buttonText}>{props.title}</Text>
</View>
  </TouchableNativeFeedback>
    </View>
  )
}
const styles = StyleSheet.create({
buttonContainer:{
    height : 45,
    alignItem : "center",
    justifyContent :"center",
    backgroundColor : "#622569",
    marginTop: 12,
    elevation : 5,
},
container : {
  width : 300,
 
},
buttonText : {
  color : "white",
  fontWeight : "bold",
  textAlign : "center",
  fontSize:20,
}

})
export default MainButton