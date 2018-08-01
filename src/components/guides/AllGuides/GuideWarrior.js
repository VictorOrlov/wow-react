import React, { Component } from 'react';
import { connect } from 'react-redux';
import CarcassForEachGuides from './CarcassForEachGuides';

class GuideWarrior extends Component{
	render(){
		return(
			<CarcassForEachGuides item={this.props.warrior}/>
		);
	}
}

const mapStateToProps= (state) =>{
  return{
    warrior: state.cont_guide.warrior
  }
}

export default connect (mapStateToProps) (GuideWarrior);