import React, { Component } from 'react';
import { connect } from 'react-redux';
import CarcassForEachGuides from './CarcassForEachGuides';

class GuideSham extends Component{
	render(){
		return(
			<CarcassForEachGuides item={this.props.sham}/>
		);
	}
}

const mapStateToProps= (state) =>{
  return{
    sham: state.cont_guide.sham
  }
}

export default connect (mapStateToProps) (GuideSham);