import React from 'react';
import cssModule from 'react-css-modules';
import styles from './app.css';

const app = () => (
  <div>
    app
  </div>
);

app.propTypes = {

};

export default cssModule(app, styles);
