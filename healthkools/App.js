import React, {Component} from 'react';
import { Provider } from 'react-redux'
import Store from 'src/Store/configureStore'
import AppInit from 'src/AppInit'
class App extends Component{
  constructor(props) {
    super(props);
    this.state = { isI18nInitialized: false };
  }
  componentDidMount() {
  }
  render(){
    return (
      <Provider store={Store}>
          <AppInit/>
      </Provider>
    );
  }
}


export default App;
