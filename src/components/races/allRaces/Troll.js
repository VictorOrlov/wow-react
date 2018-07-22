import React, { Component } from 'react';
import { connect } from 'react-redux';
import CarcassForEachRaces from './CarcassForEachRaces';


class Troll extends Component{
  render(){
    return(
      <CarcassForEachRaces race={this.props.troll} />
    );
  }
};

const mapStateToProps= (state) =>{
  return{
    troll: state.cont_race.troll
  }
}


export default connect (mapStateToProps) (Troll);