import React from "react";


export function Category({ category, title }) {
  if (category.length === 0) {
    return null;
  }

    return (
      <div>
        <h2>{title}</h2>
        <ul>
          {
            category.map(el => (
              <li key={category.indexOf(el)}>{el.name} | {el.address}</li>
            ))
          }
        </ul>
      </div>
    )
}

export function MustSee({ city }) {
  if (city.mustSee.length === 0) {
    return null;
  }

  return (
    <div>
      <h2>Must See | Must Do</h2>
      <ul>
        {city.mustSee.map((el) => (
          <li key={city.mustSee.indexOf(el)}>{el}</li>
        ))}
      </ul>
    </div>
  );
}

export function TravelIdeas({ city }) {
  if (city.travelIdeas.length === 0) {
    return null;
  }

  return (
    <div>
      <h2>Day & Weekend Trips</h2>

      <ul>
        {city.travelIdeas.length > 0 &&
          city.travelIdeas.map((el) => (
            <li key={city.travelIdeas.indexOf(el)}>{el}</li>
          ))}
      </ul>
    </div>
  );
}

export function OutdoorActivities({ city }) {
  if (city.outdoorActivities.length === 0) {
    return null;
  }

  return (
    <div>
      <h2>Outdoor Activities</h2>

      <ul>
        {city.outdoorActivities.length > 0 &&
          city.outdoorActivities.map((el) => (
            <li key={city.outdoorActivities.indexOf(el)}>{el}</li>
          ))}
      </ul>
    </div>
  );
}

export function Walks({ city }) {
  if (city.walks.length === 0) {
    return null;
  }

  return (
    <div>
      <h2>Pleasant Walks</h2>

      <ul>
        {city.walks.length > 0 &&
          city.walks.map((el) => (
            <li key={city.walks.indexOf(el)}>{el}</li>
          ))}
      </ul>
    </div>
  );
}


export function HousingExamples({ city }) {
  if (city.housingExamples.length === 0) {
    return null;
  }

  return (
    <div>
      <h2>Housing Examples</h2>

      <ul>
        {city.housingExamples.length > 0 &&
          city.housingExamples.map((el) => (
            <li key={city.housingExamples.indexOf(el)}>{el}</li>
          ))}
      </ul>
    </div>
  );
}

export function BestThings({ city, cityName }) {
  if (city.bestThings.length === 0) {
    return null;
  }

  return (
    <div>
      <h2>Best Things About City About {cityName}</h2>

      <ul>
        {city.bestThings.length > 0 &&
          city.bestThings.map((el) => (
            <li key={city.bestThings.indexOf(el)}>{el}</li>
          ))}
      </ul>
    </div>
  );
}

export function WorstThings({ city, cityName }) {
  if (city.worstThings.length === 0) {
    return null;
  }

  return (
    <div>
      <h2>Worst Things About City About {cityName}</h2>

      <ul>
        {city.worstThings.length > 0 &&
          city.worstThings.map((el) => (
            <li key={city.worstThings.indexOf(el)}>{el}</li>
          ))}
      </ul>
    </div>
  );
}

export function ProTips({ city, cityName }) {

  if (city.proTips.length === 0) {
    return null;
  }
  
  return (
    <div>
      <h2>Pro Tips from Past and Current Teaching Assistants in {cityName}</h2>

      <ul>
        {city.proTips.length > 0 &&
          city.proTips.map((el) => (
            <li key={city.proTips.indexOf(el)}>{el}</li>
          ))}
      </ul>
    </div>
  );
}