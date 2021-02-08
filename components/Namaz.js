import React, { useState, useEffect } from 'react';
import { Image, Dimensions ,ImageBackground,StyleSheet} from 'react-native';
import { Container, Button, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';
import GallerySwiper from "react-native-gallery-swiper";
import { ScrollView } from 'react-native-gesture-handler';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";


export function Namaz({ navigation, route }) {
  console.log(route.params.myValue)
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  Text.defaultProps = Text.defaultProps || {};
  Text.defaultProps.allowFontScaling = false;

  return (
    <ScrollView style={{ backgroundColor: "white" }}>

 
      <View style={styles.duaScreen}>

        {/* <Text style={styles.title}>{route.params.title}</Text> */}
        <Text style={styles.arabic}>{route.params.arabic}</Text>
        {/* <Text style={styles.urdu}>{route.params.urdu}</Text> */}
        <Text style={styles.english}>{route.params.english}</Text>
      </View>
      {/* </ImageBackground> */}
    </ScrollView>

  );
}


const styles = StyleSheet.create({
  
  duaScreen: {
    // display: "flex",
    // margin: 5,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    // textAlign:"center",

  },
  title: {
    color: "black",
    fontSize: RFPercentage(3.5),
    margin: 20,
    textAlign: "center",
  },
  urdu: {
    color: "black",
    fontSize: RFPercentage(3.5),
    margin: 20,
    textAlign: "center",

  },
  arabic: {
    color: "black",
    fontSize: RFPercentage(5),
    margin: 20,
    fontWeight: "bold",
    textAlign: "center",



  },
  english: {
    color: "black",
    fontSize: RFPercentage(3.5),
    margin: 20,
    fontWeight: "bold",
    textAlign: "center",

  }



});
