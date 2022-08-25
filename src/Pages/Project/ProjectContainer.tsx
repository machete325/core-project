import React from 'react';
import { Outlet } from 'react-router-dom';

function ProjectContainer() {
  return (
    <div>
      Navigation
      <Outlet />
    </div>
  );
}

export default ProjectContainer;
