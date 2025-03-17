import React from 'react';
import { Container } from 'react-bootstrap';

const PageLayout = ({ children }) => {
  return <Container className="py-5">{children}</Container>
}

export default PageLayout;