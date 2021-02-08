import React, { useState, useEffect } from 'react';
import { Image, Dimensions ,ImageBackground,StyleSheet} from 'react-native';
import { Container, Button, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';
import GallerySwiper from "react-native-gallery-swiper";
import { ScrollView } from 'react-native-gesture-handler';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";


export function DuaEQunoot() {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  Text.defaultProps = Text.defaultProps || {};
  Text.defaultProps.allowFontScaling = false;


  return (
    
    
    <ImageBackground
        source={require('../images/background.jpg')}
        style={{ width: wp("100%"), height: null }} >
           <ScrollView >
        <View style={{margin:RFPercentage(1)}}> 

        <ImageBackground resizeMode="center"
        source={require('../images/title.png')}
        style={{ width: wp("100%"), height: hp("20%") }} >
        <View style={{margin:RFPercentage(1),marginTop:RFPercentage(7)}} > 

        <Text style={styles.title}>دُعَاءُ القنوت</Text>


        </View>
      </ImageBackground>

   
          <Text style={styles.arabic}>اَللَّهُمَّ إنا نَسْتَعِينُكَ وَنَسْتَغْفِرُكَ وَنُؤْمِنُ بِكَ وَنَتَوَكَّلُ عَلَيْكَ وَنُثْنِئْ عَلَيْكَ الخَيْرَ وَنَشْكُرُكَ وَلَا نَكْفُرُكَ وَنَخْلَعُ وَنَتْرُكُ مَنْ ئَّفْجُرُكَ اَللَّهُمَّ إِيَّاكَ نَعْبُدُ وَلَكَ نُصَلِّئ وَنَسْجُدُ وَإِلَيْكَ نَسْعأئ وَنَحْفِدُ وَنَرْجُو رَحْمَتَكَ وَنَخْشآئ عَذَابَكَ إِنَّ عَذَابَكَ </Text>
      <Text style={styles.urdu}>الہی ! ہم تجھ سے مدد چاہتے ہیں اور تجھ سے معافی مانگتے ہیں اور تجھ پر ایمان رکھتے ہیں اور تجھ پر بھروسہ کرتے ہیں اور تیری بہت اچھی تعریف کرتے ہیں اور تیرا شکر کرتے ہیں اور تیری نا شکری نہیں کرتےاور الگ کرتے ہیں اور چھوڑتے ہیں اس سخص کو جو تیری نافرمانی کرے۔
الہی! ہم تیری ہی عبادت کرتے ہیں اور تیرے ہی لئے نماز پڑھتے ہیں اور سجدہ کرتے ہیں اور تیری ہی طرف دوڑتے اور جھپٹتےہیں اور تیری رحمت کے امید وارہیں اور تیرے عذاب سے ڈرتے ہیں، بیشک تیرا عذاب کافروں کو پہنچنے والا ہے۔</Text>
      <Text style={styles.english}>O Allah! We implore You for help and beg forgiveness of You and believe in You and rely on You and extol You and we are thankful to You and are not ungrateful to You and we alienate and forsake those who disobey You. O Allah! You alone do we worship and for You do we pray and prostrate and we betake to please You and present ourselves for the service in Your cause and we hope for Your mercy and fear Your chastisement. Undoubtedly, Your torment is going to overtake infidels O Allah!</Text>
         

        </View>
    </ScrollView>
      </ImageBackground>


  )
}




const styles = StyleSheet.create({
  
  title: {
    color: "yellow",
    // color: "#85144b",

    fontSize: RFPercentage(5),
    margin: RFPercentage(2),
    textAlign:"center",
    fontWeight:"bold",
    textAlign:"center",
   


  },
  urdu: {
    color: "white",
    fontSize: RFPercentage(4.5),
    margin: RFPercentage(3),
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
    margin: RFPercentage(2),
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
    margin: RFPercentage(3),
    // fontWeight: "bold",
    lineHeight: 30,

    textAlign: "center",
    paddingBottom: RFPercentage(8),
    marginTop: RFPercentage(6),

  },



});
