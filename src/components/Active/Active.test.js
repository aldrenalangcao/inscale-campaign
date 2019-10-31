import React from 'react';
import Active from './Active';
import { shallow } from 'enzyme';

it('should have proper className and text when passed true', () => {
  const wrapper = shallow(<Active isActive={true} />);
  expect(wrapper.type()).toEqual('div');
  expect(
    wrapper
      .find('span')
      .at(0)
      .hasClass('active')
  ).toBe(true);
  expect(wrapper.type()).toEqual('div');
  expect(
    wrapper
      .find('span')
      .at(1)
      .text()
  ).toEqual('Active');
});

it('should have proper className and text when passed false', () => {
  const wrapper = shallow(<Active isActive={false} />);
  expect(wrapper.type()).toEqual('div');
  expect(
    wrapper
      .find('span')
      .at(0)
      .hasClass('inactive')
  ).toBe(true);
  expect(wrapper.type()).toEqual('div');
  expect(
    wrapper
      .find('span')
      .at(1)
      .text()
  ).toEqual('Inactive');
});
