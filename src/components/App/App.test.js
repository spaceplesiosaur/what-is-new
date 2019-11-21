import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should render app', () => {
  const wrapper = shallow(<App
  />);
  expect(wrapper).toMatchSnapshot();
});

// it('should set a topic based on menu selection', () => {
//   const app = new App();
//   app.setTopic(entertainment)
//
// })
