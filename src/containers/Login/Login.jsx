import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as dataAction from '../../actions/appdata.action';
import './login.scss';


class Login extends Component {
  constructor(props) {
    super(props);

    this.loadUserInfo = this.loadUserInfo.bind(this);
    this.state = {
    }
   }
  loadUserInfo(id) {
       const userDetails = this.props.dataAction.getUserInfo(id);
       this.props.dataAction.getOutletList();
        if(userDetails){
        console.log('User Details : '+userDetails[0].employee_name)
        }
      
  }

  render() {

    return (
      <div className="page-wrapper login-page">
        <div className="login-card">
          <header className="flex center middle"><i className="logo"></i></header>
          <div className="row seperation-t">
            <label htmlFor="username">Username</label>
            <input className="textctrl" type="text" ref="user" placeholder="Enter Username" id="username" />
          </div>
          <div className="row"> 
            <label htmlFor="password">Password</label>
            <input className="textctrl" type="password" ref="pass" placeholder="Enter Password" id="password" />
          </div>
          <div className="row-action flex center">
          <button
                  onClick={()=>this.loadUserInfo(90008942)}
                  className={"btn-refresh "}>Log In</button>
         <NavLink to="/OutletList" className="btn">Sign In</NavLink>
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    ...state.appdataReducer
  }
};

const matchDispatchToProps = (dispatch) => {
  return {
    dataAction: bindActionCreators({ ...dataAction }, dispatch)
  }
};

export default connect(mapStateToProps, matchDispatchToProps)(withRouter(Login));