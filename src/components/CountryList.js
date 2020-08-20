import React from 'react';

const CountryList = props => {


  return (
    <div className='CountryList'>
      <ul>
        <li onClick={props.click}>{props.country}</li>
      </ul>
    </div>
  );
};

export default CountryList;