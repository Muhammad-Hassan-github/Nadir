import React, { useState, useEffect } from 'react';
import { Image, Dimensions ,ImageBackground,StyleSheet} from 'react-native';
import { Container, Button, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon,StatusBar } from 'native-base';
import GallerySwiper from "react-native-gallery-swiper";
import { ScrollView } from 'react-native-gesture-handler';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';



export function Kalima({ navigation, route }) {
  console.log(route.params.myValue)
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  Text.defaultProps = Text.defaultProps || {};
  Text.defaultProps.allowFontScaling = false;

  return (
    <ImageBackground resizeMode="cover"
        source={require('../images/background.jpg')}
        style={{ width: wp("100%"), height:"100%" }} >
       
          <ScrollView >

 
      <View style={styles.duaScreen}>
      <View style={styles.header}>
            <ImageBackground resizeMode="center"
              source={require('../images/title.png')}
              style={styles.titleImage} >

              <Text style={styles.title}>{route.params.title}</Text>
            </ImageBackground>
        
          </View>
        <Text style={styles.arabic}>{route.params.arabic}</Text>
        <Text style={styles.urdu}>{route.params.urdu}</Text>
        <Text style={styles.english}>{route.params.english}</Text>
      </View>
    </ScrollView>
     </ImageBackground>

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
  // title: {
  //   color: "yellow",
  //   fontSize: RFPercentage(3.3),
  //   margin: RFPercentage(3.5),
  //   textAlign: "center",
  //   fontWeight:"bold"
  // },
  // urdu: {
  //   color: "white",
  //   fontSize: RFPercentage(3.3),
  //   margin: RFPercentage(3),
  //   textAlign: "center",

  // },
  // arabic: {
  //   color: "white",
  //   fontSize: RFPercentage(5),
  //   margin: RFPercentage(1),

  //   marginTop: RFPercentage(5),
  //   marginBottom: RFPercentage(3),
  //   fontWeight: "bold",
  //   textAlign: "center",
    



  // },
  // english: {
  //   color: "white",
  //   fontSize: RFPercentage(3.3),
  //   margin: RFPercentage(2),
  //   fontWeight:"bold",
  //   textAlign: "justify",
  //   margin: RFPercentage(3),




  // },


  title: {
    color: "yellow",
    fontSize: RFPercentage(3.3),
    marginTop: RFPercentage(3),
    textAlign: "center",
    fontWeight: "bold",
    width: wp("75%"),


  },
  urdu: {
    color: "white",
    fontSize: RFPercentage(4.5),
    margin: RFPercentage(4),
    textAlign: "center",
    borderBottomWidth: 3,
    borderStyle: "solid",
    borderBottomColor: "lightyellow",
    paddingBottom: 21,
    lineHeight: 40,
    paddingBottom: RFPercentage(8),
    marginTop: RFPercentage(6),

  },
  arabic: {
    color: "#FAFAD2",
    fontSize: RFPercentage(5),
    margin: RFPercentage(5),
    fontWeight: "bold",
    textAlign: "center",
    borderBottomWidth: 3,
    borderStyle: "solid",
    borderBottomColor: "#fff",
    paddingBottom: RFPercentage(10),
    paddingTop: RFPercentage(6),
    lineHeight: 40,



  },
  english: {
    color: "lightyellow",
    fontSize: RFPercentage(4),
    margin: RFPercentage(4),
    // fontWeight: "bold",
    lineHeight: 30,

    textAlign: "center",
    paddingBottom: RFPercentage(8),
    marginTop: RFPercentage(6),

  },

  header: {
    height: null,
    width: wp("100%"),



  },
  titleImage: {
    display: "flex",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    width: wp("100%"),
    height: hp("20%"),
    marginTop: RFPercentage(2),


  }


});
