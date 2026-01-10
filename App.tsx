import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AtomsPage from "./pages/Atoms";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="max-w-md mx-auto min-h-screen bg-white shadow-xl relative">
        <Routes>
          <Route path="/atoms" element={<AtomsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
