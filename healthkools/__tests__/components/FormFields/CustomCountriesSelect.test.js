import React from "react";
import { render, screen, fireEvent, waitFor } from '@testing-library/react-native';
import CustomCountriesSelect from 'src/Components/FormFields/CustomCountriesSelect';
const current_language = "en";

describe('CustomCountriesSelect component', () => {
  test('Should render without crash', async () => {
    render(
      <CustomCountriesSelect current_language={current_language} />
    );
    const components_errors_by_text = screen.queryAllByText('form_error');
    expect(components_errors_by_text).toHaveLength(0);
  });
  test('Should contains props data', async () => {
    render(
      <CustomCountriesSelect
        current_language={current_language}
        test_id='test_id'
        placeholder="PlaceholderTest"
        form_error="form_error"
      />
    );
    const countries_selects_by_test_id = screen.queryAllByTestId('test_id');
    expect(countries_selects_by_test_id).toHaveLength(1);
    const countries_selects_by_placeholder = screen.queryAllByText('PlaceholderTest');
    expect(countries_selects_by_placeholder).toHaveLength(1);
    const components_errors_by_text = screen.queryAllByText('form_error');
    expect(components_errors_by_text).toHaveLength(1);
    // screen.debug()

  });
  test('Should contains props data 2', async () => {
    render(
      <CustomCountriesSelect
        current_language={"fr"}
        test_id='test_id'
        placeholder="PlaceholderTest"
        value="MA"
      />
    );
    const countries_selects_by_test_id = screen.queryAllByTestId('test_id');
    expect(countries_selects_by_test_id).toHaveLength(1);
    const countries_selects_by_placeholder = screen.queryAllByText('PlaceholderTest');
    expect(countries_selects_by_placeholder).toHaveLength(0);
    const countries_selects_by_selected_country_name_en = screen.queryAllByText('Morocco');
    expect(countries_selects_by_selected_country_name_en).toHaveLength(0);
    const countries_selects_by_selected_country_name_fr = screen.queryAllByText('Maroc');
    expect(countries_selects_by_selected_country_name_fr).toHaveLength(1);
    //screen.debug()

  });
  test('Should Countries appear wen open', async () => {
    render(
      <CustomCountriesSelect
        current_language={current_language}
        test_id='test_id'
        placeholder="PlaceholderTest"
        value="MA"
      />
    );
    const countries_selects_by_test_id = screen.queryAllByTestId('test_id');
    expect(countries_selects_by_test_id).toHaveLength(1);
    var countries_selects_by_selected_country_name_ma = screen.queryAllByText('Morocco');
    expect(countries_selects_by_selected_country_name_ma).toHaveLength(1);
    var countries_selects_by_selected_country_name_al = screen.queryAllByText('Algeria');
    expect(countries_selects_by_selected_country_name_al).toHaveLength(0);
    const countries_select_by_test_id = screen.queryByTestId('test_id');
    fireEvent(countries_select_by_test_id, 'setOpen', true);
    countries_selects_by_selected_country_name_ma = screen.queryAllByText('Morocco');
    expect(countries_selects_by_selected_country_name_ma).toHaveLength(1);
    countries_selects_by_selected_country_name_al = screen.queryAllByText('Algeria');
    expect(countries_selects_by_selected_country_name_al).toHaveLength(1);
  });
  test('Should Country change', async () => {
    render(
      <CustomCountriesSelect
        current_language={current_language}
        test_id='test_id'
        placeholder="PlaceholderTest"
        value="MA"
        onSelect={null}
      />
    );
    const countries_selects_by_test_id = screen.queryAllByTestId('test_id');
    expect(countries_selects_by_test_id).toHaveLength(1);
    var countries_selects_by_selected_country_name_ma = screen.queryAllByText('Morocco');
    expect(countries_selects_by_selected_country_name_ma).toHaveLength(1);
    var countries_selects_by_selected_country_name_al = screen.queryAllByText('Algeria');
    expect(countries_selects_by_selected_country_name_al).toHaveLength(0);
    const countries_select_by_test_id = screen.queryByTestId('test_id');
    fireEvent(countries_select_by_test_id, 'setValue', () => "DZ");
    countries_selects_by_selected_country_name_ma = screen.queryAllByText('Morocco');
    expect(countries_selects_by_selected_country_name_ma).toHaveLength(0);
    countries_selects_by_selected_country_name_al = screen.queryAllByText('Algeria');
    expect(countries_selects_by_selected_country_name_al).toHaveLength(1);
    // screen.debug()
  });
  test('Should Country change with onSelect props', async () => {
    const onSelect = jest.fn();
    render(
      <CustomCountriesSelect
        current_language={current_language}
        test_id='test_id'
        placeholder="PlaceholderTest"
        value="MA"
        onSelect={onSelect}
      />
    );
    const countries_selects_by_test_id = screen.queryAllByTestId('test_id');
    expect(countries_selects_by_test_id).toHaveLength(1);
    var countries_selects_by_selected_country_name_ma = screen.queryAllByText('Morocco');
    expect(countries_selects_by_selected_country_name_ma).toHaveLength(1);
    var countries_selects_by_selected_country_name_al = screen.queryAllByText('Algeria');
    expect(countries_selects_by_selected_country_name_al).toHaveLength(0);
    const countries_select_by_test_id = screen.queryByTestId('test_id');
    fireEvent(countries_select_by_test_id, 'setValue', () => "DZ");
    expect(onSelect).toHaveBeenCalled();
    // if onSelect exists in props, value will be changed by the props.value not by setState function
    countries_selects_by_selected_country_name_ma = screen.queryAllByText('Morocco');
    expect(countries_selects_by_selected_country_name_ma).toHaveLength(1);
    countries_selects_by_selected_country_name_al = screen.queryAllByText('Algeria');
    expect(countries_selects_by_selected_country_name_al).toHaveLength(0);
    // screen.debug()
  });
});
