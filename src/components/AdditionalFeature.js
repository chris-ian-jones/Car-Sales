import React from 'react';
import { addNewFeature } from './../actions'
import { connect } from 'react-redux'

const AdditionalFeature = props => {
  return (
    <li>
      <button onClick={() => props.addNewFeature(props.feature)} className="button" >Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default connect('', {addNewFeature})(AdditionalFeature)
