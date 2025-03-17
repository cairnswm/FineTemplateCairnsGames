import React from 'react';
import { Container, Card, Table } from 'react-bootstrap';
import { useSettings } from '../context/SettingsContext';
import ComingSoon from '../components/comingsoon';
import PageLayout from '../components/pagelayout';

const Admin = () => {
  const { settings } = useSettings();

  return (
    <PageLayout>
      <ComingSoon />      
    </PageLayout>
  );
};

export default Admin;
