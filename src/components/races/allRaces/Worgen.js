import React, { Component } from 'react';
import { connect } from 'react-redux';
import CarcassForEachRaces from './CarcassForEachRaces';


class Worgen extends Component{
  render(){
    return(
      <CarcassForEachRaces race={this.props.worgen} />
    );
  }
};

const mapStateToProps= (state) =>{
  return{
    worgen: state.cont_race.worgen
  }
}


export default connect (mapStateToProps) (Worgen);