
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


export function Ushr({ route, navigation, }) {

  Text.defaultProps = Text.defaultProps || {};
  Text.defaultProps.allowFontScaling = false;

  const [selectedValue, setSelectedValue] = useState("Natural");
  const [ushrProduct, setUshrProduct] = useState("Crop");
  const [price, setPrice] = useState("");
  const [weight, setWeight] = useState("");
  const [ushrPrice, setUshrPrice] = useState(0);
  const [ushrWeight, setUshrWeight] = useState(0);
  const [calculation, setCalculation] = useState(false);

  let calculate = () => {

    if (weight === "") {
      alert("Please Enter Weight of Crop!");

    } else if (price === "") {
      alert("Please Enter Price of Crop!");

    } else {
      if (selectedValue == "Natural") {
        let calculatePrice = 10 / 100 * (price * weight);
        calculatePrice = calculatePrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

        let calculateWeight = 10 / 100 * weight;
        setUshrPrice(calculatePrice)
        setUshrWeight(calculateWeight)

      } else {
        let calculatePrice = 5 / 100 * (price * weight);
        calculatePrice = calculatePrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        let calculateWeight = 5 / 100 * weight;
        setUshrPrice(calculatePrice)
        setUshrWeight(calculateWeight)
      }


      setCalculation(true)

    }


  }

  return (

    //     <Container>
    //     <Content>
    //       <Form>
    //         <Item floatingLabel>
    //           <Label>Username</Label>
    //           <Input />
    //         </Item>
    //         <Item floatingLabel last>
    //           <Label>Password</Label>
    //           <Input />
    //         </Item>

    //         <Picker
    //     selectedValue={selectedValue}
    //     style={{flex:1,marginLeft:10}}
    //     onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
    //   >
    //     <Picker.Item label="Java" value="java" />
    //     <Picker.Item label="JavaScript" value="js" />
    //   </Picker>

    //         <Button block style={style.button}>
    //         <Text>Calculate</Text>
    //       </Button>
    //       </Form>

    //     </Content>

    //   </Container>
    <ImageBackground resizeMode="cover"
      source={require('../images/background.jpg')}
      style={{ width: wp("100%"), height: "100%" }} >
      <ScrollView  >


        <View>


          <TextInput mode="Flat (focused)" style={style.TextInput} style={{ paddingHorizontal: 12, paddingVertical: 0, backgroundColor: "transparent", color: "white" }} selectionColor="white" underlineColor="white" placeholderTextColor="white" theme={{
            colors: {
              placeholder: 'white', text: 'white', primary: 'white',
              underlineColor: 'white', background: 'transparent'
            }
          }} onChangeText={(event) => setUshrProduct(event)}
            label='Name of Crop'
          />

          <TextInput mode="Flat " style={style.TextInput} keyboardType="number-pad" style={{ paddingHorizontal: 12, paddingVertical: 0 }} underlineColor="white" theme={{
            colors: {
              placeholder: 'white', text: 'white', primary: 'white',
              underlineColor: 'white', background: 'transparent'
            }
          }} onChangeText={(event) => setWeight(event)}
            label='Total Weight (kg)'
          />
          <TextInput mode="Flat " style={style.TextInput} keyboardType="number-pad" style={{ paddingHorizontal: 12, paddingVertical: 0 }} underlineColor="white" theme={{
            colors: {
              placeholder: 'white', text: 'white', primary: 'white',
              underlineColor: 'white', background: 'transparent'
            }
          }} onChangeText={(event) => setPrice(event)}
            label='Price (1 kg)'
          />


          <RadioButton.Group style={{ display: "flex", flexDirection: "row", marginTop: 50 }}
            onValueChange={value => value == "Natural" ? setSelectedValue("Natural") : setSelectedValue("Artificially")}
            value={selectedValue}
          >
            <View style={style.TextInput}>
              <View style={{ display: "flex", flexDirection: "row" }} >
                <Text style={{ marginTop: 7, color: "white" }}>Natural watered mostly</Text>
                <RadioButton value="Natural" color="white" theme={{
                  colors: {
                    placeholder: 'white', text: 'white', primary: 'white',
                    underlineColor: 'transparent', background: 'white'
                  }
                }} />
              </View>
              <View style={{ display: "flex", flexDirection: "row" }} >
                <Text style={{ marginTop: 7, color: "white" }}>Artificially watered mostly</Text>
                <RadioButton value="Artificially" color="white" theme={{
                  colors: {
                    placeholder: 'white', text: 'white', primary: 'white',
                    underlineColor: 'transparent', background: 'white'
                  }
                }} />
              </View>
            </View>
          </RadioButton.Group>



          <Button mode="contained" onPress={calculate} style={style.button}>
            Calculate
  </Button>
        </View>
        {!calculation ? <Text></Text> :
          <View style={{ margin: 15 }}>
            {/* <View style={style.title} ><Text style={style.title}>USHR</Text></View> */}
            <Text style={{ fontWeight: "bold", color: "white" }}>Ushr according to Weight of {ushrProduct} :</Text>
            <View style={style.title} ><Text style={style.title}>{ushrWeight} (kg)</Text></View>
            <Text style={{ fontWeight: "bold", color: "white" }}>Usher according to Price  of {ushrProduct} :</Text>
            <View style={style.title}><Text style={style.title}>{ushrPrice} (Rupees)</Text></View>
          </View>

        }
      </ScrollView>
    </ImageBackground>




  );
}
const style = StyleSheet.create({

  container: {
    flex: 1,

    backgroundColor: 'white',

  },
  TextInput: {
    fontSize: 24,
    color: 'white',
    //   marginTop:10,
    marginBottom: 0,
    marginTop: 10,
    margin: 10
  },

  button: {
    margin: 10,
    backgroundColor: 'brown',


  },
  title: {
    display: "flex",
    flexDirection: 'row',
    alignContent: "center",
    justifyContent: "center",
    fontSize: 30,
    fontWeight: "bold",
    margin: 10,
    color: 'white',

  }


});


// import React, {useState, useEffect} from 'react';
// import {Image, StyleSheet} from 'react-native';
// import CompassHeading from 'react-native-compass-heading';

// export function Ushr({ route, navigation, }) {
//   const [compassHeading, setCompassHeading] = useState(0);

//   useEffect(() => {
//     const degree_update_rate = 30;

//     CompassHeading.start(degree_update_rate, degree => {
//       setCompassHeading(degree);
//     });

//     return () => {
//       CompassHeading.stop();
//     };
//   }, []);

//   return (
//     <Image
//       style={[
//         styles.image,
//         {transform: [{rotate: `${260 - compassHeading}deg`}]},
//       ]}
//       resizeMode="contain"
//       source={require('../images/qibla.jpeg')}
//     />
//   );
// };

// const styles = StyleSheet.create({
//   image: {
//     width: '90%',
//     flex: 1,
//     alignSelf: 'center',
//   },
// });
