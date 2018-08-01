import React, { Component } from 'react';
import { connect } from 'react-redux';
import CarcassForEachGuides from './CarcassForEachGuides';

class GuideDK extends Component{
	render(){
		return(
			<CarcassForEachGuides item={this.props.dk}/>
		);
	}
}

const mapStateToProps= (state) =>{
  return{
    dk: state.cont_guide.dk
  }
}

export default connect (mapStateToProps) (GuideDK);