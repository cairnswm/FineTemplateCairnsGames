import React from "react";
import { Container } from "react-bootstrap";

const PageLayout = ({ children }) => {
  return (
    <Container className="py-2">
      {children}
    </Container>
  );
};

export default PageLayout;
