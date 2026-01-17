import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AtomsPage from './pages/Atoms';
import MoleculesPage from './pages/Molecules';
import HomePage from './pages/Home';
import OrganismsPage from './pages/Organisms';
import TemplatesPage from './pages/Templates';
import ProfilePage from './pages/Profile';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/atoms" element={<AtomsPage />} />
        <Route path="/molecules" element={<MoleculesPage />} />
        <Route path="/organisms" element={<OrganismsPage />} />
        <Route path="/templates" element={<TemplatesPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
