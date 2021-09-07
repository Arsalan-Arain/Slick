import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const layout = (props) => (
  <React.Fragment>
    <Sidebar></Sidebar>
    <main>
      {props.children}
    </main>
  </React.Fragment>
)

export default layout;