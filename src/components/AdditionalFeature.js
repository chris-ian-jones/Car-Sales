import React from 'react';
import { addFeature } from './../actions'
import { connect } from 'react-redux'

const AdditionalFeature = props => {
  return (
    <li>
      <button onClick={() => props.addFeature(props.feature)} className="button" >Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = state => {
  return {
    state
  }
}

export default connect(mapStateToProps, {addFeature})(AdditionalFeature)
