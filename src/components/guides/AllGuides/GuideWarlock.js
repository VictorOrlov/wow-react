import React, { Component } from 'react';
import { connect } from 'react-redux';
import CarcassForEachGuides from './CarcassForEachGuides';

class GuideWarlock extends Component{
	render(){
		return(
			<CarcassForEachGuides item={this.props.warlock}/>
		);
	}
}

const mapStateToProps= (state) =>{
  return{
    warlock: state.cont_guide.warlock
  }
}

export default connect (mapStateToProps) (GuideWarlock);