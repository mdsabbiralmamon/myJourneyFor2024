import { useState } from 'react';
import './Country.css';
const Country = ({country, handleVisitedCountries}) => {
    const {name, flags, population, area, cca3} = country;

    const [visited, setVisited] = useState(false);
    const handleVisited = () => {
        setVisited(!visited);
    }

    return (
        <div className={`country ${visited ? 'visited' : 'non-visited'}`}>
            <h3>Name : {name?.common} </h3>
            <h3>Flag : <img src={flags?.png} alt="country flag" /></h3>
            <p>Population : {population}</p>
            <p>Area : {area} </p>
            <p>Code : {cca3} </p>
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
            <br /> <br />
            {
                visited ? 'I have visited this country' : 'I want to visit this country'
            }
            <br /><br />
            <button onClick={() => handleVisitedCountries(country)}>Mark as visited</button>
        </div>
    );
};

export default Country;