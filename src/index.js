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

