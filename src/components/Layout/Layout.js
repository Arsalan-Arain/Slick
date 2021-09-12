import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Loader from '../UI/Loader/Loader';

const layout = (props) => (
  <React.Fragment>
    <React.Suspense fallback={<Loader />}>
      <Sidebar />
      <main>
        {props.children}
      </main>
    </React.Suspense>
  </React.Fragment>
)

export default layout;