import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
  shallow
} from 'enzyme';

describe('App', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render( < App / > , div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should render app', () => {
    const wrapper = shallow( < App / > );
    expect(wrapper).toMatchSnapshot();
  });

  it('should update state with a new topic when a topic switch is called', () => {
    const wrapper = shallow( < App / > );
    const mockArticles = {
      entertainment: ['article'],
      health: ['article'],
      local: ['article']
    }
    const mockMenu = [{
        name: 'Entertainment',
        image: '/favicon.ico',
        id: [mockArticles.entertainment]
      },
      {
        name: 'Health',
        image: '/favicon.ico',
        id: [mockArticles.health]
      },
      {
        name: 'Local News',
        image: '/favicon.ico',
        id: [mockArticles.local]
      },
    ]
    wrapper.setState({
      menu: mockMenu
    })
    const expected = [mockArticles.entertainment];

    expect(wrapper.state('topic')).toEqual([])
    wrapper.instance().setTopic(mockMenu[0].id)

    expect(wrapper.state('topic')).toEqual(expected);
  })

  it('should filter current article list when keyword is entered', () => {
    const wrapper = shallow( < App / > );
    const mockList = [{
        headline: "Popcorn butterfly moose banana split",
        description: "Floof cat kitten kitty.",
      },
      {
        headline: "Music kitchen vase hammock prince dugout",
        description: "Key mitten forest masterpiece raindrop.",
      },
      {
        headline: "Kitten kitten magic stodger",
        description: "Bops.",
      }
    ]
    const expected1 = [mockList[0], mockList[2]]
    const expected2 = [mockList[1]]
    wrapper.setState({
      topic: mockList
    })
    wrapper.instance().filterArticles("kitten")
    expect(wrapper.state('topic')).toEqual(expected1)
    wrapper.setState({
      topic: mockList
    })
    wrapper.instance().filterArticles("hammock")
    expect(wrapper.state('topic')).toEqual(expected2)
  })
})
