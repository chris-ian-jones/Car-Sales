import React from 'react';
import { addFeature } from './../actions'
import { connect } from 'react-redux'

const AdditionalFeature = ({ addFeature, feature }) => {
  return (
    <li>
      <button onClick={() => addFeature(feature)} className="button" >Add</button>
      {feature.name} (+{feature.price})
    </li>
  )
}

export default connect(
  null, 
  { addFeature }
)(AdditionalFeature)
