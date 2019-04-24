import * as types from '../constants/actionTypes';

let defaultState = {
    globalState: {
     userInfo: {},
     outletList: {},
     menuItems:{},
     itemsAll:{},
     checkedItems:{},
     activeOutlet:{},
    },
    db: {
     UserInfo: {}
    }
  };


  export function saveToLocal(keyword, data) {
  
    localStorage.setItem(keyword, JSON.stringify({ ...data
    }));
  }
  
  export function readFromLocal(keyword) {
    let localData = localStorage.getItem(keyword);
    localData = localData ? JSON.parse(localData) : {};
    return localData;
  }
  
  function populateDataFromLocalstore(keyword) {
    let localData = readFromLocal(keyword);
    defaultState[keyword] = { ...defaultState[keyword],
      ...localData
    };
  }

  export default (state = defaultState, action) => {
  
    populateDataFromLocalstore('globalState');
  
    let globalState = {};
    switch (action.type) {
     case types.LOAD_USER_INFO:
       globalState = state.globalState;
       globalState.userInfo =  action.data;
       
       saveToLocal('globalState', globalState);
       return {
         ...state,
         ...{globalState:globalState}
       };

    case types.LOAD_OUTLET_LIST:
      globalState = state.globalState;
      globalState.outletList =  action.data;
    
      saveToLocal('globalState', globalState);
      return {
        ...state,
        ...{globalState:globalState}
      };
   case types.LOAD_MENU_ITEMS:
      globalState = state.globalState;
      globalState.menuItems =  action.data;
    
      saveToLocal('globalState', globalState);
      return {
        ...state,
        ...{globalState:globalState}
      };
   case types.LOAD_MENU_ITEM_DETAILS:
      globalState = state.globalState;
      globalState.itemsAll =  action.data;
    
      saveToLocal('globalState', globalState);
      return {
        ...state,
        ...{globalState:globalState}
      };
   case types.LOAD_CHECKED_ITEMS:
      globalState = state.globalState;
      globalState.checkedItems =  action.data;
    
      saveToLocal('globalState', globalState);
      return {
        ...state,
        ...{globalState:globalState}
      };
    case types.LOAD_ACTIVE_OUTLET:
      globalState = state.globalState;
      globalState.activeOutlet =  action.data;
    
      saveToLocal('globalState', globalState);
      return {
        ...state,
        ...{globalState:globalState}
      };
     default:
         return state;
    }
    
  };