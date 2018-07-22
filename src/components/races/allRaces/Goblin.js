import React, { Component } from 'react';
import { connect } from 'react-redux';
import CarcassForEachRaces from './CarcassForEachRaces';


class Goblin extends Component{
  render(){
    return(
      <CarcassForEachRaces race={this.props.goblin} />
    );
  }
};

const mapStateToProps= (state) =>{
  return{
    goblin: state.cont_race.goblin
  }
}


export default connect (mapStateToProps) (Goblin);