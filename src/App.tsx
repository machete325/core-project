import React, { Suspense, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import './App.scss';

const ProjectsContainer = React.lazy(() => import('./Pages/Projects/ProjectsContainer'));
const ProjectContainer = React.lazy(() => import('./Pages/Project/ProjectContainer'));
const ProjectExperimentsContainer = React.lazy(
  () => import('./Pages/Project/Experiments/ExperimentsContainer'),
);
const MainContainer = React.lazy(() => import('./Pages/Main/MainContainer'));

function App() {
  const loginHandle = async () => {
    try {
      const data = {
        username: 'evgeny',
        password: 'coreai-blabla',
      };
      const response = await axios({
        method: 'post',
        url: 'http://3.126.123.50:8000/api/v1/login',
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
        data,
      });
      localStorage.setItem('accessToken', response.data.accessToken);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    loginHandle();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<MainContainer />} />
            <Route
              path="main"
              element={(
                <Suspense
                  fallback={(
                    <Backdrop open>
                      <CircularProgress color="inherit" />
                    </Backdrop>
                  )}
                >
                  <MainContainer />
                </Suspense>
              )}
            >
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
              <Route
                path=":projectId"
                element={(
                  <Suspense
                    fallback={(
                      <Backdrop open>
                        <CircularProgress color="inherit" />
                      </Backdrop>
                    )}
                  >
                    <ProjectContainer />
                  </Suspense>
                )}
              >
                <Route index element={<div>Overview</div>} />
                <Route path="overview" element={<div>Overview</div>} />
                <Route path="monitoring" element={<div>Monitoring</div>} />
                <Route
                  path="experiments"
                  element={(
                    <Suspense
                      fallback={(
                        <Backdrop open>
                          <CircularProgress color="inherit" />
                        </Backdrop>
                      )}
                    >
                      <ProjectExperimentsContainer />
                    </Suspense>
                  )}
                />
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
