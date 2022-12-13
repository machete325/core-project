import React, { useState } from 'react';
import GraphModal from '../../../../components/GraphModal/GraphModal';
import { IProject } from '../../../../types/project/Project';
import Graph from './Graph';
import s from './GraphNavigation.module.scss';

type Props = {
  data: IProject;
};

function GraphNavigation({ data }: Props) {
  const [open, setOpen] = useState(false);
  const [cardContainerSize, setCardContainerSize] = useState<any>({
    width: null,
    height: null,
  });

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  let resizeContent: string | number | NodeJS.Timeout | undefined;

  const handleGetCardContainerSize = () => {
    const cardContainer = document.getElementById('graph-content');
    if (cardContainer) {
      setCardContainerSize({
        ...cardContainerSize,
        width: cardContainer.offsetWidth,
        height: cardContainer.offsetHeight,
      });
    }
  };

  window.addEventListener('resize', () => {
    clearTimeout(resizeContent);
    resizeContent = setTimeout(() => handleGetCardContainerSize(), 200);
  });

  const contentProps = {
    cardContainerSize,
    handleGetCardContainerSize,
  };

  return (
    <>
      <GraphModal
        open={open}
        handleClose={handleClose}
        projectData={data}
        Content={Graph}
        contentProps={contentProps}
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
