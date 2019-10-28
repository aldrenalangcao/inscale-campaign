import { ADD_CAMPAIGN } from '../actions/campaignActions';
import campaignsInitialState from './campaignsInitialState';

const campaigns = (state = campaignsInitialState, action) => {
  switch (action.type) {
    case ADD_CAMPAIGN:
      const newState = [...state].concat(action.data);
      return newState;
      
    default:
      return state
  }
}

export default campaigns;