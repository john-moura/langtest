'use client';

import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import 'core-js'

import App from './App'
import store from './store'

const Dashboard: React.FC = () => {
  return (
  <>
    <Provider store={store}>
      <App />
    </Provider>
  </>
  );
};

export default Dashboard;