import React, { Component } from 'react';
import { connect } from 'react-redux';
import CarcassForEachRaces from './CarcassForEachRaces';


class Gnome extends Component{
  render(){
    return(
      <CarcassForEachRaces race={this.props.gnome} />
    );
  }
};

const mapStateToProps= (state) =>{
  return{
    gnome: state.cont_race.gnome
  }
}


export default connect (mapStateToProps) (Gnome);