import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import * as dataAction from '../../actions/appdata.action';
import { withRouter } from 'react-router-dom';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

import './OrderSummary.scss'

class OrderSummary extends Component{
    constructor(props){
        super(props);
        this.state = {
           checked: [],
        }
    }

    render(){
        let menuItems = this.props.globalState ? this.props.globalState.menuItems : {};
        let checkedItems = this.props.globalState ? this.props.globalState.checkedItems : {};
        let activeOutlet = this.props.globalState ? this.props.globalState.activeOutlet : {};
        let totalValue = 0
        return(
            <div>
                <div className="summaryHeader">
                     Order Placed Successfully !!
                </div>
                <div className="minSummaryHeader">
                     Order Summary from {activeOutlet.outlet_name}
                </div>
                <div className="summaryBody">
                <List dense className="MenuList">
                 {checkedItems && menuItems && checkedItems.map((item,i) => {
                     totalValue = parseInt(totalValue) + parseInt(menuItems[item].cost);
                     return (
                    <ListItem height="40" key={i} button>
                    <ListItemText primary={`${menuItems[item].item_name}` } secondary={`1 X ${menuItems[item].cost}Rs` }/>
                       <ListItemSecondaryAction>
                         <ListItemText secondary={`${menuItems[item].cost}Rs`}/>
                       </ListItemSecondaryAction>
                    </ListItem>
                     )})}
                <br/>     
                <ListItem>
                    <ListItemText primary={`Total Value`}/>
                    <ListItemSecondaryAction>
                         <ListItemText primary={`${totalValue}.00 Rs`}/>
                       </ListItemSecondaryAction>
                </ListItem> 
                </List>
                <br/>
                <br/>
                </div>
                <div className="summaryFooter">
                <NavLink className="buttonDone" to='/OutletList'>Done</NavLink>
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

export default connect(mapStateToProps, matchDispatchToProps)(withRouter(OrderSummary));