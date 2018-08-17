import React, { Component } from 'react';
import { PostData } from '../services/PostData';
import { Redirect } from 'react-router-dom';
import './Signup.css';
import { Col, Row, Grid, 
  Button, Form, FormGroup, 
  FormControl, ControlLabel, Image } from 'react-bootstrap';
// import './styles/foundation.min.css';

class Signup extends Component {

  constructor(props){
    super(props);
    this.state ={
      username:'',
      password: '',
      email: '',
      redirect: false
    }

    this.signup = this.signup.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  signup(){

    if(this.state.username && this.state.password){
      PostData('signup', this.state).then ((result) =>{
        let responseJSON = result;
        if(responseJSON.userData){
          sessionStorage.setItem('userData', responseJSON);
          this.setState({redirect: true});
        }
        else{
        console.log("Login error");
      }
    });
    }
    
  }

  onChange(e){
    this.setState({[e.target.name]: e.target.value});

  }

  render() {

    if(this.state.redirect){
      return (<Redirect to={'/home'} />);
    }

    if(sessionStorage.getItem("userData")){
      return (<Redirect to={'/home'} />);
    }


    return (
      <div className="bgSignup">
        <Grid> 
          <Row>

            <Col md={12} smHidden xsHidden className="spirit"></Col>
              
            

           <Col md={4} mdOffset={4} sm={6} smOffset={3} xs={8} xsOffset={2} >
              
              <Col xsHidden>
                <Image src = {require ('../../../image/bg_Login_and_Signup/WoW_LoginSing.png')} />
              </Col>

              <Form horizontal>
                <FormGroup controlId="formHorizontalLogin">
                  <Col componentClass={ControlLabel} sm={2}>
                    Логин
                  </Col>
                  <Col sm={10}>
                    <FormControl 
                      type="text"
                      name="username" 
                      placeholder="Логин"
                      onChange={this.onChange} />
                  </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalPassword">
                  <Col componentClass={ControlLabel} sm={2}>
                    Пароль
                  </Col>
                  <Col sm={10}>
                    <FormControl 
                       type="password" 
                       name="password"
                       placeholder="Пароль"
                       onChange={this.onChange} />
                  </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalEmail">
                  <Col componentClass={ControlLabel} sm={2}>
                    Email
                  </Col>
                  <Col sm={10}>
                    <FormControl 
                       type="text" 
                       name="email"
                       placeholder="email"
                       onChange={this.onChange} />
                  </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalName">
                  <Col componentClass={ControlLabel} sm={2}>
                    Имя
                  </Col>
                  <Col sm={10}>
                    <FormControl 
                       type="text" 
                       name="name"
                       placeholder="Имя"
                       onChange={this.onChange} />
                  </Col>
                </FormGroup>

                <FormGroup>
                  <Col smOffset={2} sm={10} className="butSign">
                    <Button 
                    type="submit"
                    onClick={this.signup}
                    bsStyle="primary">
                      Регистрация
                    </Button>
                    <a href="/login">Авторизация</a>
                  </Col>
                </FormGroup>
              </Form>
            </Col>
          </Row>
        </Grid>
       </div>
    );
  }
}

export default Signup;