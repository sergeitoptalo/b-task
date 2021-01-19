import React from 'react';

import ErrorComponent from '../components/error.component';
import Loader from '../components/loader.component';

const MainLayout: React.FC = ({ children }) => {
  return (
    <>
      <Loader />
      <ErrorComponent />
      <main>{children || ''}</main>
    </>
  );
};

export default MainLayout;
