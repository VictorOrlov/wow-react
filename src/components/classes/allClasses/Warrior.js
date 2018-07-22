import React, { Component } from 'react';
import { connect } from 'react-redux';
import CarcassForEachClass from './CarcassForEachClass';


class Warrior extends Component{

  render(){
    return(
      <CarcassForEachClass class={this.props.warrior} />
    );
  }
};

const mapStateToProps= (state) =>{
  return{
    warrior: state.cont_class.warrior
  }
}


export default connect(mapStateToProps) (Warrior);