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

  it('should change state on change to match input', () => {
    const wrapper = shallow(<SearchForm
    filterArticles={jest.fn()}
    />);
    wrapper.setState({
      searchInput: ""
    })
    const mockEvent = { target: {value: 'kitten'}}
    const expected = 'kitten';

    wrapper.instance().updateInput(mockEvent)

    expect(wrapper.state('searchInput')).toEqual(expected)
    // expect(mockFilterArticles).toHaveBeenCalledWith(expected)

  })

  it('should filter articles based on input', () => {
    
  })
});
