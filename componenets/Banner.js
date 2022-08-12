import React from 'react'
import { useEffect } from 'react'
import { ScrollView , View ,StyleSheet } from 'react-native'
import simg from "../../assets/singlerooms.jpg";


 function Banner() {
  const [bannerDate , setBannerDate] = useState([])
  useEffect (()=>{
      setBannerDate([
        simg,
        simg,
        simg,
      ])
      return ()=>{
        setBannerDate([])
      }
  },[])
   
  return (
   <ScrollView>
   <View>
     <Swiper 
     style = {{height : width/2}}
     showsButton = {false}
     autoplay = {true}
     autoplayTimeout = {2}
     >
       {bannerDate.map((item)=>{
        return(
          <Image
          key = {item}
          style = {styles.imageBanner}
          resizeMode = "cover"
          source = {item}
          
          />
        )
       })}
     </Swiper>
   </View>
   </ScrollView>
  )
}
const styles = StyleSheet.create({
container : {
  flex : 1,
},
swiper : {
  width : width,
  alignItem : "center",
  marginTop : 10,
},
imageBanner : {
  height : width / 2,
  marginHorizontal : 12,

}
})
export default Banner
