import React from 'react';
import { shallow } from 'enzyme';
import SearchForm from './SearchForm';

describe('SearchForm', () => {
  it('should match the snapshot with correct data', () => {
      const wrapper = shallow( <SearchForm
        filterArticles = {jest.fn()}
      />);
      expect(wrapper).toMatchSnapshot();
    });

  it('should change state on change to match input', () => {
    const wrapper = shallow( <SearchForm
      filterArticles = {jest.fn()}
      />);

    wrapper.setState({searchInput: ""})

    const mockEvent = {target: {value: 'kitten'}}
    const expected = 'kitten';

    wrapper.instance().updateInput(mockEvent)

    expect(wrapper.state('searchInput')).toEqual(expected)
  })

  it('should call filter article function based on input on click', () => {
    const filterStoriesMock = jest.fn();
    const wrapper = shallow( <SearchForm
      filterArticles = {filterStoriesMock}
    />);
    wrapper.setState({searchInput: 'Hank Azaria'})
    const expected = 'Hank Azaria'
    const mockEvent = {target: {previousSibling: {value: 'Hank Azaria'}}}

    wrapper.find('button').simulate('click', mockEvent);
    expect(filterStoriesMock).toHaveBeenCalledWith(expected.toUpperCase());
  })

  it('should call updateInput when search is clicked', () => {
    const wrapper = shallow( <SearchForm
      filterArticles = {jest.fn()}
    />);
    wrapper.setState({searchInput: 'Hank Azaria'})
    const mockEvent = {target: {previousSibling: {value: 'kitten'}}}

    wrapper.find('button').simulate('click', mockEvent);
    expect(wrapper.state('searchInput')).toEqual('')
  })
});
