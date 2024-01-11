import React from 'react';
// import { lazy } from 'react';

import Main  from './pages/Main/Main';
import News  from './pages/News/News';
import Admin  from './pages/Admin/Admin';
import SliderWrapper  from './pages/Slider/SliderWrapper';


import { ADMIN_ROUTE, NEWS_ROUTE, MAIN_ROUTE, SLIDER_ROUTE } from './utils/consts';

export const publicRoutes = [
  {
    path: MAIN_ROUTE,
    Component: <Main />,
  },
  {
    path: NEWS_ROUTE,
    Component: <News />,
  },
  {
    path: ADMIN_ROUTE,
    Component: <Admin />,
  },
  {
    path: SLIDER_ROUTE,
    Component: <SliderWrapper />,
  },
];
export const privateRoutes = [
  {
    path: MAIN_ROUTE,
    Component: <Main />,
  },
  {
    path: ADMIN_ROUTE,
    Component: <Admin />,
  },
  {
    path: NEWS_ROUTE,
    Component: <News />,
  },
  {
    path: SLIDER_ROUTE,
    Component: <SliderWrapper />,
  },
];
