import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, View, ScrollView, Text, ImageBackground, ActivityIndicator } from 'react-native';
import CompassHeading from 'react-native-compass-heading';
import { Dimensions } from 'react-native';
import { Button } from 'react-native-paper';
import Geolocation from 'react-native-geolocation-service';
const axios = require('axios');
import { AsyncStorage } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";





export function qiblaDirection({ route, navigation, }) {

  const [compassHeading, setCompassHeading] = useState(0);
  const [directionValue, setDirectionValue] = useState("");

  Text.defaultProps = Text.defaultProps || {};
  Text.defaultProps.allowFontScaling = false;




  useEffect(() => {

    const degree_update_rate = 1;
    CompassHeading.start(degree_update_rate, degree => {
      setCompassHeading(degree);

    });


    return () => {
      CompassHeading.stop();
    };
  }, []);
  let abc = () => {
    console.log("mn chal gia abc ")

    Geolocation.getCurrentPosition(
      async (position) => {

        // console.log(position.coords.latitude);
        // console.log(position.coords.longitude);
        let latitude = position.coords.latitude
        let longitude = position.coords.longitude
        let res = await axios.get(`http://api.aladhan.com/v1/qibla/${latitude}/${longitude}`)
        // console.log(res.data.data.direction, "yes")

        _storeData = async () => {
          // console.log("mn chal gia store data")
          setDirectionValue(parseInt(res.data.data.direction))
          try {
            await AsyncStorage.setItem(
              'direction',
              JSON.stringify(res.data.data.direction)
            );
          } catch (error) {
            // Error saving data
          }
        };
        _storeData()
      },
      (error) => {
        // See error code charts below.
        console.log(error.code, error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  }




  let _retrieveData = async () => {
    // console.log("mn chal gia retrirve data")

    try {
      const value = await AsyncStorage.getItem('direction');

      if (value !== null) {
        // We have data!!
        console.log(value);
        setDirectionValue(parseInt(value))

      }
      else {
        abc()
      }
    } catch (error) {
      // Error retrieving data
      // console.log(error)

    }
  };
  _retrieveData()


  // console.log(typeof directionValue)
  console.log(compassHeading)
  return (
    (directionValue == "") ?

      <View >
        <ImageBackground resizeMode="cover"
          source={require('../images/background.jpg')}
          style={{ width: wp("100%"), height: "100%", display: "flex", justifyContent: "center", alignItems: "center", alignContent: "center" }} >

          <ActivityIndicator size="large" color="white" />
        </ImageBackground>
      </View>

      :

      <ImageBackground resizeMode="cover"
        source={require('../images/background.jpg')}
        style={{ width: wp("100%"), height: "100%" }} >
        <View >

          <View style={styles.header}>
            <ImageBackground resizeMode="center"
              source={require('../images/title.png')}
              style={styles.titleImage} >
              <Text style={styles.title1}>Qibla Direction</Text>
            </ImageBackground>
          </View>

          <View style={styles.container}>


            <Image
              style={[
                styles.image1,
                { transform: [{ rotate: `${360 - compassHeading}deg` }] },
              ]}
              resizeMode="contain"
              source={require('../images/qibla1.png')}
            />
            <Image
              style={[
                styles.image2,
                { transform: [{ rotate: `${parseInt(directionValue) + 45 - compassHeading}deg` }] },
              ]}
              resizeMode="contain"
              source={require('../images/qibla.png')}
            />
            <Text style={{ textAlign: "center", fontSize: RFPercentage(5), fontFamily: "bold", marginTop: RFPercentage(4), color: "white" }}>{directionValue}&deg;</Text>
          </View>
        </View>
      </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    // alignContent:"flex-start",
    alignItems: "center",
    // justifyContent:"flex-start", 
    // backgroundColor:"teal",
    marginTop:RFPercentage(-4),
  },

  image1: {
    marginTop: RFPercentage(12),
    width: wp('70%'),
    // alignSelf: 'center',
    position: "relative",
    height: hp("40%"),
  },
  image2: {
    marginTop: RFPercentage(12),
    width: wp('70%'),
    // alignSelf: 'center',
    position: "absolute",
    height: hp("40%"),
  },
  prrloader: {
    flex: 1,
    justifyContent: "center"
  },
  titleImage: {
    display: "flex",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    width: wp("100%"),
    height: hp("20%"),



  },
  header: {
    height: null,
    width: wp("100%"),
    // backgroundColor:"white",
    paddingTop: RFPercentage(2),




  },
  title1: {
    color: "yellow",
    fontSize: RFPercentage(5),
    marginTop: RFPercentage(2),
    textAlign: "center",
    fontWeight: "bold",
    width: wp("75%"),


  },

});
