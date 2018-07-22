import React, { Component } from 'react';
import { connect } from 'react-redux';
import CarcassForEachRaces from './CarcassForEachRaces';


class Orc extends Component{
  render(){
    return(
      <CarcassForEachRaces race={this.props.orc} />
    );
  }
};

const mapStateToProps= (state) =>{
  return{
    orc: state.cont_race.orc
  }
}


export default connect (mapStateToProps) (Orc);