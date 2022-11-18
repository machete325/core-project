import React, { useState } from 'react';
import useComponentVisible from '../../../core/hooks/useComponentVisible';
import s from './DropDown.module.scss';
import Modal from './Modal';

interface IDropDownConfig {
  id: string;
  text: string;
  imgSrc: string;
}

const dropDownConfig: IDropDownConfig[] = [
  {
    id: 'clone',
    text: 'Clone project',
    imgSrc: '/images/icons/Copy.svg',
  },
  {
    id: 'favourites',
    text: 'Add to favorites',
    imgSrc: '/images/icons/Star.svg',
  },
  {
    id: 'thumbnail',
    text: 'Change project thumbnail',
    imgSrc: '/images/icons/Image.svg',
  },
];

function DropDown() {
  const [visible, setVisible] = useState(false);
  const { ref } = useComponentVisible(true, setVisible);
  const [openThumbnail, setOpenThumbnail] = useState(false);

  const handleOpenThumbnail = () => {
    setOpenThumbnail(true);
  };

  const handleCloseThumbnail = () => {
    setOpenThumbnail(false);
  };

  const defineHandler = (id: string) => {
    switch (id) {
      case 'clone':
        return handleOpenThumbnail;
      case 'favourites':
        return handleOpenThumbnail;
      case 'thumbnail':
        return handleOpenThumbnail;
      default:
        return handleOpenThumbnail;
    }
  };

  return (
    <div className={s.wrapper}>
      <Modal open={openThumbnail} handleClose={handleCloseThumbnail} />
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
                <div
                  role="presentation"
                  onClick={defineHandler(method.id)}
                  key={method.imgSrc}
                  className={s.method}
                >
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
