import React from "react";
import { Text, View ,ImageBackground  } from 'react-native'
import styles from './styles'
import StyledButton from '../StyledButton'


    const CarItem = (props) => { 
         const {title , tagLine ,tagLineCTA, image} = props.car
        return (
        <View style={styles.carContainer}>
          
         <ImageBackground source={image} style={styles.image}/>
          
        <View style={styles.titles}>
             <Text style={styles.title}>{title}</Text>
             <Text style={styles.tagLine}>{tagLine}{' '}
             <Text style={styles.tagLineCTA}>{tagLineCTA}</Text></Text>
             
        </View>
      
       <View style={styles.buttonContainer}>
       <StyledButton type="primary" content="Custom Order"
         onPress={ () => {
            console.log('amiiiiii')
        }}/>
        <StyledButton type=""  content="Exestin inverentory"
         onPress={ () => {
          console.log('amiiiiiine 2')
     }}
        />
       </View>
        </View>
   
    );
 };

export default CarItem