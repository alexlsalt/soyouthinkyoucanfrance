import React from 'react';
import CategoryItem from './CategoryItem';
import NewSearchButton from './NewSearchBtn';
import Main from './Main';

export default function CityGuideTemplate({ text, city, onClick, restaurants, bars, cafes, nightclubs, museums }) {

  return (
    <div className="city-guide-template">

          <Main headline="" tagline="" />

          <div className="city-guide__header">
            <h1>Living & Teaching in {text}, France</h1>
            <h4>Population: {city.population} | Département: {city.departement}</h4>
          </div>

          <div className="city-guide__categories">
            <CategoryItem category={restaurants} title='Where to Eat' type='address' />
            <CategoryItem category={bars} title='Where to Drink' type='address' />
            <CategoryItem category={cafes} title='Best Spot to Grab a Coffee' type='address' />
            <CategoryItem category={nightclubs} title='Where to Party & Dance' type='address' />
            <CategoryItem category={museums} title='Museums to Visit' type='address' />

            <CategoryItem category={city.mustSee} title='Must See | Must Do' type='list' />
            <CategoryItem category={city.travelIdeas} title='Travel Ideas' type='list' />
            <CategoryItem category={city.outdoorActivities} title='Outdoor Activities' type='list' />
            <CategoryItem category={city.walks} title='Pleasant Walks' type='list' />
            <CategoryItem category={city.housingExamples} title='Housing Examples' type='list' />
            <CategoryItem category={city.bestThings} title='Best Things About City' type='list' />
            <CategoryItem category={city.worstThings} title='Worst Things About City' type='list' />
            <CategoryItem category={city.proTips} title='Pro Tips from Past & Current Teaching Assistants' type='list' />
            
          </div>

          <NewSearchButton onClick={onClick} />
        </div>
  )
}


