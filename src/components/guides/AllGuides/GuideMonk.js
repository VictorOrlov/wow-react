import React, { Component } from 'react';
import { connect } from 'react-redux';
import CarcassForEachGuides from './CarcassForEachGuides';

class GuideMonk extends Component{
	render(){
		return(
			<CarcassForEachGuides item={this.props.monk}/>
		);
	}
}

const mapStateToProps= (state) =>{
  return{
    monk: state.cont_guide.monk
  }
}

export default connect (mapStateToProps) (GuideMonk);