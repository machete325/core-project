import React, { useState } from 'react';
import s from './DropDown.module.scss';

function DropDown() {
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    setVisible((prev) => !prev);
  };

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
    <>
      <div role="presentation" className={s.image_container} onClick={handleClick}>
        <img alt="Dots" src="/images/icons/DotsThree.svg" />
      </div>
      {visible && (
        <div className={s.dropdown}>
          <div className={s.open}>
            <img alt="open" src="/images/icons/ArrowSquareUpRight.svg" />
            <span>Open</span>
          </div>
          <div className={s.experiment_methods}>
            {dropDownConfig.map((method) => (
              <div className={s.method}>
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
      )}
    </>
  );
}

export default DropDown;
