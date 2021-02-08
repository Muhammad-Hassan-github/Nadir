import React, { useState, useEffect } from 'react';
import { Image, Dimensions, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';
import { Container, Button, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';
import GallerySwiper from "react-native-gallery-swiper";
import { ScrollView } from 'react-native-gesture-handler';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export function kalimas({ navigation, route }) {
  
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  Text.defaultProps = Text.defaultProps || {};
  Text.defaultProps.allowFontScaling = false;

  return (
    
    <ImageBackground
        source={require('../images/background.jpg')}
        style={{ width: windowWidth, height: windowHeight }} >
          <ScrollView >

      <View style={styles.boxGrid2} >

        <View style={styles.box}>
          <TouchableOpacity style={styles.titleBox} style={styles.imgbox} activeOpacity={.8} onPress={() => navigation.navigate('kalima', { title: "First Kalima (Tayyabah)", arabic: "لآ اِلَهَ اِلّا اللّهُ مُحَمَّدٌ رَسُوُل اللّهِ", urdu: "اللہ کے سوا کوئی معبود نہیں ، محمد اللہ کے رسول ہیں", english: "There is no God but Allah Muhammad is the Messenger of Allah." })}>
            <Image
              source={require('../images/counting/1.png')}
              style={{ width: wp("30%"), height: hp("30%"), borderRadius: 5, }}
              resizeMode="center"
              
            />
          </TouchableOpacity>
          {/* <Text style={{ color: "white", fontSize: RFPercentage(3.2), textAlign: "center" }} >مسجد میں داخل ہونے کی دعا</Text> */}
          {/* <Text style={styles.title}>First Kalima (Tayyabah)</Text> */}
        </View>



        <View style={styles.box}>
        <TouchableOpacity style={styles.titleBox} style={styles.imgbox} activeOpacity={.8} onPress={() => navigation.navigate('kalima', { title: "Second Kalima (Shahaadat)", arabic: "اشْهَدُ انْ لّآ اِلهَ اِلَّا اللّهُ وَحْدَه لَا شَرِيْكَ لَه، وَ اَشْهَدُ اَنَّ مُحَمَّدً اعَبْدُهوَرَسُولُه", urdu: "میں گواہی دیتا ہوں کہ الله کے سواکوئی معبود نہیں وہ اکیلا ہے اس کا کوئی شریک نہیں اور میں گواہی دیتا ہوں کہ محمّد  اس کے بندے اور رسول ہیں۔", english: "I bear witness that no-one is worthy of worship but Allah, the One alone, without partner, and I bear witness that Muhammad is His servant and Messenger." })}>
            <Image
              source={require('../images/counting/2.png')}
              style={{ width: wp("25%"), height: hp("25%"), borderRadius: 5, }}
              resizeMode="center"
            />
          </TouchableOpacity>
          {/* <Text style={{ color: "white", fontSize: RFPercentage(3.2), textAlign: "center" }} >مسجد میں داخل ہونے کی دعا</Text> */}
            {/* <Text style={styles.title}>Third Kalima (Tumjeed)</Text> */}
        </View>

     


        <View style={styles.box}>
        <TouchableOpacity style={styles.titleBox} style={styles.imgbox} activeOpacity={.8} onPress={() => navigation.navigate('kalima', { title: "Third Kalima (Tumjeed)", arabic: "سُبْحَان الِلّه وَ الْحَمْدُ   لِلّهِ وَ لآ اِلهَ اِلّا اللّهُ، وَ اللّهُ اَكْبَرُ وَلا حَوْلَ وَلاَ قُوَّةَ  اِلَّا بِاللّهِ الْعَلِىّ الْعَظِيْم  ", urdu: "الله پاک ہے اور تمام تعریفیں الله ہی کے لئےہےاورالله کے سواکوئی معبود نہیں اور الله بہت بڑاہے اور گناہوں سے بچنے کی طاقت اور نیک کام کرنے کی قوت الله ہی کی طرف سے ہے جو عالیشان عظمت والا ہے۔", english: "Glory be to Allah and Praise to Allah, and there is no God But Allah, and Allah is the Greatest. And there is no Might or Power except with Allah." })}>
           
            <Image
              source={require('../images/counting/3.png')}
              style={{ width: wp("25%"), height: hp("25%"), borderRadius: 5, }}
              resizeMode="center"
            />
          </TouchableOpacity>
          {/* <Text style={{ color: "white", fontSize: RFPercentage(3.2), textAlign: "center" }} >مسجد میں داخل ہونے کی دعا</Text> */}
            {/* <Text style={styles.title}>Second Kalima (Shahaadat)</Text> */}
        </View>



        <View style={styles.box}>
        <TouchableOpacity style={styles.titleBox} style={styles.imgbox} activeOpacity={.8} onPress={() => navigation.navigate('kalima', { title: "Fourth Kalima (Tauhid)", arabic: "لا الهَ اِلَّا اللّهُ وَحْدَهُ لا شَرِيْكَ لَهْ، لَهُ الْمُلْكُ وَ لَهُ الْحَمْدُ يُحْى وَ يُمِيْتُ وَ هُوَحَىُّ لَّا يَمُوْتُ اَبَدًا اَبَدًا ط ذُو الْجَلَالِ وَ الْاِكْرَامِ ط بِيَدِهِ الْخَيْرُ ط وَهُوَ عَلى كُلِّ شَئ ٍ قَدِيْرٌ ط", urdu: "الله کےسواکوئی معبودنہیں وہ اکیلاہے اس کا کوئی شریک نہیں اسی کی بادشاہی ہے اوراسی کے لئے تمام تعریفیں ہیں وہ زندہ کرتاہے اور وہی مارتا ہے اور وہ ہمشہ کے لئے زندہ ہے جو مرے گانہیں عظمت اور بزرگی والا ہے بہتری اسی کے ہاتھ میں ہے اور وہ ہر چیز پر قادر ہے۔", english: "(There is) none worthy of worship except Allah. He is only One. (There is) no partners for Him. For Him (is) the Kingdom. And for Him (is) the Praise. He gives life and acuses death. And He (is) Alive. He will not die, never, ever. Possessor of Majesty and Reverence. In His hand (is) the goodness. And He (is) the goodness. And He (is) on everything powerful." })}>
           
            <Image
              source={require('../images/counting/4.png')}
              style={{ width: wp("25%"), height: hp("25%"), borderRadius: 5, }}
              resizeMode="center"
            />
          </TouchableOpacity>
          {/* <Text style={{ color: "white", fontSize: RFPercentage(3.2), textAlign: "center" }} >مسجد میں داخل ہونے کی دعا</Text> */}
            {/* <Text style={styles.title}>Second Kalima (Shahaadat)</Text> */}
        </View>


        <View style={styles.box}>
        <TouchableOpacity style={styles.titleBox} style={styles.imgbox} activeOpacity={.8} onPress={() => navigation.navigate('kalima', { title: "Fifth Kalima (Astaghfar)", arabic: "اسْتَغْفِرُ اللّهَ رَبِّىْ مِنْ كُلِّ ذَنْبٍ اَذْنَبْتُه عَمَدًا اَوْ خَطَاً سِرًّا اَوْ عَلَانِيَةً وَاَتُوْبُ اِلَيْهِ مِنْ الذَّنْبِ الَّذِىْ اَعْلَمُ وَ مِنْ الذَّنْبِ الَّذِىْ لا اَعْلَمُ اِنَّكَ اَنْتَ عَلَّامُ الغُيُوْبِ وَ سَتَّارُ الْعُيُوْبِ و َغَفَّارُ الذُّنُوْبِ وَ لا حَوْلَ وَلا قُوَّةَ اِلَّا بِاللّهِ الْعَلِىِّ العَظِيْم", urdu: "میں الله سے معافی مانگتا ہوں جو میرا پروردگار ہےہرگناہ سے جو میں نے کیا جان بوجھ کر یا بھول کر ، کھلم کھلا اور میں توبہ کرتا ہوں اُس کے حضور میں اُس گناہ سے جو مجھے معلوم ہے اور اُس گناہ سے جو مجھے معلوم نہیں بے شک تو عیبوں کو جاننے والا اور عیبوں کو چھپانے والا ہے اور گناہوں کا بخشنے والا ہے گناہوں سے بچنے کی طاقت اور نیک کام کرنے کی قوت الله ہی کی طرف سےہےجو عالیشان اورعظمت والا ہے", english: "I seek forgiveness from Allah, my Lord, from every sin I committed knowingly or unknowingly, secretly or openly, and I turn towards Him from the sin that I know and from the sin that I do not know. Certainly You, You (are) the knower of the hidden things and the Concealer (of) the mistakes and the Forgiver (of) the sins. And (there is) no power and no strength except from Allah, the Most High, the Most Great." })}>
           
            <Image
              source={require('../images/counting/5.png')}
              style={{ width: wp("25%"), height: hp("25%"), borderRadius: 5, }}
              resizeMode="center"
            />
          </TouchableOpacity>
          {/* <Text style={{ color: "white", fontSize: RFPercentage(3.2), textAlign: "center" }} >مسجد میں داخل ہونے کی دعا</Text> */}
            {/* <Text style={styles.title}>Second Kalima (Shahaadat)</Text> */}
        </View>

        <View style={styles.box}>
        <TouchableOpacity style={styles.imgbox} activeOpacity={.8} onPress={() => navigation.navigate('kalima', { title: "Sixth Kalima (Rud-A-Kuffer)", arabic: "اَللّٰهُمَّ اِنِّیْٓ اَعُوْذُ بِكَ مِنْ اَنْ اُشْرِكَ بِكَ شَيْئًا وَّاَنَآ اَعْلَمُ بِهٖ وَ اَسْتَغْفِرُكَ لِمَا لَآ اَعْلَمُ بِهٖ تُبْتُ عَنْهُ وَ تَبَرَّأْتُ مِنَ الْكُفْرِ وَ الشِّرْكِ وَ الْكِذْبِ وَ الْغِيْبَةِ وَ الْبِدْعَةِ وَ النَّمِيْمَةِ وَ الْفَوَاحِشِ وَ الْبُهْتَانِ وَ الْمَعَاصِىْ كُلِِّهَا وَ اَسْلَمْتُ وَ اَقُوْلُ لَآ اِلٰهَ اِلَّا اللهُ مُحَمَّدٌ رَّسُوْلُ اللهِؕ‎", urdu: "الٰہی میں تیری پناہ مانگتا ہوں اس بات سے کہ میں کسی چیزکو تیرا شریک بناوں اور مجھے اس کا علم ہو اور میں معافی مانگتا ہوں تجھ سے اس گناہ سے جس کا علم مجھے نہیں میں نے اس سے توبہ کی اور بیزار ہوا کفر سے اور شرک سے اور جھوٹ سے اور غیبت سے اور بدعت سے اور چغلی سے اور بے حیائی کے کاموں سے اور تہمت لگانے سے اور ہر قسم کی نافرمانیوں سے اور میں کہتا ہوں کہ الله کے سوا کوئی معبود نہیں حضرت محمد کے رسول ہیں", english: "O Allah! Certainly I seek protection with You from, that I associate partner with You anything and I know it. And I seek forgiveness from You for that I do not know it. I repended from it and I made myself free from disbelief and polytheism and the falsehood and the back-biting and the innovation and the tell-tales and the bad deeds and the blame and the disobedience, all of them. And I submit and I say (there is) none worthy of worship except Allah, Muhammad is the Messenger of Allah." })}>
           
            <Image
              source={require('../images/counting/6.png')}
              style={{ width: wp("25%"), height: hp("25%"), borderRadius: 5, }}
              resizeMode="center"
            />
          </TouchableOpacity>
          {/* <Text style={{ color: "white", fontSize: RFPercentage(3.2), textAlign: "center" }} >مسجد میں داخل ہونے کی دعا</Text> */}
            {/* <Text style={styles.title}>Second Kalima (Shahaadat)</Text> */}
        </View>
       
      






      </View>
    </ScrollView>
      </ImageBackground>


  )
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  
  boxs: {
    height: hp("22%"),
    width: wp("42%"),
    backgroundColor: "white",
    fontSize: RFPercentage(3.2),
    margin: RFPercentage(1.6),
    borderRadius: 10,
    //  boxShadow: "0 0 10",
    shadowColor: "#000",
    shadowOffset: {
      width: wp("0%"),
      height: hp("5%"),
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    textAlign: "center",

    padding: RFPercentage(1),



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
    flexDirection: "row",
    flexWrap: "wrap",
    margin: RFPercentage(1),
    justifyContent: "center",
  alignContent:"center",
  alignItems:"center",
  marginTop:RFPercentage(8),


  },
  duaScreen: {
    // display: "flex",
    // margin: 5,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    // textAlign:"center",

  },
  title: {
    color: "white",
    fontSize: RFPercentage(4.5),
    margin: RFPercentage(5),
    textAlign: "center",
  },
  urdu: {
    color: "white",
    fontSize: RFPercentage(3.5),
    margin: RFPercentage(4),
    textAlign: "center",

  },
  arabic: {
    color: "white",
    fontSize: RFPercentage(5),
    margin: RFPercentage(4),
    fontWeight: "bold",
    textAlign: "center",



  },
  english: {
    color: "white",
    fontSize: RFPercentage(3.1),
    margin: RFPercentage(4),
    fontWeight: "bold",
    textAlign: "center",

  },
  imgbox: {
    borderRadius: 10,
    // backgroundColor: "white",
    width: wp("40%"),
    height: hp("21%"),
    display: "flex",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    borderWidth:3,
    borderColor:"white"
  },





});
