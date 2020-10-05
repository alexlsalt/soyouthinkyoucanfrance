import React, { useState } from "react";
import Image from "./img/city-guide2.jpg";
import { db } from "./firebase";
import CityGuideTemplate from "./CityGuideTemplate";


export default function SearchBox() {
  const [text, setText] = useState("Enter a French city");

  const [cityInfo, setCityInfo] = useState({
    name: text,
    population: null,
    departement: null,
    mustSee: [],
    travelIdeas: [],
    outdoorActivities: [],
    walks: [],
    housingExamples: [],
    bestThings: [],
    worstThings: [],
    proTips: []
  });
  
  const [restaurants, setRestaurants] = useState([]);
  const [bars, setBars] = useState([]);
  const [cafes, setCafes] = useState([]);
  const [nightclubs, setNightclubs] = useState([]);
  const [museums, setMuseums] = useState([]);

  const [showTemplate, setShowTemplate] = useState(false);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const clearField = (event) => {
    setText("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowTemplate(true);

    db.collection("cities")
      .where("name", "==", text)
      .get()
      .then((snapshot) => {
        const data = snapshot.docs.map((doc) => doc.data());
        const city = data[0];
        console.log(city);
        setCityInfo({
          population: city.population,
          departement: city.departement,
          mustSee: city.mustSee,
          travelIdeas: city.travelIdeas,
          outdoorActivities: city.outdoorActivities,
          walks: city.walks,
          housingExamples: city.housingExamples,
          bestThings: city.bestThings,
          worstThings: city.worstThings,
          proTips: city.proTips,
        });
      })
      .catch((error) => alert("Error, please try your search again."));



      // Get Restaurant data from database
      db.collection('restaurants')
        .where('city', '==', text)
        .get()
        .then(snapshot => {
          const data = snapshot.docs.map((doc) => doc.data());
          setRestaurants(data);
        })

      // Get Bar data from database

      db.collection('bars')
      .where('city', '==', text)
      .get()
      .then((snapshot) => {
        const data = snapshot.docs.map((doc) => doc.data());
        setBars(data);
      })

      // Get Cafe data from database
      db.collection('cafes')
      .where('city', '==', text)
      .get()
      .then((snapshot) => {
        const data = snapshot.docs.map((doc) => doc.data());
        setCafes(data);
      })

      // Get Nightclub data from database
      db.collection('nightclubs')
      .where('city', '==', text)
      .get()
      .then((snapshot) => {
        const data = snapshot.docs.map((doc) => doc.data());
        setNightclubs(data);
      })

      // Get Museum data from database
      db.collection('museums')
      .where('city', '==', text)
      .get()
      .then((snapshot) => {
        const data = snapshot.docs.map((doc) => doc.data());
        setMuseums(data);
      })
  };

  // for the 'new search' button to reinitialize state
  const handleClick = (event) => {
    setShowTemplate(false);
    setText('Enter a French city');
  };

  return (
    <div className="search-box">
      {!showTemplate && (
        <>
          <h2>Search for a city guide below and press enter:</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              onClick={clearField}
              onChange={handleChange}
              value={text}
              className="city-guide__input"
            />
          </form>

          <img src={Image} alt="Nice, France" className="city-guide__image" />
        </>
      )}

      {showTemplate && (
        <CityGuideTemplate 
          onClick={handleClick} 
          text={text} 
          city={cityInfo} 
          restaurants={restaurants} 
          bars={bars} 
          cafes={cafes}
          nightclubs={nightclubs}
          museums={museums}
        />
      )}

    </div>
  );
}
