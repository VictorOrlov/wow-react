import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import proffSelect from '../../../actions/proffSelect';

class ProffList extends Component{ 
  showProffessions(){
    return this.props._proff.map((item) => {
      return(
        <ListGroupItem 
        key={item.id}
        className={item.style}
        onClick={() =>{
          this.props.proffSelect(item)
        }}>
      <a href="#top"><h4 >{item.name}</h4></a>

        </ListGroupItem>
      );
    });
  }  
  render(){
    return(
      <div >
            <ListGroup>
              {this.showProffessions()}
            </ListGroup>
      </div>
      );
  }
}

const mapStateToProps = (state) => {
  return{
    _proff: state._proff
  }
}

const mapActionToProps = (dispatch) => {
  return bindActionCreators({proffSelect: proffSelect}, dispatch);
}

export default connect (mapStateToProps, mapActionToProps) (ProffList);