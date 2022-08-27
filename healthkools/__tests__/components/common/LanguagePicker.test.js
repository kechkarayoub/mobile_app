import React from "react";
import { render, screen, fireEvent, waitFor } from '@testing-library/react-native';
import LanguagePicker from '../../../src/Components/Common/LanguagePicker';
import { Provider } from 'react-redux'
import store from '../../../src/Store/configureStore'
import i18n from '../../../src/i18n';
import renderer from 'react-test-renderer';
import { I18nextProvider } from 'react-i18next';
const current_language = "fr";
i18n.init(current_language).then(() => {})
.catch((error) => {});
beforeAll(() => {
  }
);

describe('LanguagePicker component', () => {
  test('Should render without crash', async () => {
    render(
      <Provider store={store}>
        <LanguagePicker />
      </Provider>
    );
  });
  test('Should contains props data', async () => {
    render(
      <Provider store={store}>
          <LanguagePicker current_language={current_language} test_id='test_id' />
      </Provider>
    );
    const drop_down_pickers_by_test_id = screen.queryAllByTestId('test_id');
    expect(drop_down_pickers_by_test_id).toHaveLength(1);
    const drop_down_pickers_by_text_en = screen.queryAllByText('Anglais');
    expect(drop_down_pickers_by_text_en).toHaveLength(0);
    const drop_down_pickers_by_text_ar = screen.queryAllByText('Arabe');
    expect(drop_down_pickers_by_text_ar).toHaveLength(0);
    const drop_down_pickers_by_text_fr = screen.queryAllByText('Français');
    expect(drop_down_pickers_by_text_fr).toHaveLength(1);
    // for(let i=0; i<10000000000; i++){
    //
    // }
      // screen.debug()

  });
  test('Should language change', async () => {
    render(
      <Provider store={store}>
        <LanguagePicker current_language={current_language} test_id='test_id' />
      </Provider>
    );
    const drop_down_picker_by_test_id = screen.queryByTestId('test_id');
    var drop_down_pickers_by_text_en = screen.queryAllByText('Anglais');
    expect(drop_down_pickers_by_text_en).toHaveLength(0);
    var drop_down_pickers_by_text_ar = screen.queryAllByText('Arabe');
    expect(drop_down_pickers_by_text_ar).toHaveLength(0);
    var drop_down_pickers_by_text_fr = screen.queryAllByText('Français');
    expect(drop_down_pickers_by_text_fr).toHaveLength(1);
    fireEvent(drop_down_picker_by_test_id, 'setOpen', true);
    drop_down_pickers_by_text_en = screen.queryAllByText('Anglais');
    expect(drop_down_pickers_by_text_en).toHaveLength(1);
    drop_down_pickers_by_text_ar = screen.queryAllByText('Arabe');
    expect(drop_down_pickers_by_text_ar).toHaveLength(1);
    drop_down_pickers_by_text_fr = screen.queryAllByText('Français');
    expect(drop_down_pickers_by_text_fr).toHaveLength(2);
    const drop_down_picker_by_text_en = screen.queryByText('Anglais');
    fireEvent.press(drop_down_picker_by_text_en);
    drop_down_pickers_by_text_en = screen.queryAllByText('Anglais');
    expect(drop_down_pickers_by_text_en).toHaveLength(1);
    drop_down_pickers_by_text_ar = screen.queryAllByText('Arabe');
    expect(drop_down_pickers_by_text_ar).toHaveLength(0);
    drop_down_pickers_by_text_fr = screen.queryAllByText('Français');
    expect(drop_down_pickers_by_text_fr).toHaveLength(0);
      //screen.debug()

  });
});
