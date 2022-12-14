import { useMemo } from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import { Preloader } from '../assets/preloader';

export default function Forecast({ weatherData }: any) {
    const time = weatherData.daily?.time.map((x: string) => x.slice(5).replace('-', '/'))

    const currentWeatherIcon = useMemo(() => {
        return getIconByCode(weatherData.current_weather?.weathercode)
    }, [, weatherData])

    const weatherIcon = useMemo(() => {
        return weatherData.daily?.weathercode.map((code: number) => getIconByCode(code))
    }, [, weatherData])

    function getIconByCode(code: number) {
        if (code == 0) return require('../assets/icons/01d.png')
        if (code == 1) return require('../assets/icons/02d.png')
        if (code == 2) return require('../assets/icons/03d.png')
        if (code == 3) return require('../assets/icons/04d.png')
        if (code == 61 || 63 || 65 || 66 || 67) return require('../assets/icons/09d.png')
        if (code == 80 || 81 || 82) return require('../assets/icons/10d.png')
        if (code == 95 || 99 || 99) return require('../assets/icons/11d.png')
        if (code == 71 || 73 || 75 || 77 || 85 || 86) return require('../assets/icons/13d.png')
        if (code == 45 || 48 || 51 || 53 || 55 || 56 || 57) return require('../assets/icons/50d.png')
    }

    if (!weatherData.current_weather || !weatherData.daily) return <Preloader />
    if (!currentWeatherIcon) return <Preloader />

    return (
        <>
            <View style={styles.currentWeather}>
                <Text style={styles.header}>Сейчас:</Text>
                <View style={styles.icon} >
                    <Image source={currentWeatherIcon} style={styles.icon} />
                </View>
                <View style={styles.box} >
                    <Text style={styles.itemText}>{weatherData.current_weather.temperature} °C</Text>
                    <Text style={styles.itemText}>{weatherData.current_weather.windspeed} м/с </Text>
                </View>
            </View>

            <View style={styles.box}>
                <View style={styles.forecast}>
                    <Text style={styles.itemText}>Завтра:</Text>
                    <View style={styles.miniIcon} >
                        <Image source={weatherIcon[1]} style={styles.miniIcon} />
                    </View>
                    <Text style={styles.itemText}>max: {weatherData.daily.temperature_2m_max[1]} °C</Text>
                    <Text style={styles.itemText}>min: {weatherData.daily.temperature_2m_min[1]} °C</Text>
                </View>
                <View style={styles.forecast}>
                    <Text style={styles.itemText}>{time[2]}</Text>
                    <View style={styles.miniIcon} >
                        <Image source={weatherIcon[2]} style={styles.miniIcon} />
                    </View>
                    <Text style={styles.itemText}>max: {weatherData.daily.temperature_2m_max[2]} °C</Text>
                    <Text style={styles.itemText}>min: {weatherData.daily.temperature_2m_min[2]} °C</Text>
                </View>
                <View style={styles.forecast}>
                    <Text style={styles.itemText}>{time[3]}</Text>
                    <View style={styles.miniIcon} >
                        <Image source={weatherIcon[3]} style={styles.miniIcon} />
                    </View>
                    <Text style={styles.itemText}>max: {weatherData.daily.temperature_2m_max[3]} °C</Text>
                    <Text style={styles.itemText}>min: {weatherData.daily.temperature_2m_min[3]} °C</Text>
                </View>
                <View style={styles.forecast}>
                    <Text style={styles.itemText}>{time[4]}</Text>
                    <View style={styles.miniIcon} >
                        <Image source={weatherIcon[4]} style={styles.miniIcon} />
                    </View>
                    <Text style={styles.itemText}>max: {weatherData.daily.temperature_2m_max[4]} °C</Text>
                    <Text style={styles.itemText}>min: {weatherData.daily.temperature_2m_min[4]} °C</Text>
                </View>
                <View style={styles.forecast}>
                    <Text style={styles.itemText}>{time[5]}</Text>
                    <View style={styles.miniIcon} >
                        <Image source={weatherIcon[5]} style={styles.miniIcon} />
                    </View>
                    <Text style={styles.itemText}>max: {weatherData.daily.temperature_2m_max[5]} °C</Text>
                    <Text style={styles.itemText}>min: {weatherData.daily.temperature_2m_min[5]} °C</Text>
                </View>
                <View style={styles.forecast}>
                    <Text style={styles.itemText}>{time[6]}</Text>
                    <View style={styles.miniIcon} >
                        <Image source={weatherIcon[6]} style={styles.miniIcon} />
                    </View>
                    <Text style={styles.itemText}>max: {weatherData.daily.temperature_2m_max[6]} °C</Text>
                    <Text style={styles.itemText}>min: {weatherData.daily.temperature_2m_min[6]} °C</Text>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    currentWeather: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#ceccce',
    },
    box: {
        flexDirection: 'column',
    },
    forecast: {
        height: '18%',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#ceccce',
        justifyContent: 'space-between'
    },
    header: {
        padding: 10,
        textAlign: 'center',
        fontSize: 20,
    },
    miniIcon: {
        width: 30,
        height: 30,
    },
    icon: {
        width: 100,
        height: 100,
    },
    itemText: {
        padding: 10,
        textAlign: 'left',
        fontSize: 15,
    },
});

