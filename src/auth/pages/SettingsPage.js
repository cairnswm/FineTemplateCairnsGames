import React from 'react';
import { Container, Card, Table } from 'react-bootstrap';
import { useSettings } from '../context/SettingsContext';
import PageLayout from '../components/pagelayout';
import BackBar from '../components/backbar';
import { accessElf } from '../utils/accessElf';

const Settings = () => {
  const { settings } = useSettings();
  accessElf.track("Settings");

  return (
    <PageLayout>
      <BackBar />
      <Card>
        <Card.Body>
          <h2 className="mb-4">Settings</h2>
          {settings && settings.length > 0 ? (
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Setting Name</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                {settings.map((setting, index) => (
                  <tr key={index}>
                    <td>{setting.keyname}</td>
                    <td>
                      {setting.keyname.toLowerCase().includes('key') || 
                       setting.keyname.toLowerCase().includes('password') || 
                       setting.keyname.toLowerCase().includes('secret') 
                        ? '••••••••••••••••' 
                        : setting.val}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <p className="text-muted">No settings found.</p>
          )}
        </Card.Body>
      </Card></PageLayout>
  );
};

export default Settings;
