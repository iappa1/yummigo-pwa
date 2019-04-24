import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as dataAction from '../../actions/appdata.action';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import './menuitems.scss';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';




class MenuItems extends Component {
    constructor(props){
        super(props);
        this.state = {
            checked: [],
        }
   
     } 
    handleToggle = value => () => {
        const { checked } = this.state;
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];
    
        if (currentIndex === -1) {
          newChecked.push(value);
        } else {
          newChecked.splice(currentIndex, 1);
        }
    
        this.setState({
          checked: newChecked,
        }, ()=> {
        this.props.dataAction.getCheckedItems(this.state.checked);
        });
     };
    componentWillMount () {
        let activeOutlet = this.props.globalState ? this.props.globalState.activeOutlet.outlet_id : {}
        this.props.dataAction.getMenuItems(activeOutlet) 
     }  
    render() {
        let menuItems = this.props.globalState ? this.props.globalState.menuItems : {};
        let outletList  = this.props.globalState ? this.props.globalState.outletList : {};
        let activeOutlet = this.props.globalState ? this.props.globalState.activeOutlet : {};
        console.log('Checked Items are :'+this.state.checked);
        return (
            <div className="outlet-page">
              <div className="Meenu" >
                 <Card className="Menu">
                   <CardActionArea>
                      <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        className="MenuMedia"
                        height="140"
                        image={require('../../i/'+activeOutlet.outlet_id+'.jpg')}
                        title="Contemplative Reptile"
                 />
                 <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                   {activeOutlet.outlet_name}
                  </Typography>
                  <Typography component="p">
                     Select items from Menu
                 </Typography>
            </CardContent>
                 </CardActionArea>
               </Card>
              </div>
              <List dense className="MenuList">
                 {menuItems && menuItems.map((item,i) => {
                     return (
                    <ListItem key={i} button>
                    <ListItemText primary={`${item.item_name}`} secondary={`${item.cost}Rs`} />
                    <ListItemSecondaryAction>
                       <Checkbox
                         onChange={this.handleToggle(i)}
                         checked={this.state.checked.indexOf(i) !== -1}
                        />
                    </ListItemSecondaryAction>
                  </ListItem>
                     )})}
              </List>
              <div className="MenuFooter">
              <NavLink to='/OutletList' className="buttonBack">Main Menu</NavLink>
              <NavLink to='/OrderSummary' className="buttonOrder">Order Now</NavLink>
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

export default connect(mapStateToProps, matchDispatchToProps)(withRouter(MenuItems));