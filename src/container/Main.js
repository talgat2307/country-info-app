import React, { useEffect, useState } from 'react';
import CountryList from '../components/CountryList';
import CountryInfo from '../components/CountryInfo';
import axios from 'axios';

const Main = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCounty, setSelectedCountry] = useState(null);

  useEffect(() => {

    const fetchData = async () => {
      const countryResponse = await axios.get(
        'https://restcountries.com/v2/all');
      setCountries(countryResponse.data);
    };

    fetchData().catch(console.error);
  }, []);

  return (
    <div className='Main'>
      <div className='List'>
        {countries.map((country, index) => {
          return <CountryList
            key={index}
            country={country.name}
            click={() => setSelectedCountry(country.alpha3Code)}
          />;
        })}
      </div>
      <div className='Info'>
        <CountryInfo code={selectedCounty}/>
      </div>
    </div>
  );
};

export default Main;