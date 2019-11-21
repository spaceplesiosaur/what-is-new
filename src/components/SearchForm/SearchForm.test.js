import React from 'react';
import { shallow } from 'enzyme';
import SearchForm from './SearchForm';

describe('SearchForm', () => {
  it('should match the snapshot with correct data', () => {
    const wrapper = shallow(<SearchForm
    filterArticles={jest.fn()}
    />);
    expect(wrapper).toMatchSnapshot();
  });
});
