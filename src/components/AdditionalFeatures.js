import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import { connect } from 'react-redux'
import { addNewFeature } from './../actions'


const AdditionalFeatures = props => {

  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.store.length ? (
        <ol type="1">
          {props.store.map(item => (
            <AdditionalFeature addNewFeature={addNewFeature} key={item.id} feature={item} addNewFeature={addNewFeature} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    store: state.store
  }
}

export default connect(mapStateToProps, {})(AdditionalFeatures)
