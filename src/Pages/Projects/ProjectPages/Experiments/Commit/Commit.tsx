import React, { useEffect, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { IProjectData } from '../../../../../components/Modal/types';
import { ExperimentService } from '../../../../../core/services/Experiment.service';
import { textSlicer } from '../../../../../core/helpers/textMethods';
import s from './Commit.module.scss';

interface Props {
  data: any;
  projectData: IProjectData;
}

interface ICommit {
  name: string;
  version: string;
  commitMessage: string;
  url: string;
  urlProject: string;
}

function Commit({ data, projectData }: Props) {
  const [commitData, setCommitData] = useState<ICommit | undefined>(undefined);

  const fetchCommitData = async (projectId: string, experimentId: string) => {
    try {
      const response = await ExperimentService.getExperimentCode(
        projectId,
        experimentId,
        false,
      );
      setCommitData(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    setCommitData(undefined);
    fetchCommitData(projectData.id, data.id);
  }, [data.id]);

  return (
    <div className={s.wrapper}>
      {commitData && (
        <>
          <div className={s.content_container}>
            <div className={s.title}>Commit ID:</div>
            <div>{commitData.version}</div>
          </div>
          <div className={s.content_container}>
            <div className={s.title}>Description:</div>
            <div>{commitData.commitMessage}</div>
          </div>
          <div className={s.content_container}>
            <div className={s.title}>Github:</div>
            <div className={s.link_container}>
              <a href={commitData.url} className={s.link}>
                {textSlicer(commitData.url, 85)}
              </a>
              <div style={{ marginLeft: '4px' }}>
                <CopyToClipboard text={commitData.url}>
                  <img
                    style={{ cursor: 'pointer' }}
                    src="/images/icons/Copy.svg"
                    alt="Copy"
                  />
                </CopyToClipboard>
              </div>
            </div>
          </div>
          <div>
            <div className={s.title}>Git diff:</div>
            <div>null</div>
          </div>
        </>
      )}
    </div>
  );
}

export default Commit;
