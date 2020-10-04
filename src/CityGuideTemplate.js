import React from 'react';
import NewSearchButton from './NewSearchBtn';

export default function CityGuideTemplate({ text, city, mustSee, onClick }) {



  return (
    <div className="city-guide-template">
          <div className="city-guide__header">
            <h1>Living & Teaching in {text}, France</h1>
            <h3>Population: {city.population}</h3>
            <h3>Département: {city.departement}</h3>
          </div>

          <div className="city-guide__categories">
            <h2>Where to Eat</h2>

            <h2>Where to Drink</h2>

            <h2>Best Spot to Grab a Coffee</h2>
            <h2>Where to Dance & Party</h2>
            <h2>Museums to Visit</h2>
            <h2>Must-See | Must-Do</h2>
            <ul>
              {city.mustSee.map((el) => (
                <li key={city.mustSee.indexOf(el)}>{el}</li>
              ))}
            </ul>
            <h2>Day & Weekend Trips</h2>
            <ul>
              {
              city.travelIdeas.length > 0 &&
                city.travelIdeas.map(el => (
                  <li key={city.travelIdeas.indexOf(el)}>{el}</li>
                  )) 
              }
              
            </ul>
            <h2>Outdoor Activities</h2>
            <ul>
              {
                city.outdoorActivities.length > 0 &&
                  city.outdoorActivities.map(el => (
                    <li key={city.outdoorActivities.indexOf(el)}>{el}</li>
                  )) 
              }
            </ul>
              
            <h2>Pleasant Walks</h2>
            <ul>
              {
                city.walks.length > 0 &&
                  city.walks.map(el => (
                    <li key={city.walks.indexOf(el)}>{el}</li>
                  )) 
              }
            </ul>
            
            <h2>Housing Examples</h2>
            <ul>
              {
                city.housingExamples.length > 0 &&
                  city.housingExamples.map(el => (
                    <li key={city.housingExamples.indexOf(el)}>{el}</li>
                  )) 
              }
            </ul>
            
            <h2>Best Things About Toulouse</h2>
            <ul>
              {
                city.bestThings.length > 0 &&
                  city.bestThings.map(el => (
                    <li key={city.bestThings.indexOf(el)}>{el}</li>
                  )) 
              }
            </ul>
            
            <h2>Worst Things About Toulouse</h2>
            <ul>
              {
                city.worstThings.length > 0 &&
                  city.worstThings.map(el => (
                    <li key={city.worstThings.indexOf(el)}>{el}</li>
                  )) 
              }
            </ul>
            
            <h2>Pro-Tips from Past & Current Teaching Assistants</h2>
            <ul>
              {
                city.proTips.length > 0 &&
                  city.proTips.map(el => (
                    <li key={city.proTips.indexOf(el)}>{el}</li>
                  )) 
              }
            </ul>
          </div>

          <NewSearchButton onClick={onClick} />
        </div>
  )
}


