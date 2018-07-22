import React, { Component } from 'react';
import { connect } from 'react-redux';
import CarcassForEachRaces from './CarcassForEachRaces';


class Draeney extends Component{
  render(){
    return(
      <CarcassForEachRaces race={this.props.draeney} />
    );
  }
};

const mapStateToProps= (state) =>{
  return{
    draeney: state.cont_race.draeney
  }
}


export default connect (mapStateToProps) (Draeney);