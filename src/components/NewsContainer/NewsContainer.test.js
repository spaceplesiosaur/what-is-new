import React from 'react';
import { shallow } from 'enzyme';
import NewsContainer from './NewsContainer';

describe('NewsContainer', () => {
  it('should match the snapshot with correct data', () => {
    const wrapper = shallow(<NewsContainer
    articleList={['test']}
    />);
    expect(wrapper).toMatchSnapshot();
  });
});
