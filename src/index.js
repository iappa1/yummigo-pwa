import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import routes from './routes';
import { createStore, applyMiddleware } from 'redux';
import allReducers from './reducers';
import thunk from 'redux-thunk';

const middlewares = [thunk];

const store = createStore(allReducers, applyMiddleware(...middlewares));

const renderRoute = (route, props) => {
    window.scrollTo(0, 0); // Reset scroll to top
    return (
      <route.component routeParams={props.match.params} />
    );
  };
  
  // Helper function that create all routes
  const createRoutes = () => routes.map((route) => (
    <Route
      exact
      key={route.path}
      path={route.path}
      component={(props) => renderRoute(route, props)}>
    </Route>
  ));
  
  ReactDOM.render(
    <Provider store={store}>   
      <BrowserRouter>
        <div className="root-content">
          {createRoutes()}
        </div>
      </BrowserRouter>
      </Provider>,
    document.getElementById('root')
  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
