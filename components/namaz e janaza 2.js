import React, { useState, useEffect } from 'react';
import { Image, Dimensions ,ImageBackground,StyleSheet} from 'react-native';
import { Container, Button, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';
import GallerySwiper from "react-native-gallery-swiper";
import { ScrollView } from 'react-native-gesture-handler';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export function namazEJanaza2() {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  Text.defaultProps = Text.defaultProps || {};
  Text.defaultProps.allowFontScaling = false;


  return (
    <ScrollView style={{backgroundColor:"#fFF"}}>

      <ImageBackground
        source={require('../images/background.jpg')}
        style={{ width: windowWidth, height: null }} >
        <View style={{margin:RFPercentage(1)}}> 

        <ImageBackground resizeMode="center"
        source={require('../images/title.png')}
        style={{ width: wp("100%"), height: hp("20%"), marginTop:RFPercentage(1),}} >
        <View style={{margin:RFPercentage(1),marginTop:RFPercentage(6)}} > 

   
        <Text style={styles.titleTop}>نماز</Text>


        </View>
      </ImageBackground>
       
          <Text style={styles.title}>Takbeer</Text>
          <Text style={styles.english}>Every prayer starts with the takbeer which signifies the start of every prayer. Everyone must have heard the phrase ‘Allahu Akbar’. It is known as takbeer and it means ‘Allah is the Greatest’. This phrase is repeated frequently during the Salah. The first takbeer is accompanied by raising of hands, and both arms are folded.</Text>
          <Text style={styles.arabic}>اَللَّهُ اَكْبَرُ</Text>

          <Text style={styles.title}>Sanaa</Text>
          <Text style={styles.english}>The Sanaa is prayed after folding the hands, and is followed by seeking refuge from Shaytan.</Text>
          <Text style={styles.arabic}>سُبْحَا نَكَ اللَّهُمَّ وَ بِحَمْدِكَ وَتَبَارَكَ اسْمُكَ وَتَعَالَى جَدُّكَ وَلاَ إِلَهَ غَيْرُكَ</Text>
          <Text style={styles.arabic}>اَعُوْذُ باِللهِ مِنَ الشَّيْطَنِ الرَّ جِيْمِ</Text>


          <Text style={styles.title}>Surah Fatiha</Text>
          <Text style={styles.english}>After Sana and Tauuz, Surah Fatiha is recited. Surah Fatiha is mandatory and is repeated in every Rak’ah. The word Fatiha means “opening” and refers to it being the first chapter of the Quran. It is also kown as Ummul Kitab – ‘The mother of the book’, as it is the most significant surah of the Quran. The Surah has seven Ayats!</Text>
          <Text style={styles.arabic}>بِسْمِ اللهِ الرَّحْمنِ الرَّحِيمِ</Text>
          <Text style={styles.arabic}>الْحَمْدُ للّهِ رَبِّ الْعَالَمِينَ</Text>
          <Text style={styles.arabic}>الرَّحْمـنِ الرَّحِيمِ</Text>
          <Text style={styles.arabic}>مَالِكِ يَوْمِ الدِّينِ</Text>
          <Text style={styles.arabic}>إِيَّاكَ نَعْبُدُ وإِيَّاكَ نَسْتَعِينُ</Text>
          <Text style={styles.arabic}>اهدِنَــــا الصِّرَاطَ المُستَقِيمَ</Text>
          <Text style={styles.arabic}>صِرَاطَ الَّذِينَ أَنعَمتَ عَلَيهِمْ</Text>
          <Text style={styles.arabic}>غَيرِ المَغضُوبِ عَلَيهِمْ وَلاَ الضَّالِّينَ</Text>
          <Text style={styles.english}>Not of those who incurred Your wrath, nor (of those who) went astray.

Surah Fatiha is the most important surah of the Quran, and is a prayer that every Muslim must recite many times every day. In the next blog, we will discuss the Surah in detail. After Surah Fatiha, any other Surah, or a minimum of three verses are recited from the Quran.</Text>
         



          <Text style={styles.title}>Rukoo</Text>
          <Text style={styles.english}>After the recitation of Surah Fatihah, the person Bows after takbeer and recites</Text>
          <Text style={styles.arabic}>سُبْحَانَ رَبِّىَ الْعَظِيْمِ</Text>

          <Text style={styles.title}>Qeyam</Text>
          <Text style={styles.english}>After Rukoo, the person stands up by saying</Text>
          <Text style={styles.arabic}>سَمِعَ اللَّهُ لِمَنْ حَمِدَه</Text>

          <Text style={styles.english}>And after standing straight says</Text>
          <Text style={styles.arabic}>رَبَّنَـا لَكَ الْحَمْدُ</Text>


          <Text style={styles.title}>Sajdah</Text>
          <Text style={styles.english}>The first prostration is done after Qeyam and the palms, knees and forehead is placed on the ground, alongside the nose and forehead, and the remembrance of the God is recited</Text>
          <Text style={styles.arabic}>سُبْحَانَ رَبِّىَ الأَ عْلَى</Text>


          <Text style={styles.title}>Jalasah</Text>
          <Text style={styles.english}>After the first Sajdah, the person sits down and may seek forgiveness by reciting</Text>
          <Text style={styles.arabic}>اَللَّهُمَّ اغْفِرْ لِيْ</Text>

          <Text style={styles.title}>Second Sajdah</Text>
          <Text style={styles.english}>After the First Jalasah, the person goes to Sajdah again and recites the same prayer. After the second Sajdah, the person should stand up and repeat the same sequence again and recite a different Surah after Surah Fatiha. After the second Rekah, the person should sit down and recite</Text>

          <Text style={styles.title}>Tashahhud</Text>
          <Text style={styles.arabic}>اَلتَّحِيَّاتُ لِلَّهِ وَالصَّلَوَاتُ وَالطَّيِبَاتُ اَلسَّلاَمُ عَلَيْكَ اَيُّهَاالنَّبِيُّ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ

اَلسَّلاَمُ عَلَيْنَا وَ عَلَى عِبَادِ اللهِ الصَّالِحِيْنَ

اَشْهَدُ اَنْ لاَّ اِلَهَ اِلاَّ اللَّهُ وَاَشْهَدُ اَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُوْلُهُ</Text>
          <Text style={styles.english}>All compliments, prayers and beautiful expressions are for God. Peace be on you, O Messenger, and God’s mercy and blessings. Peace be on us and on all righteous servants of God. I bear witness that no one is worthy of worship except God. And I bear witness that Muhammad is His servant and Envoy.</Text>
      

          <Text style={styles.title}>Greetings on the Prophet</Text>
          <Text style={styles.english}>After Tashahhud, Darood is recited</Text>

          <Text style={styles.arabic}>اَللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَّعَلَى آلِ مُحَمَّدٍ كَمَـا صَلَّيْتَ عَلَى اِبْرَاهِيْمَ وَعَلَى آلِ اِبْرَاهِيْمَ اِنَّكَ حَمِيْدٌ مَّجِيْدٌ

اَللَّهُمَّ بَـارِكْ عَلَى مُحَمَّدٍ وَّعَلَى آلِ مُحَمَّدٍ كَمَـا بَـاَرَكْتَ عَلَى اِبْرَاهِيْمَ وَعَلَى آلِ اِبْرَاهِيْمَ اِنَّكَ حَمِيْدٌ مَّجِيْدٌ</Text>
          <Text style={styles.english}>My God, honor Muhammad and Muhammad’s family as you honoured Abraham and Abraham’s family Surely, you are praiseworthy, the Great My God, bless Muhammad and Muhammad’s family as you blessed Abraham and Abraham’s family Surely, you are praiseworthy, the Great.</Text>
      

          <Text style={styles.title}>Prayer from the Quran</Text>
          <Text style={styles.english}>One of the prayers from the prayers can be recited. The most common prayer that is usually recited is</Text>
          <Text style={styles.arabic}>اَللهُمَّ اِنِّىْ ظَلَمْتُ نَفْسْ ظُلْماً كَشِيْرًا وَّلاَ يَغْفِرُ الذُّنُوْبَ اِلآَّ انْتَ فَاغْفِرْ لِىْ مَغْفِرَةً مِّنْ عِنْدِكَ وَارْحَمْنِىْ اِنَّـكَ اَنْتَ الْغَفُوْرُ الرَّحِيْمُ</Text>
          <Text style={styles.english}>This is the most common dua that is recited, but any other dua can be recited as well.</Text>


          <Text style={styles.title}>Tasleem</Text>
          <Text style={styles.english}>The Prayer can be completed by turning right and then left by saying</Text>
          <Text style={styles.arabic}>اَلسَّلاَمُ عَلَيكُمْ وَرَحْمَةُ اللهِ</Text>
      
          <Text style={styles.arabic}></Text>
      

        </View>
      </ImageBackground>
    </ScrollView>


  )
}




const styles = StyleSheet.create({
  
  title: {
    color: "yellow",
    // color: "#85144b",

    fontSize: RFPercentage(5),
    margin: RFPercentage(1),
    textAlign:"center",
    fontWeight:"bold",
    textAlign:"left",

  },

  titleTop: {
    color: "yellow",
    // color: "#85144b",

    fontSize: RFPercentage(6),
    marginTop: RFPercentage(2),
    textAlign:"center",
    fontWeight:"bold",
    textAlign:"center",

  },

  arabic: {
    color: "cyan",
    fontSize: RFPercentage(5),
    margin: RFPercentage(1.6),
    fontWeight: "bold",
    textAlign:"center",



  },
  english: {
    color: "white",
    fontSize: RFPercentage(3),
    margin: RFPercentage(1),
    // fontWeight: "bold",
    textAlign:"justify",



  },




});
