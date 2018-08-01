import React, { Component } from 'react';
import { connect } from 'react-redux';
import CarcassForEachGuides from './CarcassForEachGuides';

class GuideDruid extends Component{
	render(){
		return(
			<CarcassForEachGuides item={this.props.druid}/>
		);
	}
}

const mapStateToProps= (state) =>{
  return{
    druid: state.cont_guide.druid
  }
}

export default connect (mapStateToProps) (GuideDruid);