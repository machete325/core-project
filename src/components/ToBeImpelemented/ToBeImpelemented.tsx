import React from 'react';
import { styled } from '@mui/material/styles';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import s from './ToBeImpelemented.module.scss';

const ImplementedTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    display: 'flex',
    alignItems: 'center',
    color: 'white',
    backgroundColor: 'rgba(97, 97, 97, 0.8)',
    maxWidth: 240,
    height: '30px',
    boxSizing: 'border-box',
    fontSize: '16px',
    fontFamily: 'Open Sans',
    fontWeight: '600',
  },
}));

interface Props {
  element: any;
  color: 'primary' | 'secondary';
  blur?: boolean;
  backgroundBlur?: boolean;
  justifyContent?: 'start' | 'end' | 'center';
  width?: string;
}

function ToBeImpelemented({
  element,
  color,
  blur,
  backgroundBlur,
  justifyContent = 'start',
  width,
}: Props) {
  return (
    <div className={s.wrapper} style={{ width: width || 'inherit' }}>
      <ImplementedTooltip
        followCursor
        title={<div color="inherit">To be customized</div>}
      >
        <div
          className={`${s.element} ${blur && s.blur} ${
            backgroundBlur && s.backgroundBlur
          }`}
          style={{
            justifyContent,
            color: color === 'primary' ? 'white' : 'black',
            backgroundColor:
              typeof element === 'string' || typeof element === 'number'
                ? 'gray'
                : 'inherit',
          }}
        >
          {element}
        </div>
      </ImplementedTooltip>
    </div>
  );
}

export default ToBeImpelemented;
