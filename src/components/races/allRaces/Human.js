import React, { Component } from 'react';
import { connect } from 'react-redux';
import CarcassForEachRaces from './CarcassForEachRaces';


class Human extends Component{
  render(){
    return(
      <CarcassForEachRaces race={this.props.human} />
    );
  }
};

const mapStateToProps= (state) =>{
  return{
    human: state.cont_race.human
  }
}


export default connect (mapStateToProps) (Human);