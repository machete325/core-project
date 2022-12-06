import React, { useEffect, useRef } from 'react';
import { init, registerTheme } from 'echarts';
import type { ECharts } from 'echarts';
import dark from './dark.project.json';
import s from './Chart.module.scss';
import { chartHandlers } from './chartHandlers';

type Props = {
  data: any;
  isFill?: boolean;
  type: 'bar' | 'line' | 'pie' | 'metric-line' | 'infrastructure-line';
};

function Chart({ data, isFill, type }: Props) {
  const chartRef = useRef<HTMLDivElement>(null);
  let chart: ECharts | undefined;

  const option = {
    tooltip: {
      trigger: 'axis',
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    legend: {
      data: [],
      top: 24,
      left: 'center',
    },
    xAxis: {
      splitLine: {
        show: false,
      },
      showGrid: false,
      type: 'value',
    },
    yAxis: {
      splitLine: {
        show: true,
      },
      showGrid: true,
      type: 'value',
    },
    series: [],
  };

  const defineChartType = (typeChart: string) => {
    switch (typeChart) {
      case 'line':
        return chartHandlers.genLineChartData(data, option, isFill);
      case 'metric-line':
        return chartHandlers.genLineMetricData(data, option, isFill);
      case 'infrastructure-line':
        return chartHandlers.genLineInfrastructureData(data, option, isFill);
      case 'bar':
        return chartHandlers.genBarChartData(data, option);
      case 'pie':
        return chartHandlers.genPieData(data, option);
      default: {
        return null;
      }
    }
  };

  window.addEventListener('resize', () => {
    chart?.resize();
  });

  useEffect(() => {
    defineChartType(type);
    if (chartRef.current !== null) {
      registerTheme('core', JSON.parse(JSON.stringify(dark)));
      chart = init(chartRef.current, 'core');
      chart.setOption(option);
    }
  }, []);

  return (
    <div className={s.wrapper}>
      <div className={s.title}>{data.displayName}</div>
      <div className={s.chart} ref={chartRef} />
    </div>
  );
}

export default Chart;
