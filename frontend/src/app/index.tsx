/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';

import { HomePage } from './pages/HomePage/Loadable';
import { NotFoundPage } from './components/NotFoundPage/Loadable';
import { useTranslation } from 'react-i18next';
import { BloodPressureLogin } from './pages/BloodPressureLogin/Loadable';
import { BloodPressureRegister } from './pages/BloodPressureRegister/Loadable';
import { BloodPressureMenu } from './pages/BloodPressureMenu/Loadable';
import { BloodPressureEntry } from './pages/BloodPressureEntry/Loadable';
import { BloodPressureChart } from './pages/BloodPressureChart/Loadable';

export function App() {
  const { i18n } = useTranslation();
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - React Boilerplate"
        defaultTitle="React Boilerplate"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="A React Boilerplate application" />
      </Helmet>

      <Routes>
        <Route path="/" element={<BloodPressureLogin />} />
        <Route path="/register" element={<BloodPressureRegister />} />
        <Route path="/menu" element={<BloodPressureMenu />} />
        <Route path="/entry" element={<BloodPressureEntry />} />
        <Route path="/chart" element={<BloodPressureChart />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  );
}
