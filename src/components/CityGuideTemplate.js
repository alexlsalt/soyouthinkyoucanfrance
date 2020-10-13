import React from 'react';
import * as CategoryItem from './CategoryItem';
import NewSearchButton from './NewSearchBtn';

export default function CityGuideTemplate({ text, city, onClick, restaurants, bars, cafes, nightclubs, museums }) {



  return (
    <div className="city-guide-template">
          <div className="city-guide__header">
            <h1>Living & Teaching in {text}, France</h1>
            <h4>Population: {city.population} | Département: {city.departement}</h4>
          </div>

          <div className="city-guide__categories">
            <CategoryItem.CategoryWithAddress category={restaurants} title='Where to Eat' />
            <CategoryItem.CategoryWithAddress category={bars} title='Where to Drink' />
            <CategoryItem.CategoryWithAddress category={cafes} title='Best Spot to Grab a Coffee' />
            <CategoryItem.CategoryWithAddress category={nightclubs} title='Where to Party & Dance' />
            <CategoryItem.CategoryWithAddress category={museums} title='Museums to Visit' />

            <CategoryItem.CategoryWithList category={city.mustSee} title='Must See | Must Do' />
            <CategoryItem.CategoryWithList category={city.travelIdeas} title='Travel Ideas' />
            <CategoryItem.CategoryWithList category={city.outdoorActivities} title='Outdoor Activities' />
            <CategoryItem.CategoryWithList category={city.walks} title='Pleasant Walks' />
            <CategoryItem.CategoryWithList category={city.housingExamples} title='Housing Examples' />
            <CategoryItem.CategoryWithList category={city.bestThings} title='Best Things About City' />
            <CategoryItem.CategoryWithList category={city.worstThings} title='Worst Things About City' />
            <CategoryItem.CategoryWithList category={city.proTips} title='Pro Tips from Past & Current Teaching Assistants' />
            
          </div>

          <NewSearchButton onClick={onClick} />
        </div>
  )
}


