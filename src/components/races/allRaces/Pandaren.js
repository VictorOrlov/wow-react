import React, { Component } from 'react';
import { connect } from 'react-redux';
import CarcassForEachRaces from './CarcassForEachRaces';


class Pandaren extends Component{
  render(){
    return(
      <CarcassForEachRaces race={this.props.pandaren} />
    );
  }
};

const mapStateToProps= (state) =>{
  return{
    pandaren: state.cont_race.pandaren
  }
}


export default connect (mapStateToProps) (Pandaren);