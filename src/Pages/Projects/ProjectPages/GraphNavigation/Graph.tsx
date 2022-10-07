import React from 'react';
import s from './GraphNavigation.module.scss';

const configuration = {
  infrastructure: {
    dataset: {
      width: '218px',
      height: '186px',
      img: '/images/project/graph/dataset.png',
      isActive: false,
      isClickable: true,
      backgroundColor: '#333333',
      text: 'Data Version Control',
      bottomBar: true,
      barColor: '#9A86FD',
    },
    experiments: {
      width: '218px',
      height: '186px',
      img: '/images/project/graph/experiments.svg',
      isActive: false,
      isClickable: true,
      backgroundColor: '#333333',
      text: 'Experiment control',
      bottomBar: true,
      barColor: '#0D5DEC',
    },
  },
  research: {
    maintenance: {
      width: '218px',
      height: '82px',
      img: null,
      isActive: false,
      isClickable: false,
      backgroundColor: null,
      text: 'Maintenance',
      bottomBar: true,
      barColor: '#DED7FE',
    },
    database: {
      width: '152px',
      height: '177px',
      img: '/image',
      isActive: false,
      isClickable: false,
      backgroundColor: '#DED7FE',
      text: 'Database',
      bottomBar: false,
    },
    data_labeling_web: {
      width: '218px',
      height: '82px',
      img: null,
      isActive: false,
      isClickable: false,
      backgroundColor: '#DED7FE',
      text: 'Data Labeling (web)',
      bottomBar: true,
      barColor: '#DED7FE',
    },
    data_exploration: {
      width: '218px',
      height: '82px',
      img: null,
      isActive: false,
      isClickable: false,
      backgroundColor: '#DED7FE',
      text: 'Data Exploration',
      bottomBar: true,
      barColor: '#DED7FE',
    },
    code: {
      width: '170px',
      height: '186px',
      img: '/images/project/graph/code.png',
      isActive: false,
      isClickable: true,
      backgroundColor: '#4E4E52',
      text: 'Code versions',
      bottomBar: true,
      barColor: '#1DF580',
    },
    infrastructure: {
      width: '170px',
      height: '186px',
      img: '/images/project/graph/infrastructure.png',
      isActive: false,
      isClickable: true,
      backgroundColor: '#4E4E52',
      text: 'FinOPS',
      bottomBar: true,
      barColor: '#B7CFEF',
    },
    evaluation: {
      width: '218px',
      height: '82px',
      img: null,
      isActive: false,
      isClickable: false,
      backgroundColor: '#DED7FE',
      text: 'Evaluation',
      bottomBar: true,
      barColor: '#DED7FE',
    },
  },
  production: {
    api_data: {
      width: '152px',
      height: '177px',
      img: '/image',
      isActive: false,
      isClickable: false,
      backgroundColor: '#DED7FE',
      text: 'API data',
      bottomBar: false,
    },
    data_monitoring: {
      width: '218px',
      height: '186px',
      img: '/images/project/graph/data_monitoring.png',
      isActive: false,
      isClickable: false,
      backgroundColor: '#333333',
      text: 'Data monitoring',
      bottomBar: true,
      barColor: '#57DAD7',
    },
    monitoring: {
      width: '218px',
      height: '186px',
      img: '/images/project/graph/monitoring.png',
      isActive: false,
      isClickable: true,
      backgroundColor: '#333333',
      text: 'Model monitoring',
      bottomBar: true,
      barColor: '#F51D44;',
    },
    model_serving: {
      width: '218px',
      height: '186px',
      img: '/images/project/graph/model_serving.png',
      isActive: false,
      isClickable: false,
      backgroundColor: '#333333',
      text: 'Model serving',
      bottomBar: true,
      barColor: '#FFD600',
    },
  },
};

function Graph() {
  const cardMaker = (card: any) => {
    if (card.img) {
      return (
        <div>
          <img src={card.img} alt={card.text} />
          {card.text}
        </div>
      );
    }
    return <div>{card.text}</div>;
  };

  const generateJSX = (config: any) => {
    const jsx = Object.keys(config).map((key) => (
      <div>
        <div>{key}</div>
        <div className={s.card_container}>
          {Object.keys(config[key]).map((item) => cardMaker(config[key][item]))}
        </div>
      </div>
    ));
    return jsx;
  };

  return <div>{generateJSX(configuration)}</div>;
}

export default Graph;
