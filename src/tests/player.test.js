import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import Player from './../components/Player/Player';

describe('Player ', () => {
  test('component renders', () => {
    const component = renderer.create(<Player/>);

    let tree = component.toJSON()
    expect(tree).toMatchSnapshot();
  });
});