import React, { useEffect, useRef } from 'react';
import { init, registerTheme } from 'echarts';
import type { ECharts } from 'echarts';
import dark from './dark.project.json';
import s from './Chart.module.scss';

type Props = {
  data: any;
  isFill?: boolean;
  type: 'bar' | 'line' | 'pie';
};

function Chart({ data, isFill, type }: Props) {
  const chartRef = useRef<HTMLDivElement>(null);
  let chart: ECharts | undefined;

  const genDataset = (x: number[], y: number[]) => {
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

  const genLineChartData = () => {
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

  const genBarChartData = () => {
    const chartData: any = {
      xAxis: {
        splitLine: {
          show: false,
        },
        showGrid: false,
        type: 'category',
        data: [],
      },
      series: {
        type: 'bar',
        showSymbol: false,
        data: [],
      },
    };
    Object.entries(data).forEach(([key, value]) => {
      chartData.xAxis.data.push(key);
      chartData.series.data.push(value);
    });
    option.legend.data = chartData.legend;
    option.series = chartData.series;
    option.xAxis = chartData.xAxis;
  };

  const genPieData = () => {
    const chartData: any = {
      legend: {
        top: '5%',
        left: 'center',
      },
      series: {
        radius: ['40%', '70%'],
        type: 'pie',
        showSymbol: false,
        data: [],
      },
    };
    Object.entries(data).forEach(([key, value]) => {
      chartData.series.data.push({ value, name: key });
    });
    option.series = chartData.series;
    option.tooltip.trigger = 'item';
    option.legend = chartData.legend;
  };

  const defineChartType = (typeChart: string) => {
    switch (typeChart) {
      case 'line':
        return genLineChartData();
      case 'bar':
        return genBarChartData();
      case 'pie':
        return genPieData();
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
