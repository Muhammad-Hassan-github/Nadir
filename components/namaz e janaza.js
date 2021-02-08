import React, { useState, useEffect } from 'react';
import { Image ,Dimensions } from 'react-native';
import { Container,Button, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';
import GallerySwiper from "react-native-gallery-swiper";

import Orientation from 'react-native-orientation-locker';

export function namazEJanaza() {

  // const [orientation, setOrientation] = useState("portrait");
  // useEffect(() => {
  //   Orientation.lockToPortrait();
  //   const dim = Dimensions.get('screen');
  //   if(dim.height >= dim.width){
  //      setOrientation("portrait")
  //     }
  //     else{
        
  //       setOrientation("landscape")
  //     }
  //   },[]);

  // Dimensions.addEventListener('change', () => {
  //   (orientation=="landscape")? setOrientation("portrait") :  setOrientation("landscape")
  // });
  
  return (
//     (orientation=="landscape")?  <GallerySwiper 
          
//     resizeMode="center"
//      images={[ 
//          { source: require("../images/namaz-e-janaza/1.jpg"),
//              dimensions: { width: 1080, height:1920}
//               },
//              { source: require("../images/namaz-e-janaza/2.jpg"),
//              dimensions: { width: 1080, height: 1920 } },
//              { source: require("../images/namaz-e-janaza/3.jpg"),
//              dimensions: { width: 1080, height: 1920 } },
//              { source: require("../images/namaz-e-janaza/4.jpg"),
//              dimensions: { width: 1080, height: 1920 } },
//              { source: require("../images/namaz-e-janaza/5.jpg"),
//              dimensions: { width: 1080, height: 1920 } },
//              { source: require("../images/namaz-e-janaza/6.jpg"),
//              dimensions: { width: 1080, height: 1920 } },
//              { source: require("../images/namaz-e-janaza/7.jpg"),
//              dimensions: { width: 1080, height: 1920 } },
//              { source: require("../images/namaz-e-janaza/8.jpg"),
//              dimensions: { width: 1080, height: 1920 } },
//              { source: require("../images/namaz-e-janaza/9.jpg"),
//              dimensions: { width: 1080, height: 1920 } },
//              { source: require("../images/namaz-e-janaza/10.jpg"),
//              dimensions: { width: 1080, height: 1920 } },
//              { source: require("../images/namaz-e-janaza/11.jpg"),
//              dimensions: { width: 1080, height: 1920 } },
//              { source: require("../images/namaz-e-janaza/12.jpg"),
//              dimensions: { width: 1080, height: 1920 } },
//              { source: require("../images/namaz-e-janaza/13.jpg"),
//              dimensions: { width: 1080, height: 1920 } },
//              { source: require("../images/namaz-e-janaza/14.jpg"),
//              dimensions: { width: 1080, height: 1920 } },
//              { source: require("../images/namaz-e-janaza/15.jpg"),
//              dimensions: { width: 1080, height: 1920 } },
//              { source: require("../images/namaz-e-janaza/16.jpg"),
//              dimensions: { width: 1080, height: 1920 } },
//              { source: require("../images/namaz-e-janaza/17.jpg"),
//              dimensions: { width: 1080, height: 1920 } },
//              { source: require("../images/namaz-e-janaza/18.jpg"),
//              dimensions: { width: 1080, height: 1920 } },
//              { source: require("../images/namaz-e-janaza/19.jpg"),
//              dimensions: { width: 1080, height: 1920 } },
//              { source: require("../images/namaz-e-janaza/20.jpg"),
//              dimensions: { width: 1080, height: 1920 } },
//              { source: require("../images/namaz-e-janaza/21.jpg"),
//              dimensions: { width: 1080, height: 1920 } },
//              { source: require("../images/namaz-e-janaza/22.jpg"),
//              dimensions: { width: 1080, height: 1920 } },
//              { source: require("../images/namaz-e-janaza/23.jpg"),
//              dimensions: { width: 1080, height: 1920 } },

        
        
//      ]}
//      sensitiveScroll={false}
//      initialNumToRender={2}
//  />


//         :

          <GallerySwiper 
          
             resizeMode="cover"
             initialPage={23}
             initialNumToRender={23}
         
             
              images={[ 
                  { source: require("../images/namaz-e-janaza/23.jpg"),
                      dimensions: { width: 1080, height:1920}
                       },
                      { source: require("../images/namaz-e-janaza/22.jpg"),
                      dimensions: { width: 1080, height: 1920 } },
                      { source: require("../images/namaz-e-janaza/21.jpg"),
                      dimensions: { width: 1080, height: 1920 } },
                      { source: require("../images/namaz-e-janaza/20.jpg"),
                      dimensions: { width: 1080, height: 1920 } },
                      { source: require("../images/namaz-e-janaza/19.jpg"),
                      dimensions: { width: 1080, height: 1920 } },
                      { source: require("../images/namaz-e-janaza/18.jpg"),
                      dimensions: { width: 1080, height: 1920 } },
                      { source: require("../images/namaz-e-janaza/17.jpg"),
                      dimensions: { width: 1080, height: 1920 } },
                      { source: require("../images/namaz-e-janaza/16.jpg"),
                      dimensions: { width: 1080, height: 1920 } },
                      { source: require("../images/namaz-e-janaza/15.jpg"),
                      dimensions: { width: 1080, height: 1920 } },
                      { source: require("../images/namaz-e-janaza/14.jpg"),
                      dimensions: { width: 1080, height: 1920 } },
                      { source: require("../images/namaz-e-janaza/13.jpg"),
                      dimensions: { width: 1080, height: 1920 } },
                      { source: require("../images/namaz-e-janaza/12.jpg"),
                      dimensions: { width: 1080, height: 1920 } },
                      { source: require("../images/namaz-e-janaza/11.jpg"),
                      dimensions: { width: 1080, height: 1920 } },
                      { source: require("../images/namaz-e-janaza/10.jpg"),
                      dimensions: { width: 1080, height: 1920 } },
                      { source: require("../images/namaz-e-janaza/9.jpg"),
                      dimensions: { width: 1080, height: 1920 } },
                      { source: require("../images/namaz-e-janaza/8.jpg"),
                      dimensions: { width: 1080, height: 1920 } },
                      { source: require("../images/namaz-e-janaza/7.jpg"),
                      dimensions: { width: 1080, height: 1920 } },
                      { source: require("../images/namaz-e-janaza/6.jpg"),
                      dimensions: { width: 1080, height: 1920 } },
                      { source: require("../images/namaz-e-janaza/5.jpg"),
                      dimensions: { width: 1080, height: 1920 } },
                      { source: require("../images/namaz-e-janaza/4.jpg"),
                      dimensions: { width: 1080, height: 1920 } },
                      { source: require("../images/namaz-e-janaza/3.jpg"),
                      dimensions: { width: 1080, height: 1920 } },
                      { source: require("../images/namaz-e-janaza/2.jpg"),
                      dimensions: { width: 1080, height: 1920 } },
                      { source: require("../images/namaz-e-janaza/1.jpg"),
                      dimensions: { width: 1080, height: 1920 } },

                 
                 
              ]}
             
          />
      );
  }
