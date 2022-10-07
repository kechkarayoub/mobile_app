import React from "react";
import { render, screen, fireEvent, waitFor } from '@testing-library/react-native';
import CustomPhoneNumber from '../../../src/Components/FormFields/CustomPhoneNumber';
const current_language = "en";

describe('CustomPhoneNumber component', () => {
  test('Should render without crash', async () => {
    render(
      <CustomPhoneNumber current_language={current_language} />
    );
  });
  test('Should contains props data', async () => {
    render(
      <CustomPhoneNumber
        current_language={current_language}
        test_id='test_id' country_select_test_id='country_select_test_id'
        placeholder="PlaceholderTest"
      />
    );
    const phone_numbers_by_test_id = screen.queryAllByTestId('test_id');
    expect(phone_numbers_by_test_id).toHaveLength(1);
    const countries_select_by_test_id = screen.queryAllByTestId('country_select_test_id');
    expect(countries_select_by_test_id).toHaveLength(1);
    const phone_numbers_by_placeholder = screen.queryAllByPlaceholderText('PlaceholderTest');
    expect(phone_numbers_by_placeholder).toHaveLength(1);
    // screen.debug()

  });
  test('Should contains props data 2', async () => {
    render(
      <CustomPhoneNumber
        current_language={"fr"}
        test_id='test_id'
        placeholder="PlaceholderTest"
        country_phone_code="MA"
      />
    );
    const phone_numbers_by_test_id = screen.queryAllByTestId('test_id');
    expect(phone_numbers_by_test_id).toHaveLength(1);
    const phone_numbers_by_placeholder = screen.queryAllByText('PlaceholderTest');
    expect(phone_numbers_by_placeholder).toHaveLength(0);
    const phone_numbers_by_text_213 = screen.queryAllByText('+213');
    expect(phone_numbers_by_text_213).toHaveLength(0);
    const phone_numbers_by_text_212 = screen.queryAllByText('+212');
    expect(phone_numbers_by_text_212).toHaveLength(1);
    //screen.debug()

  });
  test('Should Countries appear when clicking countries select button', async () => {
    render(
      <CustomPhoneNumber
        current_language={current_language}
        test_id='test_id'  country_select_test_id='country_select_test_id'
        placeholder="PlaceholderTest"
        country_phone_code="MA"
      />
    );
    const countries_select_by_test_id = screen.queryAllByTestId('country_select_test_id');
    expect(countries_select_by_test_id).toHaveLength(1);
    var countries_select_by_country_code_212 = screen.queryAllByText('+212');
    expect(countries_select_by_country_code_212).toHaveLength(1);
    var countries_select_by_country_code_213 = screen.queryAllByText('+213');
    expect(countries_select_by_country_code_213).toHaveLength(0);
    const country_select_by_test_id = screen.queryByTestId('country_select_test_id');
    fireEvent.press(country_select_by_test_id);
    countries_select_by_country_code_213 = screen.queryAllByText('Algeria (+213)');
    expect(countries_select_by_country_code_213).toHaveLength(1);
    const country_select_by_al = screen.queryByText('Algeria (+213)');
    fireEvent.press(country_select_by_al);
    countries_select_by_country_code_213 = screen.queryAllByText('Algeria (+213)');
    expect(countries_select_by_country_code_213).toHaveLength(0);
    countries_select_by_country_code_212 = screen.queryAllByText('+212');
    expect(countries_select_by_country_code_212).toHaveLength(0);
    countries_select_by_country_code_213 = screen.queryAllByText('+213');
    expect(countries_select_by_country_code_213).toHaveLength(1);
    // screen.debug()
  });
  test('Should value change', async () => {
    render(
      <CustomPhoneNumber
        current_language={current_language}
        test_id='test_id'
        placeholder="PlaceholderTest"
        value="0612"
        onChangeText={null}
        country_phone_code="ma"
      />
    );
    const phone_inputs_by_test_id = screen.queryAllByTestId('test_id');
    expect(phone_inputs_by_test_id).toHaveLength(1);
    var phone_input_by_test_id = screen.queryByTestId('test_id');
    expect(phone_input_by_test_id.props.value).toBe("0612");
    fireEvent(phone_input_by_test_id, 'onChangeText', "052222");
    phone_input_by_test_id = screen.queryByTestId('test_id');
    expect(phone_input_by_test_id.props.value).toBe("052222");


    // screen.debug()
  });

  test('Should value change with onChangeText props', async () => {
    const onChangeText = jest.fn();
    render(
        <CustomPhoneNumber
          current_language={current_language}
          test_id='test_id'
          placeholder="PlaceholderTest"
          value="0612"
          onChangeText={onChangeText}
          country_phone_code="ma"
        />
    );
    const phone_inputs_by_test_id = screen.queryAllByTestId('test_id');
    expect(phone_inputs_by_test_id).toHaveLength(1);
    var phone_input_by_test_id = screen.queryByTestId('test_id');
    expect(phone_input_by_test_id.props.value).toBe("0612");
    fireEvent(phone_input_by_test_id, 'onChangeText', "052222");
    expect(onChangeText).toHaveBeenCalled();
    // if onSelect exists in props, value will be changed by the props.value not by setState function
    phone_input_by_test_id = screen.queryByTestId('test_id');
    expect(phone_input_by_test_id.props.value).toBe("0612");

    // screen.debug()
  });
});