import React from 'react';
import { NavLink } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as dataAction from '../../actions/appdata.action';
import { withRouter } from 'react-router-dom';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
//import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PlaceIcon from '@material-ui/icons/Place';
import RatingIcon from '@material-ui/icons/StarRate';

import './Outlet.scss';


const Outlet = (props) => {
    return (
       <div>
           {props.outlet ? (
               <Card className="ouletCard">
               <CardActionArea>
                 <CardMedia
                   component="img"
                   className="outletMedia"
                   height="140"
                   image={require('../../i/'+props.outlet.outlet_id+'.jpg')}
                   title="Contemplative Reptile"
                 />
                 <CardContent>
                   <Typography gutterBottom variant="h5" component="h2">
                     {props.outlet.outlet_name}
                   </Typography>
                  <PlaceIcon>place</PlaceIcon>
                  <Typography component="p">{props.outlet.outlet_location}</Typography>
                  <RatingIcon>rating</RatingIcon>
                  <Typography component="p">{props.outlet.outlet_rating}</Typography>
                 </CardContent>
               </CardActionArea>
               <CardActions>
                 <NavLink to="/MenuItems" onClick={()=>props.dataAction.getActiveOutlet(props.outlet)}
className="buttonMenu">See Menu</NavLink>
               </CardActions>
             </Card>
           ): null }
       </div>
    )
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

export default connect(mapStateToProps, matchDispatchToProps)(withRouter(Outlet));

