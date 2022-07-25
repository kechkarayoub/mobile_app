import React from 'react';
import CustomInputText from './CustomInputText'
import { StyleSheet, View, TextInput, Image, Alert } from 'react-native';
import renderer from 'react-test-renderer';
import { render, act, fireEvent } from '@testing-library/react-native'
describe("Testing CustomInputText component", () => {
  it("Should render without crash", () => {
    const tree = renderer.create(<CustomInputText />).toJSON();
    expect(tree.children.length).toBe(2); // TextInput and Image containing the icon url
  });
  it("Test props", () => {
    const mock = jest.fn()
    const {getByTestId} = render(<CustomInputText onChangeText={mock} test_id={"test_id"} />);
    var kha_input_text = getByTestId('test_id');
    fireEvent.changeText(kha_input_text, 'test');
    expect(mock).toHaveBeenCalledWith('test')
  });
});
