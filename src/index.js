import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import NewPost from './components/new-post';
import reducers from './reducers';
import PostIndex from './components/posts-index';
import PostShow from './components/post-show';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
		<div className="container-fluid">
			<Switch>
				<Route path="/posts/new" component={NewPost} />			
				<Route path="/posts/:id" component={PostShow} />
				<Route path="/" component={PostIndex} />
			</Switch>
		</div>
	</BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
