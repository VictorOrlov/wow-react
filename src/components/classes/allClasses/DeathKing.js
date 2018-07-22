import React, { Component } from 'react';
import { connect } from 'react-redux';
import CarcassForEachClass from './CarcassForEachClass';


class DeathKing extends Component{

  render(){
    return(
      <CarcassForEachClass class={this.props.death_king} />
      );
  }
};

const mapStateToProps = (state) => {
  return{
    death_king: state.cont_class.death_king
  };
}


export default connect(mapStateToProps) (DeathKing);