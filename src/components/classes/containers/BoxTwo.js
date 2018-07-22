import React, { Component } from 'react';
import '../Classes.css';
import { connect } from 'react-redux';
import FrameBoxes from './frameBoxes';

class BoxTwo extends Component {

  render(){
    return(
      <FrameBoxes tablet={this.props.tabletTwo} />
    );
  }
}

const mapStateToProps= (state) => {
  return{
  tabletTwo: state.tabletClass.Two
  };
}

export default connect (mapStateToProps) (BoxTwo);