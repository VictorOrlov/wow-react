import React, { Component } from 'react';
import '../Classes.css';
import { connect } from 'react-redux';
import FrameBoxes from './frameBoxes';

class BoxOne extends Component {
  render(){
    return(
      <FrameBoxes tablet={this.props.tabletOne} />
    );
  }
} 

const mapStateToProps= (state) => {
  return{
  tabletOne: state.tabletClass.One
  };
}


export default connect(mapStateToProps) (BoxOne);