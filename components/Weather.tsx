import * as WebBrowser from 'expo-web-browser';
import { useState, useEffect } from 'react';
import { StyleSheet, TouchableOpacity, TextInput, Button } from 'react-native';

import Form from './Form';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';

export default function Weather() {
    const [weatherData, setWeatherData] = useState(0)

    useEffect(() => {
        // getWeather()
    }, [])


    //curl -H  'https://api.gismeteo.net/v2/weather/forecast/aggregate/4368/?lang=en&days=3'

    //     export const baseUrl: string = 'https://norma.nomoreparties.space/api';

    //     
    // }
    //         fetch(`${baseUrl}/ingredients`, {
    //             method: 'post',
    //         headers: {
    //             "Content-Type": "application/json;charset=utf-8",
    //         },
    //         body: JSON.stringify({
    //             email: email,
    //         password: password,
    //         }),
    //     })
    //     .then((res) => checkResponse<TDataResponce>(res))
    //     .then((res) => {
    //         if (res && res.success) {
    //             const data = res.data;
    //             dispatch(ingredientRequestSuccess(data))
    //         } else {
    //                 dispatch(ingredientRequestFailed())
    //             }
    //     }).catch(err => dispatch(ingredientRequestFailed()))


    return (
        <View>
            <View style={styles.getStartedContainer}>
                <Form weather />

                <View
                    style={[styles.codeHighlightContainer, styles.homeScreenFilename]}
                    darkColor="rgba(255,255,255,0.05)"
                    lightColor="rgba(0,0,0,0.05)">
                    <MonoText>{ }</MonoText>
                </View>

                <Text
                    style={styles.getStartedText}
                    lightColor="rgba(0,0,0,0.8)"
                    darkColor="rgba(255,255,255,0.8)">
                    I am wondering of start coding on React Native
                </Text>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    getStartedContainer: {
        alignItems: 'center',
        marginHorizontal: 50,
    },
    homeScreenFilename: {
        marginVertical: 7,
    },
    codeHighlightContainer: {
        borderRadius: 3,
        paddingHorizontal: 4,
    },
    getStartedText: {
        fontSize: 17,
        lineHeight: 24,
        textAlign: 'center',
    },
    helpContainer: {
        marginTop: 15,
        marginHorizontal: 20,
        alignItems: 'center',
    },
    helpLink: {
        paddingVertical: 15,
    },
    helpLinkText: {
        textAlign: 'center',
    },
});
