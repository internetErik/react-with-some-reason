import React from 'react';
import PropTypes from 'prop-types';

import Greeter from './components/Greeter/Greeter.bs';

export default class App extends React.Component {

  static propTypes = { className : PropTypes.string, }

  render() {
    return (
    <div>
      <Greeter message="Welcome user!" />
    </div>
    );
  }
}
