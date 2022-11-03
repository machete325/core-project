import React, { useState } from 'react';
import useComponentVisible from '../../../core/hooks/useComponentVisible';
import s from './DropDown.module.scss';

interface IDropDownConfig {
  text: string;
  imgSrc: string;
}

const dropDownConfig: IDropDownConfig[] = [
  {
    text: 'Clone project',
    imgSrc: '/images/icons/Copy.svg',
  },
  {
    text: 'Add to favorites',
    imgSrc: '/images/icons/Star.svg',
  },
  {
    text: 'Change project thumbnail',
    imgSrc: '/images/icons/Image.svg',
  },
];

function DropDown() {
  const [visible, setVisible] = useState(false);
  const { ref } = useComponentVisible(true, setVisible);

  return (
    <div className={s.wrapper}>
      <div
        style={{ visibility: !visible ? 'visible' : 'hidden' }}
        role="presentation"
        className={s.image_container}
        onClick={() => setVisible((prev) => !prev)}
      >
        <img alt="Dots" src="/images/icons/DotsThree.svg" />
      </div>
      {visible && (
        <div className={s.dropdown} ref={ref}>
          <div className={s.container}>
            <div className={s.methods}>
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
