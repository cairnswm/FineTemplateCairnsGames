import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'react-bootstrap-icons';

const Back = ({ to }) => {
  return <Link to={to} className="text-decoration-none m-1"><ArrowLeft /> Back</Link>
}

export default Back;