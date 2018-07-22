import React, { Component } from 'react';
import { connect } from 'react-redux';
import CarcassForEachClass from './CarcassForEachClass';


class Monk extends Component{

  
  render(){
    return(
      <CarcassForEachClass class={this.props.monah} />
      );
  }
};

const mapStateToProps = (state) => {
  return{
    monah: state.cont_class.monah
  };
}


export default connect(mapStateToProps) (Monk);