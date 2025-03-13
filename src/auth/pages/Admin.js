import React from 'react';
import { Container, Card, Table } from 'react-bootstrap';
import { useSettings } from '../context/SettingsContext';
import ComingSoon from '../components/comingsoon';

const Admin = () => {
  const { settings } = useSettings();

  return (
    <Container className="py-5">
      <ComingSoon />
    </Container>
  );
};

export default Admin;
