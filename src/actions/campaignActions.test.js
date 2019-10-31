import { ADD_CAMPAIGN, addCampaign } from './campaignActions';

it('should return proper action object for addCampaign', () => {
  const campaign = {
    id: 1,
    data: 'data',
  };
  expect(addCampaign(campaign)).toEqual({
    type: ADD_CAMPAIGN,
    data: campaign,
  });
});
