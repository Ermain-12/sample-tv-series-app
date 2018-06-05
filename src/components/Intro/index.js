import React from 'react';

// Creating a new component
const Intro = (props) => (
    <p className="App-intro">
      {props.message}
    </p>
);

// Export our user component
export default Intro;
