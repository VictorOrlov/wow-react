import React, { Component } from 'react';
import { connect } from 'react-redux';
import CarcassForEachRaces from './CarcassForEachRaces';


class Dwarf extends Component{
  render(){
    return(
      <CarcassForEachRaces race={this.props.dwarf} />
    );
  }
};

const mapStateToProps= (state) =>{
  return{
    dwarf: state.cont_race.dwarf
  }
}


export default connect (mapStateToProps) (Dwarf);