import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, Button, StatusBar, Image, StyleSheet, Dimensions, ImageBackground, TouchableOpacity } from 'react-native';
import { Container, Header, } from 'native-base';
import SplashScreen from 'react-native-splash-screen'
import { PermissionsAndroid } from 'react-native';
import { Tasbeeh } from "./components/Tasbeeh"
import { PrayerTime } from "./components/PrayerTime"
import { Ushr } from './components/Ushr';
import { qiblaDirection } from './components/QiblaDirection';
import { namazEJanaza } from './components/namaz e janaza';
import { kalimas } from './components/kalimas';
import { DuaEQunoot } from './components/Ayat Al Kursi';
import { namazEJanaza2 } from './components/namaz e janaza 2';
import { Zakat } from './components/zakat';
import { AsmaUlHusna } from './components/Asma-ul-Husna';
import { Namaz } from './components/Namaz';
import { Kalima } from './components/kalima';
import { ScrollView } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";


console.disableYellowBox = true;

function FeedScreen({ navigation }) {

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  Text.defaultProps = Text.defaultProps || {};
  Text.defaultProps.allowFontScaling = false;

  const Sound = require('react-native-sound')
  let clickSound = new Sound(require('./images/abc2.mp3'), Sound.MAIN_BUNDLE, (error) => {
    if (error) {
      console.log(error)
    }
  })
  let resetSound = new Sound(require('./images/abc1.mp3'), Sound.MAIN_BUNDLE, (error) => {
    if (error) {
      console.log(error)
    }
  })
  return (
    <ScrollView>
      <ImageBackground resizeMode="cover"
        source={require('./images/background.jpg')}
        style={{ width: wp("100%"), height: "100%" }} >

        <StatusBar barStyle="default" backgroundColor="brown" />

        <Image
          style={{ height: hp("28%"), width: wp("100%") }}

          resizeMode="cover"
          source={require('./images/2.jpg')}
        />
        <View style={styles.boxGrid1} >

<TouchableOpacity style={styles.boxs} onPress={() => navigation.navigate('Prayer Times')}>
          <Text style={styles.boxsText} >Prayer Time
          </Text>
          <Image
            source={require('./images/prayerTimeIcon.png')}
            style={{ width: wp("21.5%"), height: hp("12%") }}
            resizeMode="contain"
          />
</TouchableOpacity>
<TouchableOpacity style={styles.boxs} onPress={() => navigation.navigate('Qibla Finder')}>

          <Text style={styles.boxsText} >Qibla Finder
          </Text>
      <Image
              source={require('./images/qiblaDirectionIcon.png')}
              style={{ width: wp("21.5%"), height: hp("12%") }}
              resizeMode="cover"
            />
          </TouchableOpacity>
          
          
<TouchableOpacity style={styles.boxs} onPress={() => navigation.navigate('Ushr')}>

          <Text style={styles.boxsText} >Ushr 
          </Text>
          <Image
            source={require('./images/uher.png')}
            style={{ width: wp("25%"), height: hp("21%"),marginTop:RFPercentage(-2) }}
            resizeMode="cover"
          />

</TouchableOpacity>

<TouchableOpacity style={styles.boxs} onPress={() => navigation.navigate('Zakat')}>


          <Text style={styles.boxsText} >Zakat 
          </Text>
            <Image
              source={require('./images/zakat.png')}
              style={{ width: wp("21.5%"), height: hp("12%") }}
              resizeMode="cover"
              />
              </TouchableOpacity>



<TouchableOpacity style={styles.boxs} onPress={() => navigation.navigate('Tasbeeh', { clickSound: clickSound, resetSound: resetSound })}>


          <Text style={styles.boxsText} >Tasbeeh
          </Text>
          <Image
            source={require('./images/tasbeehIcon.png')}
            style={{ width: wp("22%"), height: hp("12%") }}
            resizeMode="cover"
            />
            </TouchableOpacity>

          <TouchableOpacity style={styles.boxs} onPress={() => navigation.navigate('Asma ul Husna')}>

          <Text style={styles.boxsText}  >Asma-ul-Husna
      
          </Text>
      <Image
              source={require('./images/asmaulhusmaicon.png')}
              style={{ width: wp("20.5%"), height: hp("11%") }}
              resizeMode="cover"
            />
          </TouchableOpacity>
<TouchableOpacity style={styles.boxs}  onPress={() => navigation.navigate('Namaz')} >
<Text style={styles.boxsText}>Namaz
</Text>
            <Image
              source={require('./images/namaz2.png')}
              style={{ width: wp("22%"), height: hp("12.5%") }}
              resizeMode="cover"
            />
</TouchableOpacity>
          

      <TouchableOpacity style={styles.boxs} onPress={() => navigation.navigate('Kalimas')}>
          <Text style={styles.boxsText} > 6 Kalimas
          </Text>
      <Image
              source={require('./images/6kalimas.png')}
              style={{ width: wp("21.5%"), height: hp("12.2%") }}
              resizeMode="cover"
            />


          </TouchableOpacity>

          <TouchableOpacity style={styles.boxs} onPress={() => navigation.navigate('Namaz e Janaza')}>
          <Text style={styles.boxsText} >Namaz e Jnaza
          </Text>
      <Image
              source={require('./images/namazejnaza.png')}
              style={{ width: wp("21.5%"), height: hp("12%") }}
              resizeMode="cover"
            />

          </TouchableOpacity>

          <TouchableOpacity style={styles.boxs} onPress={() => navigation.navigate('Dua e Qanoot')}>
          <Text style={styles.boxsText}  >Dua e Qanoot
          </Text>
      <Image
              source={require('./images/duaqanoot.png')}
              style={{ width: wp("21.5%"), height: hp("12%") }}
              resizeMode="cover"
            />

          </TouchableOpacity>




        </View>
      </ImageBackground>
    </ScrollView>
  );
}

function ProfileScreen({ navigation }) {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  Text.defaultProps = Text.defaultProps || {};
  Text.defaultProps.allowFontScaling = false;

  return (
    //   <ScrollView>
    //     <TouchableOpacity activeOpacity = { .8 }  onPress={() => navigation.navigate('abc',{myValue:10})}>
    //   <Image
    //     style={{ height: 180, width: windowWidth }}

    //     resizeMode="cover"
    //     source={require('./images/backgroundHomee.jpg')}

    //   />
    //   </TouchableOpacity>
    //   <Button
    //       title="Go to Details"
    //       onPress={() => navigation.navigate('abc')}
    //     />

    // </ScrollView>


    <ImageBackground resizeMode="cover"
      source={require('./images/background.jpg')}
      style={{ width: wp("100%"), height: "100%" }} >

      <ScrollView>

        <View style={styles.boxGrid2} >
          <ImageBackground resizeMode="center"
            source={require('./images/title.png')}
            style={{
              display: "flex",
              alignContent: "center",
              alignItems: "center",
              justifyContent: "center",
              width: wp("100%"),
              height: hp("20%"),
              marginTop: RFPercentage(1), marginBottom: RFPercentage(5)
            }} >
            <Text style={styles.title}>Learn Supplications</Text>
          </ImageBackground>


          <View style={styles.box}>
            <TouchableOpacity activeOpacity={.8} onPress={() => navigation.navigate('Supplication', { title: "مسجد میں داخل ہونے کی دعا", arabic: "اَللّٰهُمَّ افْتَحْ لِيْ اَبْوَابَ رَحْمَتِکَ.", urdu: "اے اللہ! میرے لیے رحمت کے دروازے کھول دے", english: "Oh Allah! Open the doors for me of your Blessings." })}>
              <View style={styles.imgbox}>
                <Image
                  source={require('./images/supplications/masjad.png')}
                  style={{ width: wp("35%"), height: hp("35%"), borderRadius: 5, }}
                  resizeMode="center"
                /></View>
              <Text style={{ color: "white", fontSize: RFPercentage(3.5), textAlign: "center", marginTop: RFPercentage(2), }} >مسجد میں داخل ہونے کی دعا</Text>
            </TouchableOpacity>
          </View>


          <View style={styles.box}>
            <TouchableOpacity activeOpacity={.8} onPress={() => navigation.navigate('Supplication', { title: "مسجد سے نکلنے کی دعا", arabic: "اَللّٰهُمَّ اِنِّيْ اَسْاَلُکَ مِنْ فَضْلِکَ وَرَحْمَتِکَ", urdu: "اے اللہ! میں تجھ سے تیرا فضل اور تیری رحمت مانگتا ہوں۔", english: "Oh Allah! I ask you of your Favour" })}>
              <View style={styles.imgbox}>

                <Image
                  source={require('./images/supplications/masjid2.png')}
                  style={{ width: wp("30%"), height: hp("30%"), borderRadius: 5, }}
                  resizeMode="center"
                />
              </View>
              <Text style={{ color: "white", fontSize: RFPercentage(3.5), textAlign: "center", marginTop: RFPercentage(2) }} >مسجد سے نکلنے کی دعا</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.box}>
            <TouchableOpacity activeOpacity={.8} onPress={() => navigation.navigate('Supplication', { title: "گھر میں داخل ہوتے وقت کی دعا", arabic: "اَللّٰھُمَّ اِنِّیْ اَسْئَلُكَ خَیْرَالْمَوْلَجِ وَخَیْرَالْمَخْرَجِ", urdu: "اے اللہ عَزَّ وَجَلَّ ! میں تجھ سے داخل ہونے اور نکلنے کی جگہوں کی بھلائی طلب کرتا ہوں ۔", english: "O Allah(عَزَّ وَجَلَّ)! I ask you for the goodness of the places of entering and exiting." })}>
              <View style={styles.imgbox}>

                <Image
                  source={require('./images/supplications/home.jpg')}
                  style={{ width: wp("30%"), height: hp("30%"), borderRadius: 5, }}
                  resizeMode="center"
                />
              </View>
              <Text style={{ color: "white", fontSize: RFPercentage(3.5), textAlign: "center", marginTop: RFPercentage(2) }} >گھر میں داخل ہوتے وقت کی دعا</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.box}>
            <TouchableOpacity activeOpacity={.8} onPress={() => navigation.navigate('Supplication', { title: "گھر سے نکلتے وقت کی دعا", arabic: "بِسْمِ اللّٰہِ تَوَكَّلْتُ عَلَى اللّٰہِ وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللّٰہِ", urdu: "اللہ عزوجل کے نام سے (گھر سے نکلتا ہوں) میں نے اللہ عزوجل پر بھروسہ کیا اللہ عزوجل کے بغیر نہ طاقت ہے (گناہوں سے بچنےکی) اور نہ وقت ہے (نیکیاں کرنے کی)۔", english: "In the name of Allah Almighty (I comeout of my house) I trust Allah Almighty, there is no capability of saving oneself from sins and neither is there capability to do good deeds but from Allah Almighty." })}>
              <View style={styles.imgbox}>
                <Image
                  source={require('./images/supplications/home1.png')}
                  style={{ width: wp("30%"), height: hp("30%"), borderRadius: 5, }}
                  resizeMode="contain"
                />
              </View>
              <Text style={{ color: "white", fontSize: RFPercentage(3.5), textAlign: "center", marginTop: RFPercentage(2) }} >گھر سے نکلتے وقت کی دعا</Text>
            </TouchableOpacity>
          </View>


          <View style={styles.box}>
            <TouchableOpacity activeOpacity={1} activeOpacity={.8} onPress={() => navigation.navigate('Supplication', { title: "سوتے وقت کی دعا", arabic: "اَللّٰھُمَّ بِاسْمِكَ أَمُوتُ وَأَحْيَا", urdu: "الٰہی عزوجل میں تیرے نام پر مرتا ہوں اور جیتا ہوں۔", english: "O Allah (Almighty) I live and die in your name." })}>
              <View style={styles.imgbox}>
                <Image
                  source={require('./images/supplications/sleep.png')}
                  style={{ width: wp("40"), height: hp("40%"), borderRadius: 5, }}
                  resizeMode="contain"

                />
              </View>
              <Text style={{ color: "white", fontSize: RFPercentage(3.5), textAlign: "center", marginTop: RFPercentage(2) }} >سوتے وقت کی دعا</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.box}>
            <TouchableOpacity activeOpacity={0} activeOpacity={.8} onPress={() => navigation.navigate('Supplication', { title: "نیند سے بیدار ہونے کی دعا", arabic: "الْحَمْدُ لِلّٰہِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ", urdu: "تمام تعریفیں اللہ عزوجل کے لئے جس نے ہمیں موت (نیند) کے بعد حیات (بیداری) عطا فرمائی اور ہمیں اسی طرف لوٹنا ہے۔", english: "All Praise onto Allah (Almighty) Who granted us life after death (Sleep) and we are return to him." })}>
              <View style={styles.imgbox}>
                <Image
                  source={require('./images/supplications/animate1.png')}
                  style={{ width: wp("35%"), height: hp("35%"), borderRadius: 5, }}
                  resizeMode="center"

                />
              </View>
              <Text style={{ color: "white", fontSize: RFPercentage(3.5), textAlign: "center", marginTop: RFPercentage(2) }} >نیند سے بیدار ہونے کی دعا</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.box}>
            <TouchableOpacity activeOpacity={.8} onPress={() => navigation.navigate('Supplication', { title: "کھانے سے پہلے کی دعا", arabic: "بِسْمِ اللّٰہِ وَعَلٰی بَرَكَةِ اللّٰہِ", urdu: "میں نے الله کے نام کے ساتھ اور الله کی برکت پر کھانا شروع کیا", english: "In the name of Allah and with the blessings of Allah I begin (eating)" })}>
              <View style={styles.imgbox}>
                <Image
                  source={require('./images/supplications/khana2.png')}
                  style={{ width: wp("35%"), height: hp("35%"), borderRadius: 5, }}
                  resizeMode="center"

                />
              </View>
              <Text style={{ color: "white", fontSize: RFPercentage(3.5), textAlign: "center", marginTop: RFPercentage(2) }} >کھانے سے پہلے کی دعا</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.box}>
            <TouchableOpacity activeOpacity={.8} onPress={() => navigation.navigate('Supplication', { title: "کھانے کے بعد کی دعا", arabic: "الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنَا وَسَقَانَا وَجَعَلَنَا مِنَ الْمُسْلِمِينَ", urdu: "اللہ عزوجل کا شکر ہے جس نے ہمیں کھلایا پلایا اور مسلمانوں میں سے بنایا۔", english: "Thanks to Allah Azzawajal who fed us and made us among Muslims" })}>
              <View style={styles.imgbox}>
                <Image
                  source={require('./images/supplications/khana1.png')}
                  style={{ width: wp("30%"), height: hp("30%"), borderRadius: 5, }}
                  resizeMode="center"
                />
              </View>
              <Text style={{ color: "white", fontSize: RFPercentage(3.5), textAlign: "center", marginTop: RFPercentage(2) }} >کھانے کے بعد کی دعا</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.box}>
            <TouchableOpacity activeOpacity={.8} onPress={() => navigation.navigate('Supplication', { title: "بیت الخلاء میں داخل ہونے سے پہلے کی دعا", arabic: "اَللّٰھُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْخُبُثِ وَالْخَبَائِثِ", urdu: "اے اللہ عزوجل میں ناپاک جنوں (نرو مادہ) سے تیری پناہ مانگتا ہوں۔", english: "O Allah (Almighty) I seek your refuge from impure Jinnat (male and female)" })}>
              <View style={styles.imgbox}>
                <Image
                  source={require('./images/supplications/toilet1.png')}
                  style={{ width: wp("23%"), height: hp("23%"), borderRadius: 5, }}
                  resizeMode="center"
                />
              </View>
              <Text style={{ color: "white", fontSize: RFPercentage(3.5), textAlign: "center", marginTop: RFPercentage(2) }} >بیت الخلاء میں داخل ہونے سے پہلے کی دعا</Text>
            </TouchableOpacity>
          </View>




          <View style={styles.box}>
            <TouchableOpacity activeOpacity={.8} onPress={() => navigation.navigate('Supplication', { title: "بیت الخلاء سے باہر آنے کے بعد کی دعا", arabic: "اَلْحَمْدُ لِلّٰہِ الَّذِي أَذْهَبَ عَنِّي الْأَذَى وَعَافَانِي", urdu: "اللہ عزوجل کا شکر ہے جس نے مجھ سے اذیت دور کی اور مجھے عافیت دی۔", english: "Thanks to Allah Almighty Who removed pain from me and granted me relief." })}>
              <View style={styles.imgbox}>
                <Image
                  source={require('./images/supplications/toilet.png')}
                  style={{ width: wp("23%"), height: hp("23%"), borderRadius: 5, }}
                  resizeMode="center"
                />
              </View>
              <Text style={{ color: "white", fontSize: RFPercentage(3.5), textAlign: "center", marginTop: RFPercentage(2) }} >بیت الخلاء سے باہر آنے کے بعد کی دعا</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.box}>
            <TouchableOpacity activeOpacity={.8} onPress={() => navigation.navigate('Supplication', { title: "سفر اور سواری کی دعا", arabic: "سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَـٰذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ وَإِنَّا إِلَىٰ رَبِّنَا لَمُنقَلِبُونَ", urdu: "اللہ عزوجل کا شکر ہے، پاک ہے وہ جس نے ہمارے لئے اس(سواری کو) مسخر کیا اور ہم اس کو فرمانبردار نہیں بنا سکتے تھے۔", english: "Thanks to Allah Azzawajal. Pure is he who subdude this, other wise we could not make this obedient." })}>
              <View style={styles.imgbox}>
                <Image
                  source={require('./images/supplications/travel.png')}
                  style={{ width: wp("35%"), height: hp("35%"), borderRadius: 5, }}
                  resizeMode="center"
                />
              </View>
              <Text style={{ color: "white", fontSize: RFPercentage(3.5), textAlign: "center", marginTop: RFPercentage(2) }} >سفر اور سواری کی دعا</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.box}>
            <TouchableOpacity activeOpacity={.8} onPress={() => navigation.navigate('Supplication', { title: "بارش کے وقت کی دعا", arabic: "اللَّهُمَّ صَيِّبَاً نَافِعَاً", urdu: "اے اللہ اسے نفع دینے والی بارش بنا دے", english: "O Allah make it plentiful and beneficial" })}>
              <View style={styles.imgbox}>
                <Image
                  source={require('./images/supplications/rain.png')}
                  style={{ width: wp("30%"), height: hp("30%"), borderRadius: 5, }}
                  resizeMode="center"
                />
              </View>
              <Text style={{ color: "white", fontSize: RFPercentage(3.5), textAlign: "center", marginTop: RFPercentage(2) }} >بارش کے وقت کی دعا</Text>
            </TouchableOpacity>
          </View>


          <View style={styles.box}>
            <TouchableOpacity activeOpacity={.8} onPress={() => navigation.navigate('Supplication', { title: "روزہ رکھنے کی نیت", arabic: "وَبِصَوْمِ غَدٍ نَّوَيْتُ مِنْ شَهْرِ رَمَضَانَ.", urdu: "اورمیں نے ماہ رمضان کے کل کے روزے کی نیت کی.", english: "I Intend to keep the fast for month of Ramadan." })}>
              <View style={styles.imgbox}>
                <Image
                  source={require('./images/supplications/roaza.png')}
                  style={{ width: wp("30%"), height: hp("30%"), borderRadius: 5,  }}
                  resizeMode="center"
                />
              </View>
                <Text style={{ color: "white", fontSize: RFPercentage(3.5), textAlign: "center", marginTop: RFPercentage(2) }} >روزہ رکھنے کی نیت</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.box}>
            <TouchableOpacity activeOpacity={.8} onPress={() => navigation.navigate('Supplication', { title: "روزہ افطار کرنے کے بعد کی دعا", arabic: "اَللّٰهُمَّ اِنِّی لَکَ صُمْتُ وَبِکَ اٰمَنْتُ وَعَلَيْکَ تَوَکَّلْتُ وَعَلٰی رِزْقِکَ اَفْطَرْتُ", urdu: "’اے اللہ!میں نے تیری خاطر روزہ رکھا اور تیرے اوپر ایمان لایا اور تجھ پر بھروسہ کیا اورتیرے رزق سے اسے کھول رہا ہوں۔", english: "O Allah! I fasted for you and I believe in you and I put my trust in You and I break my fast with your sustenance." })}>
              <View style={styles.imgbox}>
                <Image
                  source={require('./images/supplications/roza1.png')}
                  style={{ width: wp("30%"), height: hp("30%"), borderRadius: 5, }}
                  resizeMode="center"
                />
              </View>
              <Text style={{ color: "white", fontSize: RFPercentage(3.5), textAlign: "center", marginTop: RFPercentage(2) }} >روزہ افطار کرنے کے بعد کی دعا</Text>
            </TouchableOpacity>
          </View>




          <View style={styles.box}>
            <TouchableOpacity activeOpacity={.8} onPress={() => navigation.navigate('Supplication', { title: "وضو سے پہلے کی دعا", arabic: "بِسْمِ اللّٰہِ وَلْحَمْدُ لِلّٰہِ", urdu: "اللہ عزوجل کے نام سے شروع جو بڑا مہربان اور نہایت رحم والا ہے۔", english: "Allah Azzawajal in the name of the most affectionate, the merciful." })}>
              <View style={styles.imgbox}>
                <Image
                  source={require('./images/supplications/wazo.png')}
                  style={{ width: wp("35%"), height: hp("35%"), borderRadius: 5, }}
                  resizeMode="center"
                />
              </View>
              <Text style={{ color: "white", fontSize: RFPercentage(3.5), textAlign: "center", marginTop: RFPercentage(2) }} >وضو سے پہلے کی دعا</Text>
            </TouchableOpacity>
          </View>


          <View style={styles.box}>
            <TouchableOpacity activeOpacity={.8} onPress={() => navigation.navigate('Supplication', { title: "شبِ قدر کی دعا", arabic: "اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي", urdu: "الٰہی عزوجل تو بہت معاف فرمانے والا ہے، معاف کرنے کو پسند فرماتا ہے پس مجھے معاف فرمادے۔", english: "O Allah Azzawajal You are greatly forgiving, You like forgiving, so forgive me." })}>
              <View style={styles.imgbox}>
                <Image
                  source={require('./images/supplications/night.png')}
                  style={{ width: wp("30%"), height: hp("30%"), borderRadius: 5, }}
                  resizeMode="center"
                />
              </View>
              <Text style={{ color: "white", fontSize: RFPercentage(3.5), textAlign: "center", marginTop: RFPercentage(2) }} >شبِ قدر کی دعا</Text>
            </TouchableOpacity>
          </View>





          <View style={styles.box}>
            <TouchableOpacity activeOpacity={.8} onPress={() => navigation.navigate('Supplication', { title: "مصیبت و پریشانی کے وقت کی دعا", arabic: "إِنَّا لِلهِ وَ إِنَّا إِلَيْهِ رَاجِعُوْن. اَللّٰهُمَّ أْجُرْنِيْ فِيْ مُصِيبَتِيْ وَاخْلُفْ لِيْ خَيْرا مِنْهَا", urdu: "يقینا ہم اللہ ہى كى ملكيت ہیں اور اسى كى طرف لوٹ كر جانے والے ہیں۔اے اللہ مجھے ميرے اس صدمے یا تكليف كا اجر دے اور بدلے ميں مجھے اس سے زيادہ بہتر دے۔", english: "To Allaah we belong and unto Him is our return. O Allaah, recompense me for my affliction and replace it for me with something better." })}>
              <View style={styles.imgbox}>
                <Image
                  source={require('./images/supplications/prshani.png')}
                  style={{ width: wp("35%"), height: hp("35%"), borderRadius: 5, }}
                  resizeMode="center"
                />
              </View>
              <Text style={{ color: "white", fontSize: RFPercentage(3.5), textAlign: "center", marginTop: RFPercentage(2) }} >مصیبت و پریشانی کے وقت کی دعا</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.box}>
            <TouchableOpacity activeOpacity={.8} onPress={() => navigation.navigate('Supplication', { title: "کسی مسلمان کو ہنستا دیکھ کر پڑھنے کی دعا", arabic: "أَضْحَكَ اللّٰہُ سِنَّكَ", urdu: "اللہ عزوجل تجھے ہنستا رکھے۔", english: "May Allah Almighty Keep you smiling." })}>
              <View style={styles.imgbox}>
                <Image
                  source={require('./images/supplications/muskrana.png')}
                  style={{ width: wp("28%"), height: hp("28%"), borderRadius: 5, }}
                  resizeMode="center"
                />
              </View>
              <Text style={{ color: "white", fontSize: RFPercentage(3.5), textAlign: "center", marginTop: RFPercentage(2) }} >کسی مسلمان کو ہنستا دیکھ کر پڑھنے کی دعا</Text>
            </TouchableOpacity>
          </View>


          <View style={styles.box}>
            <TouchableOpacity activeOpacity={.8} onPress={() => navigation.navigate('Supplication', { title: "چھینک آنے کے وقت کی دعا", arabic: "اَلْحَمْدُ لِلّٰہِ", urdu: "تمام تعریفیں اللہ عزوجل کےلئے ہیں۔", english: "All praise onto Allah Almighty." })}>
              <View style={styles.imgbox}>
                <Image
                  source={require('./images/supplications/cheink.png')}
                  style={{ width: wp("35%"), height: hp("35%"), borderRadius: 5, }}
                  resizeMode="center"
                />
              </View>
              <Text style={{ color: "white", fontSize: RFPercentage(3.5), textAlign: "center", marginTop: RFPercentage(2) }} >چھینک آنے کے وقت کی دعا</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.box}>
            <TouchableOpacity activeOpacity={.8} onPress={() => navigation.navigate('Supplication', { title: "بازار میں داخل ہوتے وقت کی دعا", arabic: "لَا إِلٰهَ إِلَّا اللّٰہُ وَحْدَهٗ لَا شَرِيكَ لَهٗ ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ يُحْيِي وَيُمِيتُ وَهُوَ حَيٌّ لَا يَمُوتُ بِيَدِهِ الْخَيْرُ وَهُوَ عَلٰی كُلِّ شَيْءٍ قَدِيرٍ", urdu: "اللہ عزوجل کے سوا کوئی معبود نہین، وہ یکتا ہے، اس کا کوئی شریک نہیں، اس کی بادشاہت ہے اور اسی کے لئے حمد ہے وہی جلاتا اور مارتا ہےوہ (ایسا) زندہ ہے جسے موت نہیں، تمام بھلائیاں اسی کے دست قدرت میں ہیں اور وہ ہر چیز پر قادر ہے۔", english: "There is no deity except Allah Azzawajal he is unique, He has no partner, His is the kingship, and for him is praise, he brings to lie and he kills, He is alive(as such death will not come to him. All virtues are in his hand of power, He can do what ever he wants." })}>
              <View style={styles.imgbox}>
                <Image
                  source={require('./images/supplications/bazar.png')}
                  style={{ width: wp("30%"), height: hp("30%"), borderRadius: 5, }}
                  resizeMode="center"
                />
              </View>
              <Text style={{ color: "white", fontSize: RFPercentage(3.5), textAlign: "center", marginTop: RFPercentage(2) }} >بازار میں داخل ہوتے وقت کی دعا</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.box}>
            <TouchableOpacity activeOpacity={.8} onPress={() => navigation.navigate('Supplication', { title: "دودھ پینے کے بعد کی دعا", arabic: "اَللّٰهُمَّ بَارِكْ لَنَا فِيهِ وَزِدْنَا مِنْهُ", urdu: "یا الٰہی عزوجل ہمارے لئے اس میں برکت دے اور ہمیں اس سے زیادہ عنایت فرما۔", english: "O Allah Azzawajal give us abundance in this and grant us more then this." })}>
              <View style={styles.imgbox}>
                <Image
                  source={require('./images/supplications/milk.jpg')}
                  style={{ width: wp("45%"), height: hp("45%"), borderRadius: 5, }}
                  resizeMode="center"
                />
              </View>
              <Text style={{ color: "white", fontSize: RFPercentage(3.5), textAlign: "center", marginTop: RFPercentage(2) }} >دودھ پینے کے بعد کی دعا</Text>
            </TouchableOpacity>
          </View>


          <View style={styles.box}>
            <TouchableOpacity activeOpacity={.8} onPress={() => navigation.navigate('Supplication', { title: "نیا چاند دیکھتے وقت کی دعا", arabic: "اَللّٰهُمَّ أَهِلَّهُ عَلَيْنَا بِالْيُمْنِ وَالْإِيمَانِ وَالسَّلَامَةِ وَالْإِسْلَامِ وَالتَّوْفِيقِ لِمَا تُحِبُّ وَتَرْضیٰ رَبِّي وَرَبُّكَ اللّٰہُ", urdu: "یا الٰہی عزوجل اس چاند کو ہم پر برکت کے ساتھ اور ایمان و سلامتی اور اسلام اور اس چیز کی توفیق کے ساتھ نکال جس سے تو راضی ہوتا ہے اور پسند کرتا ہے، (اے پہلی رات کے چاند) میرا اور تیرا رب اللہ عزوجل ہے۔", english: "O Allah Azzawajal make this moon come out on us with blessings and with Iman and peace and Islam and make it come out with the ability of that thing which pleases you and that you like, (O moom of the first night my and your Lord is Allah Azzawajal)." })}>
              <View style={styles.imgbox}>
                <Image
                  source={require('./images/supplications/chand.png')}
                  style={{ width: wp("30%"), height: hp("30%"), borderRadius: 5, }}
                  resizeMode="center"
                />
              </View>
              <Text style={{ color: "white", fontSize: RFPercentage(3.5), textAlign: "center", marginTop: RFPercentage(2) }} >نیا چاند دیکھتے وقت کی دعا</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.box}>
            <TouchableOpacity activeOpacity={.8} onPress={() => navigation.navigate('Supplication', { title: "آئنہ دیکھتے وقت کی دعا", arabic: "اَللّٰهُمَّ أَنْتَ حَسَّنْتَ خَلْقِي فَحَسِّنْ خُلُقِي", urdu: "اللہ عزوجل تو نے میری صورت اچھی بنائی تو میری سیرت (اخلاق) بھی اچھی کردے۔", english: "O Allah Azzawajal as you made my outward appearance good make my character good too." })}>
              <View style={styles.imgbox}>
                <Image
                  source={require('./images/supplications/mirror2.png')}
                  style={{ width: wp("30%"), height: hp("30%"), borderRadius: 5, }}
                  resizeMode="center"
                />
              </View>
              <Text style={{ color: "white", fontSize: RFPercentage(3.5), textAlign: "center", marginTop: RFPercentage(2) }} >آئنہ دیکھتے وقت کی دعا</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.box}>
            <TouchableOpacity activeOpacity={.8} onPress={() => navigation.navigate('Supplication', { title: "آنکھ میں درد کی دعا", arabic: "اللَّهُمَّ مَتِّعْنِي بِبَصَرِي وَاجْعَلْهُ الْوَارِثَ مِنِّي وَأَرِنِي فِي الْعَدُوِّ ثَأْرِي وَانْصُرْنِي عَلَى مَنْ ظَلَمَنِي", urdu: "اے اللہ! میری بینائی سے مجھے نفع پہنچا اور میرے مرتے دم تک اسے باقی رکھ اور دشمن میں میر ا نتقام مجھے دکھا اور جس نے مجھ پر ظلم کیا اس کے مقابلے میں میری مدد فرما۔", english: "O Allah grant me benefit from my eyesight and keep it (maintain it) till my death and give me power over my enemies and give me aid against those who oppress me." })}>
              <View style={styles.imgbox}>
                <Image
                  source={require('./images/supplications/ankh.png')}
                  style={{ width: wp("30%"), height: hp("30%"), borderRadius: 5, }}
                  resizeMode="center"
                />
              </View>
              <Text style={{ color: "white", fontSize: RFPercentage(3.5), textAlign: "center", marginTop: RFPercentage(2) }} >آنکھ میں درد کی دعا</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.box}>
            <TouchableOpacity activeOpacity={.8} onPress={() => navigation.navigate('Supplication', { title: "ملاقات کے وقت کی دعا", arabic: "اَلسَّلَامُ عَلَيْكُمُ - وَعَلَيْكُمُ السَّلَامُ", urdu: "تم پر سلامتی ہو۔ اور تم پر بھی سلامتی ہو۔", english: "Peace be upon you And peace be upon you too." })}>
              <View style={styles.imgbox}>
                <Image
                  source={require('./images/supplications/mulaqat.jpg')}
                  style={{ width: wp("28%"), height: hp("28%"), borderRadius: 5, }}
                  resizeMode="center"
                />
              </View>
              <Text style={{ color: "white", fontSize: RFPercentage(3.5), textAlign: "center", marginTop: RFPercentage(2) }} >ملاقات کے وقت کی دعا</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.box}>
            <TouchableOpacity activeOpacity={.8} onPress={() => navigation.navigate('Supplication', { title: "نیا پھل دیکھتے وقت کی دعا", arabic: "اللَّهُمَّ بَارِكْ لَنَا فِي ثَمَرِنَا وَبَارِكْ لَنَا فِي مَدِينَتِنَا وَبَارِكْ لَنَا فِي صَاعِنَا وَبَارِكْ لَنَا فِي مُدِّنَا", urdu: "اے اللہ! ہمارے لئے ہمارے پھل میں برکت فرما اور ہمارے لئے ہمارے شہر میں برکت فرما اور ہمارے لئے ہمارے صاع (ماپنے کے پیمانے) میں برکت فرما اور ہمارے لئے ہمارے مد میں برکت فرما۔", english: "O Allah, grant blessings in the fruit and grant blessings in our city and grant blessings in the weighing of our harvest (flour)." })}>
              <View style={styles.imgbox}>
                <Image
                  source={require('./images/supplications/fruit.png')}
                  style={{ width: wp("35%"), height: hp("35%"), borderRadius: 5, }}
                  resizeMode="center"
                />
              </View>
              <Text style={{ color: "white", fontSize: RFPercentage(3.5), textAlign: "center", marginTop: RFPercentage(2) }} >نیا پھل دیکھتے وقت کی دعا</Text>
            </TouchableOpacity>
          </View>

          {/* <View style={styles.box}>
             <TouchableOpacity activeOpacity={.8} onPress={() => navigation.navigate('Supplication', { title: "", arabic: "", urdu: "", english: "" })}>
              <Image
                source={require('./images/supplications/animate1.jpg')}
                  style={{width: wp("35%"), height: hp("35%"), borderRadius: 5, }}
                resizeMode="center"
              />
            </TouchableOpacity>
            <Text  style={{ color: "white",    fontSize: RFPercentage(3.2), textAlign: "center" }} ></Text>
          </View> */}




        </View>

      </ScrollView>
    </ImageBackground>

  );
}

function Supplicationin({ navigation, route }) {
  console.log(route.params.myValue)
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  Text.defaultProps = Text.defaultProps || {};
  Text.defaultProps.allowFontScaling = false;

  return (
    <ScrollView style={{ backgroundColor: "#881722" }}>

      <ImageBackground
        source={require('./images/background.jpg')}
        style={{ width: windowWidth, height: null }} >
        <View style={styles.SupplicationScreen}>


          <View style={styles.header}>
            <ImageBackground resizeMode="center"
              source={require('./images/title.png')}
              style={styles.titleImage} >

              <Text style={styles.title}>{route.params.title}</Text>
            </ImageBackground>
        
          </View>
          <Text style={styles.arabic}>{route.params.arabic}</Text>
          <Text style={styles.urdu}>{route.params.urdu}</Text>
          <Text style={styles.english}>{route.params.english}</Text>
        </View>
      </ImageBackground>
    </ScrollView>

  );
}





const Tab = createBottomTabNavigator();

function HomeTabs() {
  Text.defaultProps = Text.defaultProps || {};
  Text.defaultProps.allowFontScaling = false;

  // setTimeout(() => {

  // }, 0);


  return (

    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {

          let iconName;


          if (route.name === 'Home') {
            iconName = focused
              ? 'ios-home'
              : 'ios-home';


          } else if (route.name === 'Supplications') {
            iconName = focused ? 'ios-book' : 'md-book';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'brown',
        inactiveTintColor: 'gray',
        // style: {
        //   backgroundColor: 'brown',
        // }
      }}
    >

      <Tab.Screen name="Home" component={FeedScreen} />
      <Tab.Screen name="Supplications" component={ProfileScreen} />
    </Tab.Navigator>

  );
}

const RootStack = createStackNavigator();

export default function App() {
  Text.defaultProps = Text.defaultProps || {};
  Text.defaultProps.allowFontScaling = false;

  setTimeout(() => {
    SplashScreen.hide();

  }, 0);

  useEffect(() => {
    //-----------------   GetPermissionForLoctaion START   -------------
    async function requestCameraPermission() {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Permission',
            message: 'You must to accept this to make it work.'
          }
        )
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('Location permission accepted.')
        } else {
          console.log("Location permission denied")
        }
      } catch (err) {
        console.warn(err)
      }

    }
    requestCameraPermission()
    //------------   GetPermissionForLoctaion END  ---------------------

  });

  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="Easy Islam" component={HomeTabs} options={{
          headerStyle: {
            backgroundColor: '#881722',

          },
          headerTintColor: 'white'
        }} />
        <RootStack.Screen name="Prayer Times" component={PrayerTime} options={{
          headerStyle: {
            backgroundColor: '#881722',

          },
          headerTintColor: 'white'
        }} />
        <RootStack.Screen name="Ushr" component={Ushr} options={{
          headerStyle: {
            backgroundColor: '#881722',

          },
          headerTintColor: 'white'
        }} />
        <RootStack.Screen name="Qibla Finder" component={qiblaDirection} options={{
          headerStyle: {
            backgroundColor: '#881722',

          },
          headerTintColor: 'white'
        }} />
        <RootStack.Screen name="Tasbeeh" component={Tasbeeh} options={{
          headerStyle: {
            backgroundColor: '#881722',

          },
          headerTintColor: 'white'
        }} />
        <RootStack.Screen name="Namaz e Janaza" component={namazEJanaza} options={{
          headerStyle: {
            backgroundColor: '#881722',

          },
          headerTintColor: 'white'
        }} />
        <RootStack.Screen name="Namaz" component={namazEJanaza2} options={{
          headerStyle: {
            backgroundColor: '#881722',

          },
          headerTintColor: 'white'
        }} />
        <RootStack.Screen name="Zakat" component={Zakat} options={{
          headerStyle: {
            backgroundColor: '#881722',

          },
          headerTintColor: 'white'
        }} />
        <RootStack.Screen name="Asma ul Husna" component={AsmaUlHusna} options={{
          headerStyle: {
            backgroundColor: '#881722',

          },
          headerTintColor: 'white'
        }} />
        <RootStack.Screen name="Supplication" component={Supplicationin} options={{
          headerStyle: {
            backgroundColor: '#881722',

          },
          headerTintColor: 'white'
        }} />
        <RootStack.Screen name="Kalimas" component={kalimas} options={{
          headerStyle: {
            backgroundColor: '#881722',

          },
          headerTintColor: 'white'
        }} />
        <RootStack.Screen name="Dua e Qanoot" component={DuaEQunoot} options={{
          headerStyle: {
            backgroundColor: '#881722',

          },
          headerTintColor: 'white'
        }} />
        {/* <RootStack.Screen name="NAMAZ" component={Namaz} /> */}
        <RootStack.Screen name="kalima" component={Kalima} options={{
          headerStyle: {
            backgroundColor: '#881722',

          },
          headerTintColor: 'white'
        }} />


        {/* <RootStack.Screen name="kalima" component={Kalima}   options={{ headerStyle: {
              backgroundColor: '#6e0a18'
           } }} /> */}
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  boxs: {
    height: hp("22%"),
    width: wp("42%"),
    // backgroundColor: "white",
    fontSize: RFPercentage(3.2),
    margin: RFPercentage(1.6),
    borderRadius: 10,
    borderColor:"white",
    borderWidth:3,
    paddingTop:RFPercentage(1),
    paddingBottom:RFPercentage(1.5),

    //  boxShadow: "0 0 10",
    // shadowColor: "#fff",
    // shadowOffset: {
    //   width: wp("0%"),
    //   height: hp("5%"),
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
    // elevation: 10,
    
  
    // borderWidth:3,
    // borderColor:"white",

    display:"flex",
    alignContent:"center",
    justifyContent:"space-between",
    alignItems:"center",
   



  },
  boxsText:{
    fontSize: RFPercentage(3.2),
    // marginTop: RFPercentage(1),
    color:"white",
    textAlign: "center",
   
  },
  box: {
    // height: 145,
    width: wp("40%"),
    // backgroundColor: "white",
    //    fontSize: RFPercentage(3.2),
    // margin: 10,
    marginLeft: RFPercentage(1.6),
    marginRight: RFPercentage(1.6),
    marginBottom: RFPercentage(1.6),
    marginTop: RFPercentage(1.6),
    borderRadius: 10,
    //  boxShadow: "0 0 10",
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
    // elevation: 5,
    // textAlign: "center",
    // padding: 5,

  },
  boxGrid1: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    margin: RFPercentage(1),
    justifyContent: "center",
    

  },
  boxGrid2: {
    display: "flex",
    flexDirection: "row-reverse",
    flexWrap: "wrap",
    margin: RFPercentage(1),
    justifyContent: "center",
    // paddingBottom:RFPercentage(5),

  },
  SupplicationScreen: {
    // display: "flex",
    // margin: 5,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    // textAlign:"center",

  },
  title: {
    color: "yellow",
    fontSize: RFPercentage(3.5),
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
  imgbox: {
    borderRadius: 10,
    // backgroundColor: "white",
    borderColor: "white",
    borderWidth: 3,
    width: wp("40%"),
    height: hp("21%"),
    display: "flex",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center"
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
