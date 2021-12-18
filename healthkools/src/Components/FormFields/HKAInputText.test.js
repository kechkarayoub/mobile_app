import React from 'react';
import HKAInputText from './HKAInputText'
import { StyleSheet, View, TextInput, Image, Alert } from 'react-native';
import renderer from 'react-test-renderer';
import { render, act, fireEvent } from '@testing-library/react-native'
describe("Testing HKAInputText component", () => {
  it("Should render without crash", () => {
    const tree = renderer.create(<HKAInputText />).toJSON();
    expect(tree.children.length).toBe(2); // TextInput and Image containing the icon url
  });
  it(".....", () => {
    const mock = jest.fn()
    const kha_input_text = render(<HKAInputText
      current_language="fr"
      onChangeText={mock}
    />);
    console.log(kha_input_text)
    // fireEvent.changeText(kha_input_text.findByType(TextInput), 'test')
    // expect(mock).toHaveBeenCalledWith('test')
  });
});
