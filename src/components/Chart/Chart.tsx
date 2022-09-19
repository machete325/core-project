import React, { useEffect, useRef } from 'react';
import { init, registerTheme } from 'echarts';
import type { ECharts } from 'echarts';
import dark from './dark.project.json';
import s from './Chart.module.scss';

type Props = {
  data: any;
  isFill?: boolean;
};

function Chart({ data, isFill }: Props) {
  const chartRef = useRef<HTMLDivElement>(null);

  const genDataset = (x: any[], y: any[]) => {
    const dataset = x.map((item, index) => [item, y[index]]);
    return dataset;
  };

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
      left: 18,
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

  const genChartData = () => {
    const chartData: any = { legend: [], series: [] };
    Object.keys(data.value).forEach((item) => {
      const series = {
        name: data.value[item].name,
        type: 'line',
        showSymbol: false,
        data: [...genDataset(data.value[item].x, data.value[item].y)],
        areaStyle: { opacity: isFill ? 0.2 : 0 },
      };
      chartData.legend.push(data.value[item].name);
      chartData.series.push(series);
    });
    option.legend.data = chartData.legend;
    option.series = chartData.series;
  };

  let chart: ECharts | undefined;
  useEffect(() => {
    genChartData();
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
