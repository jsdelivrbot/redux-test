import React, { Component } from 'react';
import TodoComponent from './Components/TodoComponent';

export default class App extends Component {
  render() {
    return ( <TodoComponent />);
  }
}

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
