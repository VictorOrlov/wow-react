import React, { Component } from 'react';
import { connect } from 'react-redux';
import CarcassForEachClass from './CarcassForEachClass';


class Warloc extends Component{

  
  render(){
    return(
      <CarcassForEachClass class={this.props.warloc} />
      );
  }
};

const mapStateToProps = (state) => {
  return{
    warloc: state.cont_class.warloc
  };
}

export default connect(mapStateToProps) (Warloc);