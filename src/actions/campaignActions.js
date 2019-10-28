export const ADD_CAMPAIGN = 'ADD_CAMPAIGN';

export const addCampaign = (campaign) => ({
  type: ADD_CAMPAIGN,
  data: campaign,
});