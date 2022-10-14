import React, { useState } from 'react';
import GraphModal from '../../../../components/GraphModal/GraphModal';
import Graph from './Graph';
import s from './GraphNavigation.module.scss';

interface IDdata {
  id: string;
  name: string;
  page: string;
  description: string;
  created: string;
  isArchive: boolean;
}

type Props = {
  data: IDdata;
};

function GraphNavigation({ data }: Props) {
  const [open, setOpen] = useState(false);
  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <GraphModal
        open={open}
        handleClose={handleClose}
        projectData={data}
        Content={Graph}
      />
      <div role="presentation" className={s.wrapper} onClick={handleOpenModal}>
        <div className={s.map}>
          <img alt="MapTrifold" src="/images/icons/MapTrifold.svg" />
        </div>
        <div className={s.caret}>
          <img alt="CaretDown" src="/images/icons/CaretDown.svg" />
        </div>
      </div>
    </>
  );
}

export default GraphNavigation;
