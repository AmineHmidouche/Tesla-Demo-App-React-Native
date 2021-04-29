import React from "react";
import {  StyleSheet, View  } from "react-native";
// import CarItem from './components/CarItem' ;
import Header from './components/Header'
import CarsList from './components/CarsList'
const App = () => { 
  return ( 
  <View style={styles.container}>
    {/* <CarItem 
    title="ModelY"
    tagLine="Starting at $23,322"
    image={require('./assets/ModelY.jpeg')}
    tagLineCTA="Touchless Delivery"
    /> */}
    <Header />
    <CarsList/>
 
 
  </View>
);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign : "center",
    justifyContent :"center"
  },
 
});

export default App;