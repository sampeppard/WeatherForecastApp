export interface WeatherDataType {
    city: string,
    dayOfWeek: string,
    temperature: number,
    humidity: number,
    windSpeed: number,
}

export interface WeatherContextType{
    weatherItems: WeatherDataType[]
    setWeather: (data: any) => void,
    currentCity: string,
    setCurrentCity: (city: string) => void,
}
