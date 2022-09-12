import React, { useState } from 'react';
import useComponentVisible from '../../core/hooks/useComponentVisible';
import s from './DropDown.module.scss';

function DropDown() {
  const [visible, setVisible] = useState(false);
  const { ref } = useComponentVisible(true, setVisible);

  const dropDownConfig = [
    {
      text: 'Clone experiment',
      imgSrc: '/images/icons/Copy.svg',
    },
    {
      text: 'Rerun experiment',
      imgSrc: '/images/icons/PlayCircle.svg',
    },
    {
      text: 'Add to compare',
      imgSrc: '/images/icons/PlusWhite.svg',
    },
  ];

  return (
    <div className={s.wrapper}>
      {!visible && (
        <div
          role="presentation"
          className={s.image_container}
          onClick={() => setVisible((prev) => !prev)}
        >
          <img alt="Dots" src="/images/icons/DotsThree.svg" />
        </div>
      )}
      {visible && (
        <div className={s.dropdown} ref={ref}>
          <div className={s.container}>
            <div className={s.open}>
              <img alt="open" src="/images/icons/ArrowSquareUpRight.svg" />
              <span>Open</span>
            </div>
            <div className={s.experiment_methods}>
              {dropDownConfig.map((method) => (
                <div key={method.imgSrc} className={s.method}>
                  <img alt={method.text} src={method.imgSrc} />
                  <span>{method.text}</span>
                </div>
              ))}
            </div>
            <div className={s.archive}>
              <img alt="open" src="/images/icons/TrashSimple.svg" />
              <span>Archive</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DropDown;
