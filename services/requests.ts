
export const checkResponse = <T>(res: Response): Promise<T> => {
    return res.ok ? res.json() : res.json().then((err) => Promise.reject(err))
}

export const getCity = async (customInput: string) => {
    fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${customInput}&language=ru&count=1`)
        .then(checkResponse)
        .then((res) => {
            if (res) {

                const data = res
                // //@ts-ignore
                // if (res && res.success) {
                //     //@ts-ignore
                //     const data = res //.current_weather;
                //     // setWeatherData(data)
                console.log(data)
            } else {
                throw new Error
            }
        }).catch(err => console.log(err))

}




export const getWeather = async () => {
    fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=weathercode&current_weather=true&timezone=Europe%2FMoscow&past_days=7'
    )
        .then(checkResponse)
        .then((res) => {
            if (res) {

                const data = res
                // //@ts-ignore
                // if (res && res.success) {
                //     //@ts-ignore
                //     const data = res //.current_weather;
                //     // setWeatherData(data)
                console.log(data)
            } else {
                throw new Error
            }
        }).catch(err => console.log(err))
}


