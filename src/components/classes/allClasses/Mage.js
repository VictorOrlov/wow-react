import React, { Component } from 'react';
import { connect } from 'react-redux';
import CarcassForEachClass from './CarcassForEachClass';


class Mage extends Component{

  
  render(){
    return(
     <CarcassForEachClass class={this.props.mage} />
      );
  }
};

const mapStateToProps = (state) => {
  return{
    mage: state.cont_class.mage
  };
}


export default connect(mapStateToProps) (Mage);