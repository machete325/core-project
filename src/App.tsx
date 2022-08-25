import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProjectsContainer from './Pages/Projects/ProjectsContainer';
import './App.scss';
import MainContainer from './Pages/Main/MainContainer';
import ProjectContainer from './Pages/Project/ProjectContainer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<MainContainer />} />
            <Route path="main" element={<MainContainer />}>
              <Route index element={<ProjectsContainer />} />
              <Route path="projects" element={<ProjectsContainer />} />
              <Route path="monitoring" element={<div>Monitoring</div>} />
              <Route path="experiments" element={<div>Experiments</div>} />
              <Route path="datasets" element={<div>Datasets</div>} />
              <Route path="infrastructure" element={<div>Infrastructure</div>} />
              <Route path="code" element={<div>Code</div>} />
              <Route path="reports" element={<div>Reports</div>} />
            </Route>
            <Route path="project">
              <Route path=":projectId" element={<ProjectContainer />}>
                <Route index element={<div>Overview</div>} />
                <Route path="overview" element={<div>Overview</div>} />
                <Route path="monitoring" element={<div>Monitoring</div>} />
                <Route path="experiments" element={<div>Experiments</div>} />
                <Route path="datasets" element={<div>Datasets</div>} />
                <Route path="infrastructure" element={<div>Infrastructure</div>} />
                <Route path="code" element={<div>Code</div>} />
                <Route path="reports" element={<div>Reports</div>} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
