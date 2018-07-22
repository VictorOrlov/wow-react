import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, Col } from 'react-bootstrap';
import './Addons.css';

class AddonsTable extends Component{

	showTableAddons(){
		return this.props.addon.map((item)=>{
			return(
				<span key={item.id}>
					<a name={item.anchor}> </a> <br/>
					<h3 className="textBrown">{item.name}</h3>
					<Table bordered>
						{item.tables.map((texttable)=>{
							return (
								<tbody key={texttable.id}>
  							  <tr className="tr_border">
  							    <td className="addonsTable">{texttable.img}</td>
  							    <td className="addonsTable">{texttable.text}</td>
  							    <td className="addonsTable"><p>{texttable.donload}</p></td>
  							  </tr>
  								</tbody>
								);
						})}
					</Table><br/>
				</span>
				);
		});
	}

	render(){
		return(
			<Col>
  			{this.showTableAddons()}
			</Col>
		);
	}
}

const mapStateToProps = (state) => {
  return{
    addon: state.addon
  }
}

export default connect(mapStateToProps) (AddonsTable);