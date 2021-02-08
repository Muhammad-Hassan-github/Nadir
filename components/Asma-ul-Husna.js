import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, View, ScrollView, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { Dimensions } from 'react-native';
import img1 from "../images/99Names/1.jpg"
import img2 from "../images/99Names/2.jpg"
import img3 from "../images/99Names/3.jpg"
import img4 from "../images/99Names/4.jpg"
import img5 from "../images/99Names/5.jpg"
import img6 from "../images/99Names/6.jpg"
import img7 from "../images/99Names/7.jpg"
import img8 from "../images/99Names/8.jpg"
import img9 from "../images/99Names/9.jpg"
import img10 from "../images/99Names/10.jpg"
import img11 from "../images/99Names/11.jpg"
import img12 from "../images/99Names/12.jpg"
import img13 from "../images/99Names/13.jpg"
import img14 from "../images/99Names/14.jpg"
import img15 from "../images/99Names/15.jpg"
import img16 from "../images/99Names/16.jpg"
import img17 from "../images/99Names/17.jpg"
import img18 from "../images/99Names/18.jpg"
import img19 from "../images/99Names/19.jpg"
import img20 from "../images/99Names/20.jpg"
import img21 from "../images/99Names/21.jpg"
import img22 from "../images/99Names/22.jpg"
import img23 from "../images/99Names/23.jpg"
import img24 from "../images/99Names/24.jpg"
import img25 from "../images/99Names/25.jpg"
import img26 from "../images/99Names/26.jpg"
import img27 from "../images/99Names/27.jpg"
import img28 from "../images/99Names/28.jpg"
import img29 from "../images/99Names/29.jpg"
import img30 from "../images/99Names/30.jpg"
import img31 from "../images/99Names/31.jpg"
import img32 from "../images/99Names/32.jpg"
import img33 from "../images/99Names/33.jpg"
import img34 from "../images/99Names/34.jpg"
import img35 from "../images/99Names/35.jpg"
import img36 from "../images/99Names/36.jpg"
import img37 from "../images/99Names/37.jpg"
import img38 from "../images/99Names/38.jpg"
import img39 from "../images/99Names/39.jpg"
import img40 from "../images/99Names/40.jpg"
import img41 from "../images/99Names/41.jpg"
import img42 from "../images/99Names/42.jpg"
import img43 from "../images/99Names/43.jpg"
import img44 from "../images/99Names/44.jpg"
import img45 from "../images/99Names/45.jpg"
import img46 from "../images/99Names/46.jpg"
import img47 from "../images/99Names/47.jpg"
import img48 from "../images/99Names/48.jpg"
import img49 from "../images/99Names/49.jpg"
import img50 from "../images/99Names/50.jpg"
import img51 from "../images/99Names/51.jpg"
import img52 from "../images/99Names/52.jpg"
import img53 from "../images/99Names/53.jpg"
import img54 from "../images/99Names/54.jpg"
import img55 from "../images/99Names/55.jpg"
import img56 from "../images/99Names/56.jpg"
import img57 from "../images/99Names/57.jpg"
import img58 from "../images/99Names/58.jpg"
import img59 from "../images/99Names/59.jpg"
import img60 from "../images/99Names/60.jpg"
import img61 from "../images/99Names/61.jpg"
import img62 from "../images/99Names/62.jpg"
import img63 from "../images/99Names/63.jpg"
import img64 from "../images/99Names/64.jpg"
import img65 from "../images/99Names/65.jpg"
import img66 from "../images/99Names/66.jpg"
import img67 from "../images/99Names/67.jpg"
import img68 from "../images/99Names/69.jpg"
import img69 from "../images/99Names/69.jpg"
import img70 from "../images/99Names/70.jpg"
import img71 from "../images/99Names/71.jpg"
import img72 from "../images/99Names/72.jpg"
import img73 from "../images/99Names/73.jpg"
import img74 from "../images/99Names/74.jpg"
import img75 from "../images/99Names/75.jpg"
import img76 from "../images/99Names/76.jpg"
import img77 from "../images/99Names/77.jpg"
import img78 from "../images/99Names/78.jpg"
import img79 from "../images/99Names/79.jpg"
import img80 from "../images/99Names/80.jpg"
import img81 from "../images/99Names/81.jpg"
import img82 from "../images/99Names/82.jpg"
import img83 from "../images/99Names/83.jpg"
import img84 from "../images/99Names/84.jpg"
import img85 from "../images/99Names/85.jpg"
import img86 from "../images/99Names/86.jpg"
import img87 from "../images/99Names/87.jpg"
import img88 from "../images/99Names/88.jpg"
import img89 from "../images/99Names/89.jpg"
import img90 from "../images/99Names/90.jpg"
import img91 from "../images/99Names/91.jpg"
import img92 from "../images/99Names/92.jpg"
import img93 from "../images/99Names/93.jpg"
import img94 from "../images/99Names/94.jpg"
import img95 from "../images/99Names/95.jpg"
import img96 from "../images/99Names/96.jpg"
import img97 from "../images/99Names/97.jpg"
import img98 from "../images/99Names/98.jpg"
import img99 from "../images/99Names/99.jpg"

export function AsmaUlHusna() {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const [imgSrc, setImgSrc] = useState(img1);
  const ary = [img1, img2, img3, img4, img5, img6, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, img23, img24, img25, img26, img27, img28, img29, img30, img31, img32, img33, img34, img35, img36, img37, img38, img39, img39, img40, img41, img42, img43, img44, img45, img46, img47, img48, img49, img50, img51, img52, img53, img54, img55, img56, img57, img58, img59, img60, img61, img62, img63, img64, img65, img66, img67, img68, img69, img70, img71, img72, img73, img74, img75, img76, img77, img78, img79, img80, img81, img82, img83, img84, img85, img86, img87, img88, img89, img90, img91, img92, img93, img94, img95, , img96, img97, img98, img99]
  return (
    <View>

      <View>
        <ScrollView style={{backgroundColor:'brown'}} horizontal automaticallyAdjustContentInsets={false}>

          {ary.map((value, key) => {

            return (

              <TouchableOpacity onPress={() => { setImgSrc(value) }} activeOpacity={.8}>
                <Image key={key}
                  style={styles.stretch}
                  source={value}
                />
              </TouchableOpacity>
            )
          })}
        </ScrollView>
      </View>
      <View>
        <Image
          style={{ width: windowWidth, height: windowHeight - 185 }}
          resizeMode="stretch"
          source={imgSrc}
        />
      </View>

    </View>
  );

};


const styles = StyleSheet.create({

  stretch: {
    width: 100,
    height: 100,
    margin: 2,
    backgroundColor:"#881722",
    marginBottom: 3,
    borderColor:"white",
    borderWidth:2

  },

});



