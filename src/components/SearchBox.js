import React, { useState } from "react";
import { db } from "../firebase";
import Main from "./Main";
import CityGuideTemplate from "./CityGuideTemplate";
import DisplayCityList from "./DisplayCityList";

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

  const [restaurants, setRestaurants] = useState([]);
  const [bars, setBars] = useState([]);
  const [cafes, setCafes] = useState([]);
  const [nightclubs, setNightclubs] = useState([]);
  const [museums, setMuseums] = useState([]);

  const [cityList, setCityList] = useState([]);

  const [showTemplate, setShowTemplate] = useState(false);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const clearField = () => {
    setText("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    db.collection("cities")
      .where("name", "==", text)
      .get()
      .then((snapshot) => {
        setShowTemplate(true);
        const data = snapshot.docs.map((doc) => doc.data());
        const city = data[0];
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
      .catch((error) => {
        setText("Enter a French city");
        setShowTemplate(false);
        alert(
          `Please make sure your search entry is capitalized corrrectly (i.e. Toulouse or Aix-en-Provence). Otherwise, it's possible that there isn't a city guide for ${text} yet.`
        );
      });

    // Set state for restaurants, bars, cafes, museums, nightclubs
    // Note: possibly add a switch structure here instead of if/else
    ["restaurants", "bars", "cafes", "nightclubs", "museums"].forEach((el) => {
      db.collection(el)
        .where("city", "==", text)
        .get()
        .then((snapshot) => {
          const data = snapshot.docs.map((doc) => doc.data());
          if (el === "restaurants") {
            setRestaurants(data);
          } else if (el === "bars") {
            setBars(data);
          } else if (el === "cafes") {
            setCafes(data);
          } else if (el === "nightclubs") {
            setNightclubs(data);
          } else if (el === "museums") {
            setMuseums(data);
          }
        });
    });

    // Clear city list if displayed
    if (cityList.length) {
      setCityList([]);
    }
  };

  // for the 'new search' button to reinitialize state
  const handleClick = (event) => {
    setShowTemplate(false);
    setText("Enter a French city");
    setCityList([]);
  };

  // for DisplayCityList
  const displayCityList = () => {
    db.collection("cities")
      .get()
      .then((snapshot) => {
        const data = snapshot.docs.map((doc) => doc.data());
        const cityList = data.map((el) => el.name);
        setCityList(cityList);
      });
  };

  return (
    <div>
      <Main
          headline="Live your best life while teaching English in France"
          tagline="YOUR FAVE RESOURCE FOR ALL THINGS LIVING AND TEACHING IN FRANCE"
        />
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

        <DisplayCityList onClick={displayCityList} list={cityList} />
      </div>
    </div>
  );
}
