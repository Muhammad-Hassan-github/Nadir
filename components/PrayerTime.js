import React, { useState, useEffect } from 'react';
import { View, Text, Button, Image, Dimensions, ImageBackground, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { Container, Content, DatePicker, } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Header } from 'react-navigation-stack';
import { PermissionsAndroid } from 'react-native';
// import Geolocation from '@react-native-community/geolocation';
// import Geocoder from 'react-native-geocoder';
import { AsyncStorage } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import { set } from 'react-native-reanimated';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const axios = require('axios');

export function PrayerTime({ route, navigation, }) {

    Text.defaultProps = Text.defaultProps || {};
    Text.defaultProps.allowFontScaling = false;

    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    const headerHieht = Header.HEIGHT;
    console.log("header" + headerHieht)
    const [loading, setLoading] = useState(true);
    const [Fajr, setFajr] = useState(0);
    const [Dhuhr, setDhuhr] = useState(0);
    const [Asr, setAsr] = useState(0);
    const [Maghrib, setMaghrib] = useState(0);
    const [Isha, setIsh] = useState(0);
    const [date, setDate] = useState(0);
    const [islamicDate, setIslamicDate] = useState(0);
    const [chosenDate, setChosenDate] = useState(new Date())




    let value;
    let PrayerTimes = {};


    useEffect(() => {

        let localStorageFn = async () => {

            Geolocation.getCurrentPosition(
                async (position) => {
                    var latitudeVar = await AsyncStorage.getItem('latitude');
                    var longitudeVar = await AsyncStorage.getItem('longitude');
                    parseInt()
                    if (parseInt(latitudeVar).toFixed(2) != parseInt(position.coords.latitude).toFixed(2) || parseInt(longitudeVar).toFixed(2) != parseInt(position.coords.longitude.toFixed(2))) {
                        AsyncStorage.removeItem("prayerClander");
                    }
                })
            value = await AsyncStorage.getItem('prayerClander');



            if (value == null) {
                console.log("true")

                Geolocation.getCurrentPosition(
                    async (position) => {
                        AsyncStorage.setItem('latitude', JSON.stringify(position.coords.latitude));
                        AsyncStorage.setItem('longitude', JSON.stringify(position.coords.longitude));

                        let date = new Date();
                        // let month = date.getFullYear();
                        let year = date.getFullYear();
                        const objYears = {};
                        for (let i = 1; i <= 12; i++) {
                            getUsers = async () => {
                                let res = await axios.get(`http://api.aladhan.com/v1/calendar?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&method=2&month=${i}&year=${year}`)
                                // console.log(`http://api.aladhan.com/v1/calendar?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&method=2&month=${i}&year=${year}`)
                                if (res) {

                                    objYears[i] = res.data;
                                }
                                if (i === 12) {

                                    // console.log(res.data.data[0].timings)
                                    AsyncStorage.setItem('prayerClander', JSON.stringify(objYears));
                                    setLoading(false)
                                    // console.log(objYears)


                                    // let getiTime = async()=>{


                                    // }
                                    localStorageFn();





                                }

                                // console.log(objYears)
                            };
                            this.getUsers()

                        }


                    },
                    (error) => {
                        // See error code charts below.
                        console.log(error.code, error.message);
                    },
                    { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }


                );







            }
            else {
                var Fulldate = new Date();
                let month = Fulldate.getMonth() + 1;
                let date = Fulldate.getDate() - 1;
                // console.log(date)
                console.log(date)
                console.log(month)
                // console.log(JSON.parse(value)[month].data[date].timings.Asr)
                // console.log(JSON.parse(value)[5].data[0].timings)
                PrayerTimes = JSON.parse(value)[month].data[date].timings
                console.log(PrayerTimes)
                // console.log(JSON.parse(value)[month].data[date].date.hijri.date)
                setDate(JSON.parse(value)[month].data[date].date.readable)
                setIslamicDate(JSON.parse(value)[month].data[date].date.hijri.date)


                if (parseInt(PrayerTimes.Fajr.slice(0, 2)) > 12) {
                    if ((parseInt(PrayerTimes.Fajr.slice(0, 2)) - 12) < 10) {
                        let DhuhrTime = (PrayerTimes.Fajr.slice(0, 2)) - 12 + PrayerTimes.Fajr.slice(2, 5) + "PM";
                        setFajr("0" + FajrTime)
                    }
                    else {

                        setFajr(parseInt(PrayerTimes.Fajr.slice(0, 2)) - 12 + PrayerTimes.Fajr.slice(2, 5) + "PM")
                    }
                } else {
                    setFajr(PrayerTimes.Fajr.slice(0, 5) + "AM")
                }

                if (PrayerTimes.Dhuhr.slice(0, 2) > 12) {
                    if ((parseInt(PrayerTimes.Dhuhr.slice(0, 2)) - 12) < 10) {
                        let DhuhrTime = (PrayerTimes.Dhuhr.slice(0, 2)) - 12 + PrayerTimes.Dhuhr.slice(2, 5) + "PM";
                        setDhuhr("0" + DhuhrTime)
                    }
                    else {

                        setDhuhr(parseInt(PrayerTimes.Dhuhr.slice(0, 2)) - 12 + PrayerTimes.Dhuhr.slice(2, 5) + "PM")
                    }

                }
                else if (PrayerTimes.Dhuhr.slice(0, 2) == 12) {
                    setDhuhr(parseInt(PrayerTimes.Dhuhr.slice(0, 2)) + PrayerTimes.Dhuhr.slice(2, 5) + "PM")

                }
                else {
                    setDhuhr(PrayerTimes.Dhuhr.slice(0, 5) + "AM")

                }

                if (PrayerTimes.Asr.slice(0, 2) > 12) {
                    if ((parseInt(PrayerTimes.Asr.slice(0, 2)) - 12) < 10) {
                        let AsrTime = (PrayerTimes.Asr.slice(0, 2)) - 12 + PrayerTimes.Asr.slice(2, 5) + "PM";
                        setAsr("0" + AsrTime)
                    }
                    else {

                        setAsr(parseInt(PrayerTimes.Asr.slice(0, 2)) - 12 + PrayerTimes.Asr.slice(2, 5) + "PM")
                    }

                }
                else {
                    setAsr(PrayerTimes.Asr.slice(0, 5) + "AM")

                }
                if (PrayerTimes.Maghrib.slice(0, 2) > 12) {
                    if ((parseInt(PrayerTimes.Maghrib.slice(0, 2)) - 12) < 10) {
                        let MaghribTime = (PrayerTimes.Maghrib.slice(0, 2)) - 12 + PrayerTimes.Maghrib.slice(2, 5) + "PM";
                        setMaghrib("0" + MaghribTime)
                    }
                    else {

                        setMaghrib(parseInt(PrayerTimes.Maghrib.slice(0, 2)) - 12 + PrayerTimes.Maghrib.slice(2, 5) + "PM")
                    }
                }
                else {
                    setMaghrib(PrayerTimes.Maghrib.slice(0, 5) + "AM")
                }
                if (PrayerTimes.Isha.slice(0, 2) > 12) {
                    if ((parseInt(PrayerTimes.Isha.slice(0, 2)) - 12) < 10) {
                        let ishaTime = (PrayerTimes.Isha.slice(0, 2)) - 12 + PrayerTimes.Isha.slice(2, 5) + "PM";

                        setIsh("0" + ishaTime)
                    }
                    else {

                        setIsh(parseInt(PrayerTimes.Isha.slice(0, 2)) - 12 + PrayerTimes.Isha.slice(2, 5) + "PM")
                    }

                }

                else {

                    setIsh(PrayerTimes.Isha.slice(0, 5) + "AM")
                }



                // console.log(value)
                setLoading(false)
            }
        }
        localStorageFn();
        console.log("b")


    }, []);

    var setDateFn = async (newDate) => {

        // setChosenDate(newDate)
        value = await AsyncStorage.getItem('prayerClander');

        var Fulldate = newDate

        let month = Fulldate.getMonth() + 1;
        let date = Fulldate.getDate() - 1;
        console.log(date)
        console.log(month)
        PrayerTimes = JSON.parse(value)[month].data[date].timings
        console.log(PrayerTimes)
        console.log(JSON.parse(value)[month].data[date].date.hijri.date)
        setDate(JSON.parse(value)[month].data[date].date.readable)
        setIslamicDate(JSON.parse(value)[month].data[date].date.hijri.date)



        if (parseInt(PrayerTimes.Fajr.slice(0, 2)) > 12) {
            if ((parseInt(PrayerTimes.Fajr.slice(0, 2)) - 12) < 10) {
                let DhuhrTime = (PrayerTimes.Fajr.slice(0, 2)) - 12 + PrayerTimes.Fajr.slice(2, 5) + "PM";
                setFajr("0" + FajrTime)
            }
            else {

                setFajr(parseInt(PrayerTimes.Fajr.slice(0, 2)) - 12 + PrayerTimes.Fajr.slice(2, 5) + "PM")
            }
        } else {
            setFajr(PrayerTimes.Fajr.slice(0, 5) + "AM")
        }

        if (PrayerTimes.Dhuhr.slice(0, 2) > 12) {
            if ((parseInt(PrayerTimes.Dhuhr.slice(0, 2)) - 12) < 10) {
                let DhuhrTime = (PrayerTimes.Dhuhr.slice(0, 2)) - 12 + PrayerTimes.Dhuhr.slice(2, 5) + "PM";
                setDhuhr("0" + DhuhrTime)
            }
            else {

                setDhuhr(parseInt(PrayerTimes.Dhuhr.slice(0, 2)) - 12 + PrayerTimes.Dhuhr.slice(2, 5) + "PM")
            }

        }
        else if (PrayerTimes.Dhuhr.slice(0, 2) == 12) {
            setDhuhr(parseInt(PrayerTimes.Dhuhr.slice(0, 2)) + PrayerTimes.Dhuhr.slice(2, 5) + "PM")

        }
        else {
            setDhuhr(PrayerTimes.Dhuhr.slice(0, 5) + "AM")

        }

        if (PrayerTimes.Asr.slice(0, 2) > 12) {
            if ((parseInt(PrayerTimes.Asr.slice(0, 2)) - 12) < 10) {
                let AsrTime = (PrayerTimes.Asr.slice(0, 2)) - 12 + PrayerTimes.Asr.slice(2, 5) + "PM";
                setAsr("0" + AsrTime)
            }
            else {

                setAsr(parseInt(PrayerTimes.Asr.slice(0, 2)) - 12 + PrayerTimes.Asr.slice(2, 5) + "PM")
            }

        }
        else {
            setAsr(PrayerTimes.Asr.slice(0, 5) + "AM")

        }
        if (PrayerTimes.Maghrib.slice(0, 2) > 12) {
            if ((parseInt(PrayerTimes.Maghrib.slice(0, 2)) - 12) < 10) {
                let MaghribTime = (PrayerTimes.Maghrib.slice(0, 2)) - 12 + PrayerTimes.Maghrib.slice(2, 5) + "PM";
                setMaghrib("0" + MaghribTime)
            }
            else {

                setMaghrib(parseInt(PrayerTimes.Maghrib.slice(0, 2)) - 12 + PrayerTimes.Maghrib.slice(2, 5) + "PM")
            }
        }
        else {
            setMaghrib(PrayerTimes.Maghrib.slice(0, 5) + "AM")
        }
        if (PrayerTimes.Isha.slice(0, 2) > 12) {
            if ((parseInt(PrayerTimes.Isha.slice(0, 2)) - 12) < 10) {
                let ishaTime = (PrayerTimes.Isha.slice(0, 2)) - 12 + PrayerTimes.Isha.slice(2, 5) + "PM";

                setIsh("0" + ishaTime)
            }
            else {

                setIsh(parseInt(PrayerTimes.Isha.slice(0, 2)) - 12 + PrayerTimes.Isha.slice(2, 5) + "PM")
            }

        }

        else {

            setIsh(PrayerTimes.Isha.slice(0, 5) + "AM")
        }





    }



    return (

        (loading == true) ?
            <View >
                <ImageBackground resizeMode="cover"
                    source={require('../images/background.jpg')}
                    style={{ width: wp("100%"), height: "100%", display: "flex", justifyContent: "center", alignItems: "center", alignContent: "center" }} >

                    <ActivityIndicator size="large" color="white" />
                </ImageBackground>
            </View>


            :

            <ImageBackground source={require('../images/background.jpg')} style={{ width: wp("100%"), height: windowHeight - headerHieht }} resizeMode="cover">


                <View style={style.header}>
                    <ImageBackground resizeMode="center"
                        source={require('../images/title.png')}
                        style={style.titleImage} >

                        <Text style={style.title1}>Prayer Times</Text>
                    </ImageBackground>

                </View>

                <View style={style.container}>

                    <View style={style.title}><Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }} >Date: {date}</Text></View>
                    <View style={style.title}><Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>Hijri:  {islamicDate}</Text></View>

                    <View style={{ margin: 0, alignItems: "center" }}><DatePicker
                        defaultDate={new Date()}
                        minimumDate={new Date(2018, 1, 1)}
                        maximumDate={new Date(2020, 12, 31)}
                        locale={"en"}
                        timeZoneOffsetInMinutes={undefined}
                        modalTransparent={false}
                        animationType={"fade"}
                        androidMode={"default"}
                        placeHolderText="CALENDAR"
                        textStyle={{ color: "lightblue", fontSize: RFPercentage(4) }}
                        placeHolderTextStyle={{ color: "lightblue", fontWeight: "bold", fontSize: RFPercentage(4) }}
                        onDateChange={setDateFn}
                        disabled={false}
                    /></View>

                    <View style={style.box}>
                        <View style={style.field}><Text style={style.text} > Fajar</Text><Text style={style.text}> {Fajr} </Text></View>
                        <View style={style.field}><Text style={style.text} > Dhuhr</Text><Text style={style.text}> {Dhuhr} </Text></View>
                        <View style={style.field}><Text style={style.text} > Asr</Text><Text style={style.text}> {Asr} </Text></View>
                        <View style={style.field}><Text style={style.text} > Maghrib</Text><Text style={style.text}> {Maghrib} </Text></View>
                        <View style={style.field}><Text style={style.text} > Isha</Text><Text style={style.text}> {Isha} </Text></View>
                    </View>

                </View>

                {/* <Header  /> */}


            </ImageBackground>

    );
}
const style = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
        // backgroundColor:"black",
        marginTop:RFPercentage(-3),
    },
    text: {
        fontSize: RFPercentage(4.5),
        color: '#000',
        fontWeight: "bold",
        color: "white"
    },
    field: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: "space-between",
        borderBottomWidth: 1,
        paddingBottom: RFPercentage(0.8),
        borderColor: "white"
    },
    title: {

        fontSize: RFPercentage(8),
        marginTop: RFPercentage(2),
        textAlign: "center",
        fontWeight: "bold",
        width: wp("75%"),
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center"

    },
    title1: {
        color: "yellow",
        fontSize: RFPercentage(5),
        marginTop: RFPercentage(2),
        textAlign: "center",
        fontWeight: "bold",
        width: wp("75%"),


    },
    box: {
        margin: RFPercentage(1),
        borderWidth: 3,
        borderColor: "white",
        padding: RFPercentage(0.5),
        height: hp("37%"),
        width: wp("85%"),
        borderRadius: 10,
        backgroundColor: "transparent",

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



});

