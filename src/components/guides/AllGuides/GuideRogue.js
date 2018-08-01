import React, { Component } from 'react';
import { connect } from 'react-redux';
import CarcassForEachGuides from './CarcassForEachGuides';

class GuideRogue extends Component{
	render(){
		return(
			<CarcassForEachGuides item={this.props.rogue}/>
		);
	}
}

const mapStateToProps= (state) =>{
  return{
    rogue: state.cont_guide.rogue
  }
}

export default connect (mapStateToProps) (GuideRogue);