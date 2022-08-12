import React from 'react'
import { useState } from 'react'
import { View,Text,StyleSheet, Image } from 'react-native';


import Input from '../../Input';
import Passwordinput from "../../Passwordinput";
import MainButton from "../../MainButton"

function Login() {
    const [email ,setEmail] = useState("");
    const [password ,setPassword] = useState("")


  return (
    <View style = {styles.container}>
        <View style = {styles.center}>
            <Image source={require("../../assets/login.png")} style = {styles.marginTop}/>
        <Text style = {styles.title}>Login</Text>
        </View>
        <View style = {styles.centerContainer}>
        <Input 
        placeholder = {"Email"}
         id = {"email"}
         name = {"email"}
         value = {email}
         onChangeText = {(text)=>setEmail(text)} />  
    </View>
    <View style = {styles.centerContainer}>
       <Passwordinput
        placeholder = {"Password"}
        id = {"password"}
        name = {"password"}
        value = {password}
        onChangeText = {(text)=>setPassword(text)}/>
       <MainButton
       onPress = {()=>{

       }}
       title = "LOG IN"
       />
       <Text style = {styles.forgotPassword}>
          <Text style = {{color : "black"}}>Don't have an account?</Text>
          SIGNUP
       </Text>
    </View>
  </View>
  )
}

const styles = StyleSheet.create({
    marginTop : {
        height : 100,
        width : 100,
        borderRadius : 15,
    },
    container : {
        alignItems : "center",
        justifyContent : "center",
        backgroundColor : "white",
        paddingTop : "15%",
        paddingHorizontal : 36,
        flex : 1,
    },
 
    title : {
        fontSize : 25,
        color : "black",
        fontWeight : "bold",
    },
    center :{
        alignItems : "center",
        justifyContent : "center"
    },
    forgotPassword : {
        marginBottom : 12,
        color : "#622569",
        marginTop : "20%",
        fontWeight : "bold"
    },
   
    centerContainer : {
        justifyContent : "center",
        marginTop : "8%",
        alignItems : "center"
    },
})
export default Login