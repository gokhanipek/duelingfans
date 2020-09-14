import React from 'react';
import { shallow  } from 'enzyme';
import Duel from './../components/Duel/Duel';
import Player from './../components/Player/Player';

describe('Duel component', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Duel debug />);
  
    expect(component).toMatchSnapshot();
  });

  it('does not render <Player /> component if no player available', () => {
    const wrapper = shallow(<Duel />);
    expect(wrapper.find(Player)).toHaveLength(0);
  });
});

  