import * as types from '../constants/actionTypes';
import DataSvc from '../services/data.svc';

// load User Info
export function loadUserInfo(data) {
    return {
      type: types.LOAD_USER_INFO,
      data
    };
  }
  
  // get User Info
export function getUserInfo(emp_id) {
    return function (dispatch) {
      DataSvc.api.getUserInfo(emp_id)
        .then(response => {
          dispatch(loadUserInfo(response.data));
        })
    }
  }

// Load OutLets LIsi
 export function loadOutletList(data) {
    return {
       type: types.LOAD_OUTLET_LIST,
       data
    };
 }

 // Get Outlet Lists
 export function getOutletList() {
   return function (dispatch) {
      DataSvc.api.getOutletList()
       .then(response=> {
         dispatch(loadOutletList(response[0].data));
       })
   }
 }

 // Load MenuItem List
export function loadMenuItems(data) {
  return {
     type: types.LOAD_MENU_ITEMS,
     data
  };
}

// Get Menu Item List
export function getMenuItems(id) {
 return function (dispatch) {
    DataSvc.api.getMenuItems(id)
     .then(response=> {
       dispatch(loadMenuItems(response.data[0].menu_items));
     })
 }
}

 // Load MenuItemDetails
 export function loadMenuItemDetails(data) {
  return {
     type: types.LOAD_MENU_ITEM_DETAILS,
     data
  };
}

// Get Menu Item List
export function getMenuItemDetails() {
 return function (dispatch) {
    DataSvc.api.getMenuItemDetails()
     .then(response=> {
       dispatch(loadMenuItemDetails(response));
     })
 }
}
export function loadCheckedItems(data) {
  return {
     type: types.LOAD_CHECKED_ITEMS,
     data
  };
}
export function getCheckedItems(items) {
  return function (dispatch) {
     dispatch(loadCheckedItems(items));     
  }
 }

 export function loadActiveOutlet(data) {
  return {
     type: types.LOAD_ACTIVE_OUTLET,
     data
  };
}
export function getActiveOutlet(item) {
  return function (dispatch) {
     dispatch(loadActiveOutlet(item));  
     console.log("Data Action")   
  }
 }

