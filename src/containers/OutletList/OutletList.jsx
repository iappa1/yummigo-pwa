import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as dataAction from '../../actions/appdata.action';
import './outletList.scss';
import Outlet from '../../components/Outlet';

class OutletList extends Component {
    constructor(props) {
        super(props);
        this.state = {
          outletList : {}
        }

    }
    componentWillMount () {
        this.props.dataAction.getOutletList();
    }
   
    render(){
        let outletList = this.props.globalState ? this.props.globalState.outletList : {}
        return (
           <div className="outlet-page">
              <div className="outlet-header">
              </div>
              <div className="outlet-card">
              { outletList && outletList.map((item, i) => {
                   return (
                    <div>   
                     <Outlet outlet={item}/>
                     <br/>
                    </div>
                   )
                 })
             }
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

  
export default connect(mapStateToProps, matchDispatchToProps)(withRouter(OutletList));
