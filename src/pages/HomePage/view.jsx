import React from 'react';

import Page from '../../components/common/Page';
import HomeImg from '../../assets/contacts.jpg';
import './style.css';

function HomePageView() {
  return (
    <Page className="home-page-content">
      <img className="home-page-img" src={HomeImg} alt="Home page image"/>
    </Page>
  );
}

export default HomePageView;
