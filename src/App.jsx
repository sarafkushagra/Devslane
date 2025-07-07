import React, { useState } from 'react';
import HomePage from './components/HomePage';
import { Link, Routes,Route } from 'react-router-dom';
import Details from './components/Details';
function App() {
  return (
    <div>
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/details/:id" element={<Details />} />
    </Routes>
    </div>
  );
}

export default App
