import { AppRegistry } from 'react-native';

import App from './App';

registerRootComponent(App);
// Register your main component as the entry point
AppRegistry.registerComponent('Healthkools', () => App);

// Start the app
AppRegistry.runApplication('Healthkools', { rootTag: document.getElementById('app-root') });
