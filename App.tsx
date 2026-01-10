import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AtomsPage from "./pages/Atoms";
import MoleculesPage from "./pages/Molecules";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="max-w-md mx-auto min-h-screen bg-white shadow-xl relative">
        <Routes>
          <Route path="/atoms" element={<AtomsPage />} />
          <Route path="/molecules" element={<MoleculesPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
