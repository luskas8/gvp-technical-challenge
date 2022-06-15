import React from 'react';
import { LayoutProvider } from './contexts/layout';
import { PageLayout } from './layout';
import { Dashboard } from './pages';
import './styles/app.css';

function App() {
  return (
    <LayoutProvider>
      <PageLayout>
        <Dashboard />
      </PageLayout>
    </LayoutProvider>
  )
}

export default App;
