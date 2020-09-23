import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import SearchBox from './SearchBox';
import Main from './Main';
import Footer from './Footer';

function App() {

  return (
    <div>
      <Header />
      <Main />
      <SearchBox />
      <Footer />
    </div>
  )

}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)




// CITY GUIDE SLIDESHOW

// let num = 1;

// setInterval(() => {
//   num++;

//   if (num <= 4) {
//     document.querySelector("#city-guide__image").src =
//       `resources/img/city-guide${num}.jpg`;
//   } else {
//     num = 1;
//   }
// }, 1000);


const restaurants = [
  {
    id: 1,
    name: 'Midi Minuit',
    address: '3 Place du Peyrou',
    city: 'Toulouse'
  },
  {
    id: 2,
    name: 'Forno Gusto',
    address: '21 rue Sainte-Ursule',
    city: 'Toulouse'
  },
  {
    id: 3,
    name: 'Not TLS',
    address: '1 Not TLS',
    city: 'Not Toulouse'
  },
  {
    id: 4,
    name: 'Le Bol Bu',
    address: '8 rue du May',
    city: 'Toulouse'
  }
]


// ON SUBMIT CLICK 

// const input = document.querySelector('.city-guide__input').value;

//     if (input === 'toulouse') {
//       document.querySelector('.city-guide__initial').style.display = 'none';
//       document.querySelector('.city-guide__template').style.display = 'flex';

//     restaurants.forEach(restaurant => {
//       if (restaurant.city === 'Toulouse') {
//         let html = `<li>${restaurant.name} - <em>${restaurant.address}</em></li>`
//         document.querySelector('#guide__restaurants').insertAdjacentHTML('beforeend', html);

//         }
//       }) 
//     } 

