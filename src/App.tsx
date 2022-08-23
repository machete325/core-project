import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProjectsContainer from './Pages/Projects/ProjectsContainer';
import './App.scss';
import MainContainer from './Pages/Main/MainContainer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainContainer />}>
            <Route index element={<ProjectsContainer />} />
            <Route path="projects" element={<ProjectsContainer />} />
            <Route path="monitoring" element={<div>Monitoring</div>} />
            <Route path="experiments" element={<div>Experiments</div>} />
            <Route path="datasets" element={<div>Datasets</div>} />
            <Route path="infrastructure" element={<div>Infrastructure</div>} />
            <Route path="code" element={<div>Code</div>} />
            <Route path="reports" element={<div>Reports</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
