import React from 'react';

import Page from '../../components/common/Page';
import homeImgSrc from '../../assets/contacts.jpg';
import './style.css';

function HomePageView() {
  return (
    <Page className="home-page__content">
      <img className="home-page__img" src={homeImgSrc} alt="Home page image"/>
    </Page>
  );
}

export default HomePageView;
