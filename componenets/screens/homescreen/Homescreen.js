import React from 'react'
import { ScrollView ,StyleSheet , TextInput, View , Text, ImageBackground} from 'react-native';
import Entypo from "react-native-vector-icons/Entypo"
import EvilIcons from "react-native-vector-icons"
import simg from "../../assets/singlerooms.jpg"

 function Homescreen() {
  return (
      <ScrollView style={styles.container}>
   <View style = {styles.topIcon}>
    <Entypo name = "menu" size = {30} color = "black"/>
   </View>
   <View style = {styles.input}>
<EvilIcons name = "search" size = {45} color = "grey"/>
<View style = {{flex : 1}}>
  <TextInput placeholder = "search" style = {{fontSize : 18 , color : "grey"}}/>
</View>
   </View>
   <Text style = {styles.title}>Rooms</Text>
   <ScrollView horizontal showsHorizontalScrollIndicator = {false}>
<ImageBackground 
imageStyle = {{borderRadius : 12}}
 style = {styles.RoomsItem}
 source = {{url :"data:image/jpeg;base64,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" }}
>
    <Text style = {styles.imageTitle}>Single Rooms</Text>
</ImageBackground>
<ImageBackground 
imageStyle = {{borderRadius : 12}}
 style = {styles.RoomsItem} 
 souce = {{simg}}
 >
   <Text style = {styles.imageTitle}>Family Rooms</Text>
</ImageBackground>
<ImageBackground 
imageStyle = {{borderRadius : 12}}
 style = {styles.RoomsItem} 
 souce = {{simg}}
 >
   <Text style = {styles.imageTitle}>Double Deluxe</Text>
</ImageBackground>
   </ScrollView>
   <Text style = {styles.title}>Family Deluxe</Text>
   <ScrollView horizontal showsHorizontalScrollIndicator = {false}>
  <View style = {{marginLeft :20}}>
   <Image 
    style = {styles.RoomsImage}
    source = {"simg"}/>
  </View>
  <View style = {{marginLeft :20}}>
   <Image 
    style = {styles.RoomsImage}
    source = {"simg"}/>
  </View>
   </ScrollView>
      </ScrollView>
  )
}


const styles = StyleSheet.create({
    container : {
        backgroundColor : "#f8f8f8",
    },
    title :{
        fontSize : 24,
        marginTop : "12%",
        marginLeft : "4%",
        marginBottom : "4%",
        color : "grey"
    },
    topIcon : {
        height : 120,
        paddingTop : 12,

    },
    RoomsItem :{
        height : 100,
        marginLeft :20,
        width : 160,
        marginTop : "4%",
        justifyContent : "center",
        alignItem : "center",
        elevation : 20,
    },
    RoomsImage : {
        height : 320,
        width : 260,
        borderRadius : 10,
        marginTop : 12,
        marginBottom : 12,
    },
    productText : {
        fontSize : 18,
    },
    imageTitle : {
        fontWeight : "bold",
        fontSize : 24,
        color : "white",
    },
    input :{
        height : 55,
        width : "85%",
        elevation : 12,
        flexDirection : "row",
        alignItem : "center",
        backgroundColor : "white",
    
        
    
    }

})
export default Homescreen;