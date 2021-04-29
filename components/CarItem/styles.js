import { StyleSheet ,Dimensions } from "react-native";

const styles = StyleSheet.create({
    titles :{
        marginTop : '30%' ,
        width :'100%',
        alignItems : "center"
        
      },
      title : {
        fontSize :30 ,
        fontWeight : "500"
      },
      tagLine : {
        fontSize : 16 ,
        color : '#5c5e62'
      },
      tagLineCTA:{
          textDecorationLine :"underline"
      },
     
      carContainer :{
        width :'100%',
        height :'100%',
        height: Dimensions.get('window').height,
      },
      image: {
        width :'100%',
        height :'100%',
       resizeMode :'cover',
       position :"absolute"
      },
      buttonContainer :{
          position : "absolute" ,
          bottom :50 ,
          width :'100%'
          
      }
   
  });
  export default styles

