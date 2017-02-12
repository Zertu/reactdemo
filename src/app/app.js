import React from 'react';
import cssModule from 'react-css-modules';
import styles from './app.css';

const app = () => (
  <div>
    hello world
  </div>
);
console.log(app.propTypes)
app.propTypes = {

};

export default cssModule(app, styles);
