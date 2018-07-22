import React, { Component } from 'react';
import { connect } from 'react-redux';
import CarcassForEachClass from './CarcassForEachClass';


class Rogue extends Component{

  
  render(){
    return(
      <CarcassForEachClass class={this.props.rogue} />
      );
  }
};

const mapStateToProps = (state) => {
  return{
    rogue: state.cont_class.rogue
  };
}


export default connect(mapStateToProps) (Rogue);