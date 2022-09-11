import { useState, useEffect } from 'react';
import { StyleSheet, TouchableOpacity, TextInput, Button, FlatList } from 'react-native';
import { checkResponse } from '../services/checkResponce';
import { AntDesign } from '@expo/vector-icons';
import { Text, View } from './Themed';
import Forecast from './Forecast';


export default function Weather() {
    const [text, setText] = useState('');
    const [weatherData, setWeatherData] = useState({});
    const [cityData, setCityData] = useState({});
    const [forecast, setForecast] = useState(false);

    const onChange = (text: string) => {
        setText(text)
    }

    const getCity = (customInput: string) => {
        fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${customInput}&language=ru&count=1`)
            .then(checkResponse)
            .then((res) => {
                if (res) {
                    //@ts-ignore
                    const data = res.results;
                    setCityData(data);
                    console.log(data);
                } else {
                    throw new Error
                }
            }).catch(err => console.log(err))
    }

    const getWeather = async (lat: number, lon: number) => {
        fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=weathercode,temperature_2m_max,temperature_2m_min&current_weather=true&timezone=Europe%2FMoscow`)
            .then(checkResponse)
            .then((res) => {
                if (res) {
                    const data = res;
                    setWeatherData(data);
                    console.log(data)
                } else {
                    throw new Error
                }
            }).catch(err => console.log(err))
    }

    return (
        <View style={styles.box}>
            <View style={styles.search}>
                <TextInput
                    style={styles.input}
                    onChangeText={onChange}
                    placeholder='Введите город...'
                />
                <TouchableOpacity onPress={() => { getCity(text); setForecast(false) }} >
                    <AntDesign
                        name="search1"
                        size={30}
                        color="black"
                    />
                </TouchableOpacity>
            </View>
            {
                !forecast ? (
                    <FlatList
                        //@ts-ignore
                        data={cityData} renderItem={({ item }) => (
                            <TouchableOpacity
                                onPress={() => {
                                    getWeather(item.latitude, item.longitude);
                                    setForecast(true)
                                }}
                            >
                                <Text style={styles.itemText}>{item.country}, {item.name}</Text>
                            </TouchableOpacity>
                        )} />
                ) : (
                    <Forecast weatherData={weatherData} />
                )
            }
        </View >
    );
}

const styles = StyleSheet.create({
    box: {
        marginHorizontal: '8%',
    },
    search: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '15%',
    },
    input: {
        borderBottomWidth: 1,
        borderColor: '#000',
        padding: 10,
        marginVertical: 20,
        width: '100%',
    },
    itemText: {
        padding: 10,
        textAlign: 'left',
        fontSize: 20,
        marginTop: 10,
        borderBottomWidth: 1,
        borderColor: '#ceccce',
    },
});