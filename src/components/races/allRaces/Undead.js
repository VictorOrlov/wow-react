import React, { Component } from 'react';
import { connect } from 'react-redux';
import CarcassForEachRaces from './CarcassForEachRaces';


class Undead extends Component{
  render(){
    return(
      <CarcassForEachRaces race={this.props.undead} />
    );
  }
};

const mapStateToProps= (state) =>{
  return{
    undead: state.cont_race.undead
  }
}


export default connect (mapStateToProps) (Undead);