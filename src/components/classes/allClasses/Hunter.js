import React, { Component } from 'react';
import { connect } from 'react-redux';
import CarcassForEachClass from './CarcassForEachClass';


class Hunter extends Component{

  
  render(){
    return(
     <CarcassForEachClass class={this.props.hunter} />
      );
  }
};

const mapStateToProps = (state) => {
  return{
    hunter: state.cont_class.hunter
  };
}


export default connect(mapStateToProps) (Hunter);