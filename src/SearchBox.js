import React, { useState } from "react";
import Image from "./img/city-guide2.jpg";
import { db } from "./firebase";
import CityGuideTemplate from "./CityGuideTemplate";

// function cycleThruImages() {
//   let num = 1;

//   setInterval(() => {
//     num++;

//     if (num <= 4) {
//       document.querySelector(
//         "#city-guide__image"
//       ).src = `resources/img/city-guide${num}.jpg`;
//     } else {
//       num = 1;
//     }
//   }, 1000);
// }

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
    proTips: [],
  });

  const [showTemplate, setShowTemplate] = useState(false);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const clearField = (event) => {
    setText("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("hello");
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
  };

  // for the 'new search' button to reinitialize state
  const handleClick = (event) => {
    setShowTemplate(false);
    setText("");
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
        <CityGuideTemplate onClick={handleClick} text={text} city={cityInfo} />
      )}

    </div>
  );
}
