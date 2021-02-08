
import React, { useState, useEffect } from 'react';
// import { Container, Header, Content, Form, Item, Input, Label,Button,Text } from 'native-base';
import { View, Image, Dimensions, ImageBackground, TouchableOpacity, StyleSheet, Picker, ScrollView, RefreshControl } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { PermissionsAndroid } from 'react-native';
// import Geolocation from '@react-native-community/geolocation';
import { AsyncStorage } from 'react-native';

import Geolocation from 'react-native-geolocation-service';
import { set } from 'react-native-reanimated';
import { Text, Checkbox, Button, TextInput, RadioButton } from 'react-native-paper';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export function Zakat({ route, navigation, }) {

  const [RateOfGold, setRateOfGold] = useState("");
  const [valueOfGold, setValueOfGold] = useState(0);
  const [cashInHand, setCashInHand] = useState(0);
  const [cashInBank, setCashInBank] = useState(0);
  const [valueOfStock, setValueOfStock] = useState(0);
  const [zakat, setZakat] = useState(0);
  const [calculation, setCalculation] = useState(false);
  Text.defaultProps = Text.defaultProps || {};
  Text.defaultProps.allowFontScaling = false;



  let calculate = () => {
 

   
    if (RateOfGold == "") {
      alert("Please Enter Current Rate of Gold!")

        setCalculation(false)

    } else {

      var totalValue = parseFloat(((valueOfGold * RateOfGold) + cashInHand + cashInBank + valueOfStock));
      // console.log("total value" +totalValue)
      var valueOfZakat = ((valueOfGold * RateOfGold) + cashInHand + cashInBank + valueOfStock) / 40;
      // console.log("value of zakat" +valueOfZakat)
      valueOfZakat = Math.ceil(valueOfZakat)
      valueOfZakat = valueOfZakat.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")





      if (totalValue < (RateOfGold * 7.5)) {
        setZakat(0)
        setCalculation(true)
      }

      else {
        setZakat(valueOfZakat)
        setCalculation(true)


      }
    }
  }

  return (
    <ImageBackground resizeMode="cover"
    source={require('../images/background.jpg')}
    style={{ width: wp("100%"), height: "100%" }} >
    <ScrollView  >
      <View>
        <TextInput mode="Flat (focused)" keyboardType="numeric" style={style.TextInput} style={{ paddingHorizontal: 12, paddingVertical: 0 }} selectionColor="white" underlineColor="white" placeholderTextColor="white" theme={{
            colors: {
              placeholder: 'white', text: 'white', primary: 'white',
              underlineColor: 'white', background: 'transparent'
            }
          }} onChangeText={(event) => { event === "" ? setRateOfGold(parseFloat(0)) : setRateOfGold(parseFloat(event)) }}
          label='Current Rate of Gold 1 Tola'
        />
        {/* <TextInput mode="Flat (focused)" style={style.TextInput} style={{ paddingHorizontal: 12, paddingVertical: 0 }} onChangeText={(event) => setUshrProduct(event)}
          label='Current Rate of Silver 1 Tola'
        /> */}
        <TextInput mode="Flat (focused)" keyboardType="number-pad" style={style.TextInput} style={{ paddingHorizontal: 12, paddingVertical: 0 }} selectionColor="white" underlineColor="white" placeholderTextColor="white" theme={{
            colors: {
              placeholder: 'white', text: 'white', primary: 'white',
              underlineColor: 'white', background: 'transparent'
            }
          }} onChangeText={(event) => { event === "" ? setValueOfGold(parseFloat(0)) : setValueOfGold(parseFloat(event)) }}
          label='Total Gold (In Tola) '
        />

        {/* <TextInput mode="Flat (focused)" style={style.TextInput} style={{ paddingHorizontal: 12, paddingVertical: 0 }} onChangeText={(event) => setUshrProduct(event)}
          label='Total Silver (In Tola) '
        /> */}

        <TextInput mode="Flat " style={style.TextInput} keyboardType="number-pad" style={{ paddingHorizontal: 12, paddingVertical: 0 }} selectionColor="white" underlineColor="white" placeholderTextColor="white" theme={{
            colors: {
              placeholder: 'white', text: 'white', primary: 'white',
              underlineColor: 'white', background: 'transparent'
            }
          }}onChangeText={(event) => { event === "" ? setCashInHand(parseFloat(0)) : setCashInHand(parseFloat(event)) }}
          label='Total Cash in Hand'
        />
        <TextInput mode="Flat " style={style.TextInput} keyboardType="number-pad" style={{ paddingHorizontal: 12, paddingVertical: 0 }} selectionColor="white" underlineColor="white" placeholderTextColor="white" theme={{
            colors: {
              placeholder: 'white', text: 'white', primary: 'white',
              underlineColor: 'white', background: 'transparent'
            }
          }} onChangeText={(event) => { event === "" ? setCashInBank(parseFloat(0)) : setCashInBank(parseFloat(event)) }}
          label='Total Cash in Bank'
        />
        <TextInput mode="Flat " style={style.TextInput} keyboardType="number-pad" style={{ paddingHorizontal: 12, paddingVertical: 0 }} selectionColor="white" underlineColor="white" placeholderTextColor="white" theme={{
            colors: {
              placeholder: 'white', text: 'white', primary: 'white',
              underlineColor: 'white', background: 'transparent'
            }
          }} onChangeText={(event) => { event === "" ? setValueOfStock(parseFloat(0)) : setValueOfStock(parseFloat(event)) }}
          label='Total value of Stocks'
        />

        <Button mode="contained" onPress={calculate} style={style.button}>
          Calculate
  </Button>
      </View>
      {!calculation ? <Text></Text> :
        <View style={{ margin: RFPercentage(1) }}>
          <View style={style.title}><Text style={style.title}>Zakat Payable</Text></View>
          {/* <Text>RS:{zakat}</Text> */}
          <View style={style.title}><Text style={{ fontSize: RFPercentage(5), fontWeight: "bold" ,color:"white"}}>{zakat} <Text style={{ fontSize: RFPercentage(3.3), color:"white"}}>PKR</Text></Text></View>

        </View>

      }
    </ScrollView>
    </ImageBackground>




  );
}
const style = StyleSheet.create({

  container: {
    flex: 1,
    // padding: RFPercentage(1.6),
    backgroundColor: 'white',

  },
  TextInput: {
    fontSize: RFPercentage(3),
    color: 'white',
    //   marginTop:10,
    marginBottom: 0,
    marginTop: RFPercentage(1.6),
    margin: RFPercentage(1.6),
  },

  button: {
    margin: RFPercentage(1.6),
    backgroundColor:"brown"


  },
  title: {
    display: "flex",
    flexDirection: 'row',
    alignContent: "center",
    justifyContent: "center",
    fontSize: RFPercentage(5),
    fontWeight: "bold",
    marginBottom: RFPercentage(1.6),
    color:"white"

  }


});


