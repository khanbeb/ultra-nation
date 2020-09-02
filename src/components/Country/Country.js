import React from 'react';

const Country = (props) => {
    const {name, population, region, flag} = props.country
    const flagStyle = {height: '50px'}
    const countryStyle = {border: '2px solid grey', margin: '10px', padding: '10px', borderRadius: '10px'}
    const handleAddCountry = props.handleAddCountry
    return (
        <div style={countryStyle}>
            <h3>This is : {name}</h3>
            <img style={flagStyle} src={flag} alt="none"/>
            <p>Population: {population}</p>
             <p><small>Region: {region}</small></p>
             <button onClick={() => handleAddCountry(props.country)}>Add Country</button>
        </div>
    );
};

export default Country;