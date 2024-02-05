import React, { useState, useContext } from 'react';

// CONTEXT
import { GlobalContext } from '../context/GlobalContext';

// TYPES
import { WeatherContextType } from '../types/WeatherDataType';

// STYLES
import './Form.css';

interface FormData {
    inputValue: string;
}

const CityForm = () => {
    const [formData, setFormData] = useState<FormData>({
        inputValue: '',
    });

    const { setWeather, setCurrentCity } = useContext(GlobalContext) as WeatherContextType;

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        fetch(`https://api.journey.skillreactor.io/r/f/weather`)
            .then(response => response.json())
            .then(data => {
                if (formData.inputValue !== '') {
                    setWeather(data.filter((i: any) => i?.city.toLowerCase() === formData.inputValue))
                }
            })
            .catch(error => {
                // Handle any errors here
                console.error('Error:', error);
            });
    };
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            setFormData({
                ...formData,
                inputValue: event.target.value.toLowerCase(),
            });

            setCurrentCity(event.target.value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="cityInput">Please enter a valid city</label>
            <input
            type="text"
            id="cityInput"
            value={formData.inputValue}
            onChange={handleChange}
            name="inputValue"
            />
            <button id="submitBtn" type="submit">Submit</button>
        </form>
    )
}

export default CityForm;
