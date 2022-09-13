import { useState } from 'react';
import { StyleSheet, TouchableOpacity, TextInput, Text, View, FlatList } from 'react-native';
import { checkResponse } from '../services/checkResponce';
import { AntDesign } from '@expo/vector-icons';
import Forecast from './Forecast';
import { TCity, TCityResponce, TWeatherResponce } from '../types';

export default function Weather() {
    const [text, setText] = useState('');
    const [weatherData, setWeatherData] = useState({});
    const [cityData, setCityData] = useState<TCity[] | undefined>();
    const [forecast, setForecast] = useState(false);

    const onChange = (text: string) => {
        const newText = text.trim();
        setText(newText)
    };

    const getCity = (customInput: string) => {
        fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${customInput}&language=ru&count=1`)
            .then(checkResponse<TCityResponce>)
            .then((res) => {
                if (res) {
                    const data = res.results;
                    setCityData(data);
                } else {
                    throw new Error
                }
            }).catch(err => console.log(err))
    }

    const getWeather = async (lat: number, lon: number) => {
        fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=weathercode,temperature_2m_max,temperature_2m_min&current_weather=true&timezone=Europe%2FMoscow`)
            .then(checkResponse<TWeatherResponce>)
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
            <View style={styles.innerBox}>
                {
                    !forecast ? (
                        <FlatList
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
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    box: {
        position: 'relative',
        alignItems: 'center',
    },
    search: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        marginTop: '5%',
    },
    innerBox: {
        position: 'absolute',
        marginTop: '35%',
    },
    input: {
        borderBottomWidth: 1,
        borderColor: '#000',
        padding: 10,
        marginVertical: '10%',
        width: '70%',
    },
    itemText: {
        padding: 10,
        textAlign: 'left',
        flex: 1,
        fontSize: 20,
        marginTop: 10,
        borderBottomWidth: 1,
        borderColor: '#ceccce',
    },
});
