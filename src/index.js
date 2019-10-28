import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import { addCampaign } from './actions/campaignActions';

import './index.css';
import App from './App';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

//Add adding of campaign to global document object
window.AddCampaigns = campaign => store.dispatch(addCampaign(campaign));
window.store = store;
