import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AtomsPage from './pages/Atoms';
import MoleculesPage from './pages/Molecules';
import OrganismsPage from './pages/Organisms';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/atoms" element={<AtomsPage />} />
        <Route path="/molecules" element={<MoleculesPage />} />
        <Route path="/organisms" element={<OrganismsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
