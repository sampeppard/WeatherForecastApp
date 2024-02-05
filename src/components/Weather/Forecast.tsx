import { useContext, FC } from "react";

// CONTEXT
import { GlobalContext } from '../../context/GlobalContext';

// TYPES
import { WeatherContextType, WeatherDataType } from '../../types/WeatherDataType';

// UTILS
import { getDayOfWeek, reshuffleDays } from "../../util/util";

// STYLES
import './Forecast.css';

const Forecast: FC = () => {
    const { weatherItems, currentCity } = useContext(GlobalContext) as WeatherContextType;

    const dayOfWeek = getDayOfWeek(currentCity);
    const shuffledDays = reshuffleDays(dayOfWeek, weatherItems);

    return (
        <>
            <h2>6 Day Forecast</h2>ß
            <div className="forecast">
                {shuffledDays?.slice(1, 7).map((item: WeatherDataType, index: number) => (
                    <div id={`data_${item.dayOfWeek.toLowerCase()}`} className="forecast-item" key={item.dayOfWeek}>
                        <h3 className="weekDay">{item.dayOfWeek}</h3>
                        <p className="temperature">{item.temperature}</p>
                        <p className="humidity">{item.humidity}</p>
                        <p className="windSpeed">{item.windSpeed} m/s</p>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Forecast;