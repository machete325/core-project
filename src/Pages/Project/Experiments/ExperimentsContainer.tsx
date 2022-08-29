import React from 'react';
import Button from '../../../components/Button/Button';
import Navigation from '../Navigation/Navigation';
import s from './Experiments.module.scss';

const mockProjectData = [
  { id: '1', name: 'Demand Forecasting' },
  { id: '2', name: 'Proj2' },
  { id: '3', name: 'Proj3' },
];

function ProjectExperimentsContainer() {
  return (
    <div className={s.wrapper}>
      <Navigation data={mockProjectData} />
      <div className={s.header}>
        <div className={s.title}>
          <div className={s.title_name}>Demand Forecasting`s experiments</div>
          <div className={s.title_description}>1 out of 3 experiments running</div>
        </div>
        <div className={s.buttons}>
          <Button disabled style={{ marginRight: '20px' }}>
            <img alt="BoundingBox" src="/images/icons/BoundingBox.svg" />
            Compare experiments
          </Button>
          <Button>
            <img alt="Plus" src="/images/icons/Plus.svg" />
            New experiment
          </Button>
        </div>
      </div>
      <div>Table</div>
    </div>
  );
}

export default ProjectExperimentsContainer;
