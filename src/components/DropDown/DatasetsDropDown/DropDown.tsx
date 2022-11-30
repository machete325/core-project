import React, { useState } from 'react';
import useComponentVisible from '../../../core/hooks/useComponentVisible';
import s from './DropDown.module.scss';

interface IDropDownConfig {
  text: string;
  imgSrc: string;
}

interface Props {
  position?: 'bottom-left' | 'top-right';
}

const dropDownConfig: IDropDownConfig[] = [
  {
    text: 'Clone dataset',
    imgSrc: '/images/icons/Copy.svg',
  },
  {
    text: 'New version',
    imgSrc: '/images/icons/Polygon.svg',
  },
  {
    text: 'Add to compare',
    imgSrc: '/images/icons/PlusWhite.svg',
  },
];

function DropDown({ position }: Props) {
  const [visible, setVisible] = useState(false);
  const { ref } = useComponentVisible(true, setVisible);

  const definePosition = () => {
    switch (position) {
      case 'bottom-left':
        return { right: '3%' };
      case 'top-right':
        return { bottom: '3%' };
      default:
        return { right: '3%' };
    }
  };

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
        <div className={s.dropdown} ref={ref} style={definePosition()}>
          <div className={s.container}>
            <div className={s.open}>
              <img
                height={24}
                width={24}
                alt="open"
                src="/images/icons/ArrowSquareUpRight.svg"
              />
              <span>Open</span>
            </div>
            <div className={s.experiment_methods}>
              {dropDownConfig.map((method) => (
                <div key={method.imgSrc} className={s.method}>
                  <img
                    height={24}
                    width={24}
                    alt={method.text}
                    src={method.imgSrc}
                  />
                  <span>{method.text}</span>
                </div>
              ))}
            </div>
            <div className={s.archive}>
              <img
                height={24}
                width={24}
                alt="open"
                src="/images/icons/TrashSimple.svg"
              />
              <span>Archive</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DropDown;
