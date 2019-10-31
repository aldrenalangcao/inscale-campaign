import { addCampaign } from '../actions/campaignActions';
import campaigns from './campaigns';

it('should properly update the state when action type is ADD_CAMPAIGN', () => {
  const campaign = {
    id: 1,
    data: 'data1',
  };
  const action = addCampaign([campaign]);
  expect(campaigns([], action)).toEqual([campaign]);
  expect(
    campaigns(
      [
        {
          id: 0,
          data: 'data0',
        },
      ],
      action
    )
  ).toEqual([
    {
      id: 0,
      data: 'data0',
    },
    campaign,
  ]);
});

it("should return the same state if there's no handler for an action type", () => {
  const action = {
    type: 'NO_HANDLER_ACTION_TYPE',
  };
  expect(campaigns([], action)).toEqual([]);
  expect(
    campaigns(
      [
        {
          id: 1,
          data: 'data1',
        },
      ],
      action
    )
  ).toEqual([
    {
      id: 1,
      data: 'data1',
    },
  ]);
});
