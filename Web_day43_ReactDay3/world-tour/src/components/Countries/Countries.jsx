import Country from "../Country/Country";
import "./Countries.css"
import { useEffect, useState } from "react";
const apiUrl = 'https://restcountries.com/v3.1/all';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch(apiUrl)
            .then(res => res.json())
            .then((data) => setCountries(data));
    }, [])

    const [visitedCountries, setVisitedCountries] = useState([]);

    const handleVisitedCountries = country => {
        console.log(country); 
        const newVisitedCountry = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountry);
    }
    return (
        <div>
            <h3>Countries : {countries.length}</h3>
            <div>
                <h4>Visited Countries : {visitedCountries.length} </h4>
                <ul>
                    {
                        visitedCountries.map(country => <li key ={country.cca3} >{country.name.common}</li>)
                    }
                </ul>
            </div>
            <div className="country-container">
                {
                    countries.map(country => <Country 
                        key={country.cca3} 
                        country={country}
                        handleVisitedCountries = {handleVisitedCountries}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;