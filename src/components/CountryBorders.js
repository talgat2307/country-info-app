import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CountryBorders = props => {
  const [borders, setBorders] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      let countries = [];
      let promises = [];
      for (let key in props.borders) {
        promises.push(await axios.get(
          `https://restcountries.eu/rest/v2/alpha/${props.borders[key]}`)
          .then(response => {
            countries.push(response.data);
          }));
      }
      setBorders(countries);
    };

    fetchData().catch(console.error);
  }, [props.borders]);


  return borders && (
    <div className='CountryBorders'>
      <h3>Borders with:</h3>
      <ul>
        {borders.map((border, index) => {
          return <li key={index}>{border.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default CountryBorders;