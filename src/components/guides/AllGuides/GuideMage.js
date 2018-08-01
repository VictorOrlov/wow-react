import React, { Component } from 'react';
import { connect } from 'react-redux';
import CarcassForEachGuides from './CarcassForEachGuides';

class GuideMage extends Component{
	render(){
		return(
			<CarcassForEachGuides item={this.props.mage}/>
		);
	}
}

const mapStateToProps= (state) =>{
  return{
    mage: state.cont_guide.mage
  }
}

export default connect (mapStateToProps) (GuideMage);