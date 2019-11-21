import React from 'react';
import { shallow } from 'enzyme';
import NewsArticle from './NewsArticle';

describe('NewsArticle', () => {
  it('should match the snapshot with correct data', () => {
    const wrapper = shallow(<NewsArticle
      key='test'
      id='test'
      img='test'
      headline='test'
      description='test'
      url='test'
    />);
    expect(wrapper).toMatchSnapshot();
  });
});
