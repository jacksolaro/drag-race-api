import React from 'react';

import './main.scss';

import { Wrapper } from '../components';

import MainHeader from './MainHeader';
import Greeting from './Greeting';

export default class Main extends React.Component {
  render() {
    return (
      <Wrapper>
            <MainHeader header="Main Page" subheader="Get werkin'" />
            <Greeting />
      </Wrapper>
    );
  }
}
