// COMPONENTS
import CityForm from '../components/Form';
import Forecast from '../components/Weather/Forecast';
import Today from '../components/Weather/Today';

import Provider from '../context/GlobalContext';

const Home = () => {
    return (
        <Provider>
            <CityForm />
            <Today />
            <Forecast />
        </Provider>
    )
}

export default Home;
