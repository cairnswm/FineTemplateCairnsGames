import React from 'react';
import Back from './back';

const BackBar = ({ to }) => {
  return <div className="mb-2" style={{border: "5ps solid red"}}>
    <Back to={to}/>
  </div>
}

export default BackBar;