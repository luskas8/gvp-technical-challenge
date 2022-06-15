import React from 'react';
import { PageLayout } from './layout';
import { Dashboard } from './pages';
import './styles/app.css';

function App() {
  return <PageLayout>
    <Dashboard />
  </PageLayout>;
}

export default App;
