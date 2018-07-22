import React, { Component } from 'react';
import { connect } from 'react-redux';
import CarcassForEachClass from './CarcassForEachClass';


class Paladin extends Component{

  
  render(){
    return(
      <CarcassForEachClass class={this.props.paladin} />
      );
  }
};

const mapStateToProps = (state) => {
  return{
    paladin: state.cont_class.paladin
  };
}


export default connect(mapStateToProps) (Paladin);