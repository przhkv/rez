import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../common/Footer';
import Header from '../common/Header';
import MainSection from '../common/MainSection';
import Wrapping from '../common/Wrapping';

const NotFoundPage = ({i18n, navigate, theme}) => (
  <Wrapping>
    <Header theme={theme} i18n={i18n} loading={false} navigate={navigate} page="error" />
    <MainSection theme={theme}>
      <article className="pa3 pv5-ns ph6-ns">
        <h3>404 {i18n.errors.pageNotFound}</h3>
      </article>
    </MainSection>
    <Footer i18n={i18n} theme={theme} />
  </Wrapping>
);

NotFoundPage.propTypes = {
  i18n: PropTypes.object.isRequired,
  navigate: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired,
};

export default NotFoundPage;
