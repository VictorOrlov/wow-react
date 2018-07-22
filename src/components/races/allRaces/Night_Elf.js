import React, { Component } from 'react';
import { connect } from 'react-redux';
import CarcassForEachRaces from './CarcassForEachRaces';


class Night_Elf extends Component{
  render(){
    return(
      <CarcassForEachRaces race={this.props.night_elf} />
    );
  }
};

const mapStateToProps= (state) =>{
  return{
    night_elf: state.cont_race.night_elf
  }
}


export default connect (mapStateToProps) (Night_Elf);