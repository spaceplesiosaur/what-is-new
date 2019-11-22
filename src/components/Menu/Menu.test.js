import React from 'react';
import {
  shallow
} from 'enzyme';
import Menu from './Menu';

describe('Menu', () => {
  it('should match the snapshot with correct data', () => {
      const wrapper = shallow( < Menu menuItems = {
          ["test"]
        }
        setTopic = {
          jest.fn()
        }
        />);
        expect(wrapper).toMatchSnapshot();
      });

    it('should call setTopic with the right ID', () => {
        const mockMenu = [{
            name: 'Entertainment',
            image: '/favicon.ico',
            id: 'mockArticlesentertainment'
          },
          {
            name: 'Health',
            image: '/favicon.ico',
            id: 'mockArticleshealth'
          },
          {
            name: 'Local News',
            image: '/favicon.ico',
            id: 'mockArticleslocal'
          },
        ]
        const setTopicMock = jest.fn()

        const wrapper = shallow( < Menu menuItems = {
            mockMenu
          }
          setTopic = {
            setTopicMock
          }
          />);

          wrapper.find("#mockArticleslocal").simulate('click')

          expect(setTopicMock).toHaveBeenCalledWith('mockArticleslocal')
        })
    });
