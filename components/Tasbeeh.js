
import { View, Text, Button, Image, Dimensions, ImageBackground, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import image1 from "../images/01.jpg"
import image2 from "../images/03.png"
import image3 from "../images/02.png"
import React, { useState, useEffect } from 'react';
import { AsyncStorage } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";




export function Tasbeeh({ route, navigation, }) {
    
        const [count, setCount] = useState(0);
        const [limit, setLimit] = useState(33);
        const [volume, setVolume] = useState('volume-high');
        const [totalCount, setTotalCount] = useState(0);
        const [opacity, set0pacity] = useState(0);
        const [imageNumber, setImageNumber] = useState(1);
        const [clickHere, setClickhere] = useState(true);


    Text.defaultProps = Text.defaultProps || {};
    Text.defaultProps.allowFontScaling = false;

    useEffect(() => {
        let localStorageFn = async () => {
            let value = await AsyncStorage.getItem('TasbeehCounter');
            setTotalCount(JSON.parse(value))
        }
        localStorageFn();
        
    });

    useEffect(() => {
   
       
    },[]);



    let changeLimit = async () => {

        limit === 99 ? setLimit(33) : setLimit(99)
        setCount(0)
        set0pacity(0)
        setImageNumber(0)
        console.log(volume)
        if (volume == "volume-high") {
            route.params.resetSound.play((success) => {
                if (!success) {
                    console.log('Sound did not play4')
                }
            })
        }
    }
    let volumeFn = async () => {
        volume === 'volume-high' ? setVolume('volume-off') : setVolume('volume-high')

        if (volume !== "volume-high") {
            route.params.resetSound.play((success) => {
                if (!success) {
                    console.log('Sound did not play1')
                }
            })

        }

    }
    let resetFn = async () => {
        setCount(0)
        setLimit(33)
        set0pacity(0)
        setImageNumber(0)
        setTotalCount(0)
        if (volume == "volume-high") {
            route.params.resetSound.play((success) => {
                if (!success) {
                    console.log('Sound did not play2')
                }
            })

        }
        await AsyncStorage.setItem('TasbeehCounter', JSON.stringify(0));


    }
    let tabeehFn = async () => {
        setClickhere(false)
        if (volume == "volume-high") {
            route.params.clickSound.play((success) => {
                if (!success) {
                    console.log('Sound did not play3')
                }
            })
            await AsyncStorage.setItem('TasbeehCounter', JSON.stringify(totalCount + 1));
            const value = await AsyncStorage.getItem('TasbeehCounter');
            console.log(JSON.parse(value));
            // console.log("total",totalCount)        
        }

        setTotalCount(totalCount + 1)
        if (limit == 33) {
            if (count < 33) {
                setCount(count + 1);
                set0pacity(opacity + 0.03)
            }
            else {
                setCount(0);
                if (imageNumber === 3) {
                    setImageNumber(1)
                    set0pacity(0)
                }
                else {
                    setImageNumber(imageNumber + 1);
                    set0pacity(0)
                }
            }
        }
        else {
            if (count < 99) {
                setCount(count + 1);
                set0pacity(opacity + 0.01)
            }
            else {
                setCount(0);
                if (imageNumber === 3) {
                    setImageNumber(1)
                    set0pacity(0)
                }
                else {
                    setImageNumber(imageNumber + 1);
                    set0pacity(0)
                }
            }
        }
    }
    console.log("tasbieeh"+totalCount)

    return ( 

        (!clickHere) ? 
        
        <View >
            <View style={{ width: wp("100%"), height: hp("25%") }}>


                <ImageBackground source={require('../images/123.jpg')} style={{ width: wp("100%"), height: hp("25%") }}>
                    <View style={{
                        flex: 1,
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignContent: "center",
                        alignItems: "center",
                        borderColor: 'orange',
                        borderStyle: 'dotted',
                        borderWidth: 2,
                        borderRadius: 1,
                        width: wp("36%"),
                        height: hp("20%"),
                        color: "white",
                        margin: RFPercentage(1.6),
                    }}>
                        <Text style={{ color: "orange", fontSize: RFPercentage(6), fontWeight: "bold" }} >{count}<Text style={{ color: "orange", fontSize: RFPercentage(3), fontWeight: "normal" }} >/{limit}</Text></Text>

                        <Text style={{ color: "orange", fontSize: RFPercentage(3.3) }} >TOTAL:{totalCount}</Text>
                    </View>
                    <View style={{ display: "flex", flexDirection: 'row', marginLeft: RFPercentage(3) }}>
                        <Icon size={30} name="refresh" color="orange" onPress={resetFn} style={{ marginLeft: RFPercentage(1), marginBottom: RFPercentage(1), }} />

                        <Icon onPress={volumeFn} name={volume} size={30} color="orange" style={{ marginLeft: RFPercentage(1), marginBottom: RFPercentage(1) }} />


                        <TouchableOpacity onPress={changeLimit} style={{ marginTop: 3, marginLeft: RFPercentage(1), marginBottom: RFPercentage(1), height: hp("4%"), width: wp("7%"), borderColor: 'orange', borderWidth: 2, borderRadius: 50, }}><Text style={{ textAlign: "center", color: "orange" }} >{limit}</Text></TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>


            <View >
                <ImageBackground source={imageNumber < 3 ? imageNumber < 2 ? image1 : image2 : image3} resizeMode="center" style={{ opacity: opacity, width: wp("100%"), height: hp("75%") }}>


                    <TouchableOpacity activeOpacity={1}
                        style={{ width: wp("100%"), height: hp("100%") }}
                        onPress={tabeehFn} underlayColor={'rgba(0,0,0,this.state.opacity)'}

                    >

                    </TouchableOpacity>
                </ImageBackground>
            </View>



        </View>
        
        : 
        <View >
            <View style={{ width: wp("100%"), height: hp("25%") }}>


                <ImageBackground source={require('../images/123.jpg')} style={{ width: wp("100%"), height: hp("25%") }}>
                    <View style={{
                        flex: 1,
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignContent: "center",
                        alignItems: "center",
                        borderColor: 'orange',
                        borderStyle: 'dotted',
                        borderWidth: 2,
                        borderRadius: 1,
                        width: wp("36%"),
                        height: hp("20%"),
                        color: "white",
                        margin: RFPercentage(1.6),
                    }}>
                        <Text style={{ color: "orange", fontSize: RFPercentage(6), fontWeight: "bold" }} >{count}<Text style={{ color: "orange", fontSize: RFPercentage(3), fontWeight: "normal" }} >/{limit}</Text></Text>

                        <Text style={{ color: "orange", fontSize: RFPercentage(3.3) }} >TOTAL:{totalCount}</Text>
                    </View>
                    <View style={{ display: "flex", flexDirection: 'row', marginLeft: RFPercentage(3) }}>
                        <Icon size={30} name="refresh" color="orange" onPress={resetFn} style={{ marginLeft: RFPercentage(1), marginBottom: RFPercentage(1), }} />

                        <Icon onPress={volumeFn} name={volume} size={30} color="orange" style={{ marginLeft: RFPercentage(1), marginBottom: RFPercentage(1) }} />


                        <TouchableOpacity onPress={changeLimit} style={{ marginTop: 3, marginLeft: RFPercentage(1), marginBottom: RFPercentage(1), height: hp("4%"), width: wp("7%"), borderColor: 'orange', borderWidth: 2, borderRadius: 50, }}><Text style={{ textAlign: "center", color: "orange" }} >{limit}</Text></TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>


            {/* <View > */}
                {/* <ImageBackground source={imageNumber < 3 ? imageNumber < 2 ? image1 : image2 : image3} resizeMode="center" style={{ opacity: opacity, width: wp("100%"), height: hp("125%") }}> */}


                    <TouchableOpacity activeOpacity={1}
                        style={{ width: wp("100%"), height: hp("100%") }}
                        onPress={tabeehFn} underlayColor={'rgba(0,0,0,this.state.opacity)'}

                    >
                        <View style={{width: wp("100%"), height: hp("60%")  ,display:"flex",alignContent:"center",alignItems:"center",justifyContent:"center"}}>

                        <Text style={{fontSize:RFPercentage(5)}}>Click Here!</Text>
                        </View>

                    </TouchableOpacity>
                {/* </ImageBackground> */}
            {/* </View> */}



        </View>
    );
}