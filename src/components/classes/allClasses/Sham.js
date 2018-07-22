import React, { Component } from 'react';
import { connect } from 'react-redux';
import CarcassForEachClass from './CarcassForEachClass';


class Sham extends Component{

  
  render(){
    return(
     <CarcassForEachClass class={this.props.shaman} />
      );
  }
};

const mapStateToProps = (state) => {
  return{
    shaman: state.cont_class.shaman
  };
}


export default connect(mapStateToProps) (Sham);