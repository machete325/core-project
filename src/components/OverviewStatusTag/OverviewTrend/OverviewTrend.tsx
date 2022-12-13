import React from 'react';

interface Props {
  trend: 'UP' | 'DOWN';
}

function OverviewTrend({ trend }: Props) {
  switch (trend) {
    case 'UP':
      return (
        <div>
          <img alt="ArrowUpRight" src="/images/icons/ArrowUpRight.svg" />
        </div>
      );
    case 'DOWN':
      return (
        <div>
          <img alt="ArrowDownRight" src="/images/icons/ArrowDownRight.svg" />
        </div>
      );
    default:
      return null;
  }
}

export default OverviewTrend;
