import React from 'react';
import { shallow } from 'enzyme';
import Result from './../components/Results/Result';

describe('Result component', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Result debug />);
  
    expect(component).toMatchSnapshot();
  });
});
