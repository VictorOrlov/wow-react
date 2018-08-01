import React, { Component } from 'react';
import { connect } from 'react-redux';
import CarcassForEachGuides from './CarcassForEachGuides';

class GuidePaladin extends Component{
	render(){
		return(
			<CarcassForEachGuides item={this.props.paladin}/>
		);
	}
}

const mapStateToProps= (state) =>{
  return{
    paladin: state.cont_guide.paladin
  }
}

export default connect (mapStateToProps) (GuidePaladin);