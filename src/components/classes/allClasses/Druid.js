import React, { Component } from 'react';
import { connect } from 'react-redux';
import CarcassForEachClass from './CarcassForEachClass';


class Druid extends Component{

  
  render(){
    return(
      <CarcassForEachClass class={this.props.druid} />
      );
  }
};

const mapStateToProps = (state) => {
  return{
    druid: state.cont_class.druid
  };
}


export default connect(mapStateToProps) (Druid);