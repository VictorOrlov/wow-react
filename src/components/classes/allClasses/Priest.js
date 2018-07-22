import React, { Component } from 'react';
import { connect } from 'react-redux';
import CarcassForEachClass from './CarcassForEachClass';


class Priest extends Component{

  
  render(){
    return(
      <CarcassForEachClass class={this.props.priest} />
      );
  }
};

const mapStateToProps = (state) => {
  return{
    priest: state.cont_class.priest
  };
}


export default connect(mapStateToProps) (Priest);