import React from 'react';
import { act } from 'react-dom/test-utils';
import renderer from 'react-test-renderer';

import { Form } from '../components/Form';

test('работа Form', () => {

  const component = renderer.create(
    <Form />
  );

  let componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

  const inputElem = component.root.findByProps({"data-testid":"inpPas"}); 
  
  act(() => {
    const mockChangeEvent = { target: { value: '12345' } };
    inputElem.props.onChange(mockChangeEvent);
  });

  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();
  
});