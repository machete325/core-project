import React, { Suspense, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import './App.scss';
import ProjectDatasetsContainer from './Pages/Projects/ProjectPages/Datasets/DatasetsContainer';
import ProjectOverviewContainer from './Pages/Projects/ProjectPages/Overview/OverviewContainer';
import ProjectMonitoringContainer from './Pages/Projects/ProjectPages/Monitoring/MonitoringContainer';
import ProjectInfrastructureContainer from './Pages/Projects/ProjectPages/Infrastructure/InfrastructureContainer';
import ProjectReportsContainer from './Pages/Projects/ProjectPages/Reports/ReportsContainer';
import ProjectCodeContainer from './Pages/Projects/ProjectPages/Code/CodeContainer';

const ProjectsContainer = React.lazy(
  () => import('./Pages/Projects/ProjectsContainer'),
);
const ProjectContainer = React.lazy(
  () => import('./Pages/Projects/ProjectPages/ProjectContainer'),
);
const ProjectExperimentsContainer = React.lazy(
  () => import('./Pages/Projects/ProjectPages/Experiments/ExperimentsContainer'),
);
const MainContainer = React.lazy(() => import('./Pages/Main/MainContainer'));

const baseURL = process.env.REACT_APP_API_URL;

function App() {
  const loginHandle = async () => {
    try {
      const data = {
        username: 'evgeny',
        password: 'coreai-blabla',
      };
      const response = await axios({
        method: 'post',
        url: `${baseURL}/login`,
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
              <Route
                path="infrastructure"
                element={<div>Infrastructure</div>}
              />
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
                <Route
                  index
                  element={(
                    <Suspense
                      fallback={(
                        <Backdrop open>
                          <CircularProgress color="inherit" />
                        </Backdrop>
                      )}
                    >
                      <ProjectOverviewContainer />
                    </Suspense>
                  )}
                />
                <Route
                  path="overview"
                  element={(
                    <Suspense
                      fallback={(
                        <Backdrop open>
                          <CircularProgress color="inherit" />
                        </Backdrop>
                      )}
                    >
                      <ProjectOverviewContainer />
                    </Suspense>
                  )}
                />
                <Route
                  path="monitoring"
                  element={(
                    <Suspense
                      fallback={(
                        <Backdrop open>
                          <CircularProgress color="inherit" />
                        </Backdrop>
                      )}
                    >
                      <ProjectMonitoringContainer />
                    </Suspense>
                  )}
                />
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
                <Route
                  path="datasets"
                  element={(
                    <Suspense
                      fallback={(
                        <Backdrop open>
                          <CircularProgress color="inherit" />
                        </Backdrop>
                      )}
                    >
                      <ProjectDatasetsContainer />
                    </Suspense>
                  )}
                />
                <Route
                  path="infrastructure"
                  element={(
                    <Suspense
                      fallback={(
                        <Backdrop open>
                          <CircularProgress color="inherit" />
                        </Backdrop>
                      )}
                    >
                      <ProjectInfrastructureContainer />
                    </Suspense>
                  )}
                />
                <Route
                  path="code"
                  element={(
                    <Suspense
                      fallback={(
                        <Backdrop open>
                          <CircularProgress color="inherit" />
                        </Backdrop>
                      )}
                    >
                      <ProjectCodeContainer />
                    </Suspense>
                  )}
                />
                <Route
                  path="reports"
                  element={(
                    <Suspense
                      fallback={(
                        <Backdrop open>
                          <CircularProgress color="inherit" />
                        </Backdrop>
                      )}
                    >
                      <ProjectReportsContainer />
                    </Suspense>
                  )}
                />
              </Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
