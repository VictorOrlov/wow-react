import React, { Component } from 'react';
import { connect } from 'react-redux';
import CarcassForEachGuides from './CarcassForEachGuides';

class GuidePriest extends Component{
	render(){
		return(
			<CarcassForEachGuides item={this.props.priest}/>
		);
	}
}

const mapStateToProps= (state) =>{
  return{
    priest: state.cont_guide.priest
  }
}

export default connect (mapStateToProps) (GuidePriest);