import React, { Component } from 'react';
import { connect } from 'react-redux';
import CarcassForEachRaces from './CarcassForEachRaces';


class Tauren extends Component{
  render(){
    return(
      <CarcassForEachRaces race={this.props.tauren} />
    );
  }
};

const mapStateToProps= (state) =>{
  return{
    tauren: state.cont_race.tauren
  }
}


export default connect (mapStateToProps) (Tauren);