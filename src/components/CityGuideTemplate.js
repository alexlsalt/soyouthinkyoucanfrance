import React from 'react';
import * as Categories from './categories';
import NewSearchButton from './NewSearchBtn';

export default function CityGuideTemplate({ text, city, onClick, restaurants, bars, cafes, nightclubs, museums }) {



  return (
    <div className="city-guide-template">
          <div className="city-guide__header">
            <h1>Living & Teaching in {text}, France</h1>
            <h4>Population: {city.population} | Département: {city.departement}</h4>
          </div>

          <div className="city-guide__categories">
            <Categories.Category category={restaurants} title='Where to Eat' />
            <Categories.Category category={bars} title='Where to Drink' />
            <Categories.Category category={cafes} title='Best Spot to Grab a Coffee' />
            <Categories.Category category={nightclubs} title='Where to Party & Dance' />
            <Categories.Category category={museums} title='Museums to Visit' />

            <Categories.MustSee city={city} />
            <Categories.TravelIdeas city={city} />
            <Categories.OutdoorActivities city={city} />
            <Categories.Walks city={city} />
            <Categories.HousingExamples city={city} />
            <Categories.BestThings city={city} cityName={text} />
            <Categories.WorstThings city={city} cityName={text} />
            <Categories.ProTips city={city} cityName={text} />
            
          </div>

          <NewSearchButton onClick={onClick} />
        </div>
  )
}


