import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Button from '../../../components/Button/Button';
import CheckBox from '../../../components/CheckBox/CheckBox';
import DropDown from '../../../components/DropDown/DropDown';
import { checkExperiments, fetchExperiments } from '../../../core/experiments/actions';
import { experimentsSelector } from '../../../core/experiments/selectors';
import { useAppDispatch } from '../../../core/redux/store';
import Navigation from '../Navigation/Navigation';
import s from './Experiments.module.scss';

const mockProjectData = [
  { id: '1', name: 'Demand Forecasting' },
  { id: '2', name: 'Proj2' },
  { id: '3', name: 'Proj3' },
];

function ProjectExperimentsContainer() {
  const dispatch = useAppDispatch();
  const { data } = useSelector(experimentsSelector);

  useEffect(() => {
    dispatch(fetchExperiments());
  }, []);

  const handleCheckAll = (checked: boolean) => {
    dispatch(checkExperiments(checked));
  };

  const genJXS = (obj: Object, isTitle: boolean = true) => {
    const result = Object.entries(obj).map(([key, value]) => (
      <div className={s.obj_container} key={key}>
        {isTitle && (
        <span className={s.title_key}>
          {key}
          :
        </span>
        )}
        {value}
      </div>
    ));
    return result;
  };

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
      <div className={s.content}>
        <table>
          <thead>
            <tr>
              <td>
                <CheckBox onChange={handleCheckAll} id="1" checked={false} />
              </td>
              <td>#</td>
              <td>Description</td>
              <td>Target</td>
              <td>Data</td>
              <td>Main Metrics</td>
              <td>Model configuration</td>
              <td>Infrastructure</td>
              <td>Commit Description</td>
              <td>Status</td>
            </tr>
          </thead>
          <tbody>
            {data.length !== 0
              && data.map((experiment, index) => (
                <tr key={experiment.version}>
                  <td>
                    <CheckBox id={index} checked={experiment.checked} />
                  </td>
                  <td>{index + 1}</td>
                  <td>{experiment.description}</td>
                  <td>{experiment.target}</td>
                  <td>{genJXS(experiment.dataset, false)}</td>
                  <td>{genJXS(experiment.metrics)}</td>
                  <td>{genJXS(experiment.configuration)}</td>
                  <td>{genJXS(experiment.infrastructure)}</td>
                  <td>{experiment.commit.last_commit.description}</td>
                  <td>{experiment.status}</td>
                  <td>
                    <DropDown />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProjectExperimentsContainer;
