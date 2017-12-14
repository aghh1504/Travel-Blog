import React from 'react';
import '../index.css';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from '../Redux/Reducers'
import thunk from 'redux-thunk';
import PostList from '../Components/PostList'

const store = createStore(reducers,composeWithDevTools(applyMiddleware(thunk)))

const App = () => {
	return (
    <Provider store={store}>
		  <PostList />
    </Provider>
	)
}

export default App;
