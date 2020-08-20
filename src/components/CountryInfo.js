import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CountryBorders from './CountryBorders';

const CountryInfo = props => {

  const [countryInfo, setCountryInfo] = useState(null);

  useEffect(() => {
    if (props.code !== null) {
      const fetchData = async () => {
        const countryResponse = await axios.get(
          `https://restcountries.eu/rest/v2/alpha/${props.code}`);
        setCountryInfo(countryResponse.data);
      };

      fetchData().catch(console.error);
    }
  }, [props.code]);


  return countryInfo && (
    <div className='CountryInfo'>
      <h1 className='CountryName'>{countryInfo.name}</h1>
      <p><strong>Capital:</strong> {countryInfo.capital}</p>
      <p><strong>Population:</strong> {countryInfo.population}</p>
      <p><strong>Native Name:</strong> {countryInfo.nativeName}</p>
      <p><strong>Region:</strong> {countryInfo.region}</p>
      <CountryBorders borders={countryInfo.borders}/>
    </div>
  );
};

export default CountryInfo;