import React from 'react';

import './main.scss';

import { Wrapper, Checkbox } from '../components';

import MainHeader from './MainHeader';
import Greeting from './Greeting';
import DonateCallToAction from './DonateCallToAction';
import MainFooter from './MainFooter';

export default class Main extends React.Component {
  render() {
    return (
      <Wrapper>
            <MainHeader header="Main Page" subheader="Get werkin'" />
            <Greeting />
            <DonateCallToAction />
            <MainFooter />
      </Wrapper>
    );
  }
}