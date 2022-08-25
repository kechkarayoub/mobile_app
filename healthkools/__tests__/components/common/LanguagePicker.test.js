import React from "react";
import { render, screen, fireEvent } from '@testing-library/react-native';
import LanguagePicker from '../../../src/Components/Common/LanguagePicker';
import { Provider } from 'react-redux'
import Store from '../../../src/Store/configureStore'

describe('LanguagePicker component', () => {
  test('Should render without crash', async () => {
    render(
      <Provider store={Store}>
        <LanguagePicker current_language="fr" />
      </Provider>
    );
  });
  // test('Should contains general information response data', async () => {
  //   render(<Home i18n={i18next}/>);
  //   const contact_email = await screen.findByText(general_information_response.contact_email);
  //   const site_name = await screen.findByText(moment().format("YYYY") + " © " + (general_information_response.site_name || "Healthkools"));
  //   expect(contact_email).toBeInTheDocument();
  //   expect(site_name).toBeInTheDocument();
  // });
});
