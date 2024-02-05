import { useContext } from "react";

// CONTEXT
import { GlobalContext } from '../../context/GlobalContext';

// TYPES
import { WeatherContextType, WeatherDataType } from '../../types/WeatherDataType';

// UTILS
import { getDayOfWeek } from "../../util/util";

// STYLES
import './Today.css';

const Today = () => {
    const { weatherItems, currentCity } = useContext(GlobalContext) as WeatherContextType;

    const dayOfWeek = getDayOfWeek(currentCity);

    const todaysWeather = weatherItems?.find((item: WeatherDataType) => item.dayOfWeek === dayOfWeek);

    return (
        <>
            <h2>Today's Weather for {currentCity.toUpperCase()}</h2>
            <div className="main-result">
                <div id="mainCity">
                    <p>{todaysWeather?.city}</p>
                </div>
                <div id="mainWeekday">
                    <p>{todaysWeather?.dayOfWeek}</p>
                </div>
                <div id="mainTemperature">
                    <p>{todaysWeather?.temperature}</p>
                </div>
                <div id="mainHumidity">
                    <p>{todaysWeather?.humidity}</p>
                </div>
                <div id="mainWindSpeed">
                    <p>{todaysWeather && `${todaysWeather?.windSpeed} m/s`}</p>
                </div>
            </div>
        </>
    );
}

export default Today;