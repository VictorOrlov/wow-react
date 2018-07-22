import React, { Component } from 'react';
import { connect } from 'react-redux';
import CarcassForEachRaces from './CarcassForEachRaces';


class Blood_Elf extends Component{
  render(){
    return(
      <CarcassForEachRaces race={this.props.blood_elf} />
    );
  }
};

const mapStateToProps= (state) =>{
  return{
    blood_elf: state.cont_race.blood_elf
  }
}


export default connect (mapStateToProps) (Blood_Elf);