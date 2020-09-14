import React from 'react';
import { shallow } from 'enzyme';
import Navbar from './../components/Navbar/Navbar';

describe('Navbar component', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Navbar debug />);
    expect(component).toMatchSnapshot();
  });
});
