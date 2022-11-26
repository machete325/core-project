const genDataset = (x: number[], y: number[]) => {
  const dataset = x.map((item, index) => [item, y[index]]);
  return dataset;
};

export const chartHandlers = {
  genLineMetricData: (data: any, option: any, isFill: boolean | undefined) => {
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
  },

  genLineInfrastructureData: (
    data: any,
    option: any,
    isFill: boolean | undefined,
  ) => {
    const chartData: any = { legend: [], series: [] };
    Object.keys(data.value).forEach((item) => {
      const series = {
        name: item,
        type: 'line',
        showSymbol: false,
        data: [...genDataset(data.value[item].x, data.value[item].y)],
        areaStyle: { opacity: isFill ? 0.2 : 0 },
      };

      chartData.legend.push(item);
      chartData.series.push(series);
    });
    option.legend.data = chartData.legend;
    option.series = chartData.series;
    option.xAxis.type = 'time';
  },

  genLineChartData: (data: any, option: any, isFill: boolean | undefined) => {
    const chartData: any = {
      xAxis: {
        type: 'category',
        data: [...data.x],
      },
      series: {
        type: 'line',
        showSymbol: false,
        data: [...data.y],
        areaStyle: { opacity: isFill ? 0.2 : 0 },
      },
    };
    option.legend.data = chartData.legend;
    option.series = chartData.series;
    option.xAxis = chartData.xAxis;
  },

  genBarChartData: (data: any, option: any) => {
    const chartData: any = {
      xAxis: {
        splitLine: {
          show: false,
        },
        showGrid: false,
        type: 'category',
        data: [...data.x],
      },
      series: {
        type: 'bar',
        showSymbol: false,
        data: [...data.y],
      },
    };
    option.legend.data = chartData.legend;
    option.series = chartData.series;
    option.xAxis = chartData.xAxis;
  },

  genPieData: (data: any, option: any) => {
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
    data.x.forEach((item: any, index: number) => {
      chartData.series.data.push({ value: data.y[index], name: item });
    });

    option.series = chartData.series;
    option.tooltip.trigger = 'item';
    option.legend = chartData.legend;
  },
};
