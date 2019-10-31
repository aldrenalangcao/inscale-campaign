import React from 'react';
import { shallow } from 'enzyme';

import Budget from './Budget';

it('should properly format the passed amount props', () => {
  const wrapper = shallow(<Budget amount={1000000} />);
  expect(wrapper.type()).toEqual('div');
  expect(wrapper.find('p').text()).toEqual('$ 1.00m');
});
