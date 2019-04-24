
//data service
const DataSvc = {};

DataSvc.checkStatus = function (response) {
  if (response.ok) {
    return response;
  } else {
    let error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
};
let baseUrl = "https://ancient-meadow-65027.herokuapp.com/";
if (process.env.NODE_ENV === 'development') {
  baseUrl = "https://ancient-meadow-65027.herokuapp.com/";
}

// fetch data from api server

DataSvc.api = {}


// getUserInfo
DataSvc.api.getUserInfo = function (endPoint) {
  endPoint = 'users/'+ endPoint;
  return fetch(baseUrl + endPoint)
    .then(DataSvc.checkStatus)
    .then(response => response.json())
    .catch(e => e)
}

DataSvc.api.getOutletList = function(){
  let endPoint = 'outlets';
  return fetch(baseUrl + endPoint)
   .then(DataSvc.checkstatus)
   .then(response=> response.json())
   .catch(e => e)
}

DataSvc.api.getMenuItems = function(id){
   let endPoint = 'outletMenu/'+id;
  return fetch(baseUrl + endPoint)
   .then(DataSvc.checkstatus)
   .then(response=> response.json())
   .catch(e => e)
}
DataSvc.api.getMenuItemDetails = function(){
  let endPoint = 'itemsAll';
  return fetch(baseUrl + endPoint)
   .then(DataSvc.checkstatus)
   .then(response=> response.json())
   .catch(e => e)
}

export default DataSvc;