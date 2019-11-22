import React from 'react';
import {
  shallow
} from 'enzyme';
import NewsContainer from './NewsContainer';
import NewsArticle from '../NewsArticle/NewsArticle.js';

describe('NewsContainer', () => {
  it('should match the snapshot with correct data', () => {
      const wrapper = shallow( < NewsContainer articleList = {
          ['test']
        }
        />);
        expect(wrapper).toMatchSnapshot();
      });

  it('should render news articles', () => {
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
      const wrapper = shallow( < NewsContainer articleList = {mockList}/>);
      const expected = ( < NewsArticle
        description = "Key mitten forest masterpiece raindrop."
        headline = "Music kitchen vase hammock prince dugout"/> );

      expect(wrapper.instance().renderNewsArticles().length).toEqual(3);
      expect(wrapper.instance().renderNewsArticles()[1].props.headline).toEqual(expected.props.headline);
    });
  });
