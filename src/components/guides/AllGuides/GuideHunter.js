import React, { Component } from 'react';
import { connect } from 'react-redux';
import CarcassForEachGuides from './CarcassForEachGuides';

class GuideHunter extends Component{
	render(){
		return(
			<CarcassForEachGuides item={this.props.hunter}/>
		);
	}
}

const mapStateToProps= (state) =>{
  return{
    hunter: state.cont_guide.hunter
  }
}

export default connect (mapStateToProps) (GuideHunter);