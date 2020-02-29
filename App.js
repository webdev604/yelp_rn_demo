import React from 'react';
import {Provider} from 'react-redux';
import createStore from './app/reducers';
import createFetch from './app/createFetch';
import Root from './app/containers/Root/Root';

const customFetch = createFetch(fetch);
export const store = createStore({fetch: customFetch});
console.disableYellowBox = true;
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    );
  }
}
