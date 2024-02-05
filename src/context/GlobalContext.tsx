import { createContext, useState, FC, useMemo } from "react";

import { WeatherDataType, WeatherContextType } from "../types/WeatherDataType";

export const GlobalContext = createContext<WeatherContextType | null>(null);

const Provider: FC<{children: React.ReactNode}> = ({ children }) => {
    const [weatherItems, setWeatherItems] = useState<WeatherDataType[]>([]);
    const [currentCity, setCurrentCity] = useState<string>("");

    const setWeather = (data: []) => {
        setWeatherItems([])
        setWeatherItems(data.map((day: WeatherDataType, index: number) => {
            return {
                city: day.city,
                dayOfWeek: day.dayOfWeek,
                temperature: day.temperature,
                humidity: day.humidity,
                windSpeed: day.windSpeed,
            }
        }))
    };

      // Memoize the context value using useMemo
    const contextValue = useMemo(
        () => ({ weatherItems, setWeather, currentCity, setCurrentCity }),
        [weatherItems, setWeather, currentCity, setCurrentCity]
    );

    return (
        <GlobalContext.Provider value={contextValue}>{children}</GlobalContext.Provider>
    );
}

export default Provider
