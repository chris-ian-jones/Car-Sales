import React from 'react';
import { addNewFeature } from './../actions'

const AdditionalFeature = props => {

  const addFeature = event => {
    addNewFeature(props.feature)
    console.log(props.feature)
  }

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={addFeature} className="button" >Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
