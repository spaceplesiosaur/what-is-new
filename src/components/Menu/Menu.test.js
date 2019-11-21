import React from 'react';
import { shallow } from 'enzyme';
import Menu from './Menu';

describe('Menu', () => {
  it('should match the snapshot with correct data', () => {
    const wrapper = shallow(<Menu
    menuItems={["test"]}
    setTopic={jest.fn()}
    />);
    expect(wrapper).toMatchSnapshot();
  });
});
