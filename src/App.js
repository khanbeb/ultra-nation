import React, { useState } from 'react';
import './App.css';
import { useEffect } from 'react';
import Country from './components/Country/Country';
import Cart from './components/Cart/Cart';

function App(props) {
  const[countries, setCountries] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => {
      setCountries(data);
      console.log(data)
     const names =  data.map(country => country.name)
     console.log(names)
    })
  }, [])

  const handleAddCountry = (country) => {
    const newCart = [...cart, country];
    setCart(newCart);
  }

  
  return (
    <div className="App">
      <h1>Country loaded: {countries.length}</h1>
       <h3>Added Country: {cart.length}</h3>
       <Cart cart={cart}></Cart>
      <ul>
        {
          countries.map(country => <Country country ={country} handleAddCountry={handleAddCountry} key={country.alpha3Code}></Country>)
        }
      </ul>


    </div>
  );
}

export default App;
