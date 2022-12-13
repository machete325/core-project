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
    backgroundColor: 'gray',
    color: 'white',
    maxWidth: 240,
    height: '40px',
    boxSizing: 'border-box',
    fontSize: '16px',
    fontFamily: 'Open Sans',
    fontWeight: '600',
  },
}));

interface Props {
  element: any;
  color: 'primary' | 'secondary';
}

function ToBeImpelemented({ element, color }: Props) {
  return (
    <div className={s.wrapper}>
      <ImplementedTooltip
        placement="top-start"
        title={<div color="inherit">To be customized</div>}
      >
        <div
          className={s.element}
          style={{
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
