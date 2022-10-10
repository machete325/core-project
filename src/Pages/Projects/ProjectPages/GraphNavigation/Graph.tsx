import React from 'react';
import Xarrow, { Xwrapper } from 'react-xarrows';
import s from './GraphNavigation.module.scss';

// {
//   start: '', end: '', startAnchor: '', endAnchor: '',
// },

const configuration = {
  infrastructure: {
    dataset: {
      width: '218px',
      height: '186px',
      img: '/images/project/graph/dataset.png',
      imageBackgroundColor: '#4e4e52',
      isActive: false,
      isClickable: true,
      backgroundColor: '#333333',
      text: 'Data Version Control',
      bottomBar: true,
      barColor: '#9A86FD',
      arrowConfig: [
        {
          end: 'graph-navigation-database',
          startAnchor: 'bottom',
          endAnchor: 'top',
          showTail: true,
        },
        {
          end: 'graph-navigation-experiments',
          startAnchor: 'right',
          endAnchor: 'left',
          showTail: true,
        },
      ],
    },
    experiments: {
      width: '218px',
      height: '186px',
      img: '/images/project/graph/experiments.png',
      imageBackgroundColor: '#4e4e52',
      isActive: false,
      isClickable: true,
      backgroundColor: '#333333',
      text: 'Experiment control',
      bottomBar: true,
      barColor: '#0D5DEC',
      arrowConfig: null,
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
      arrowConfig: null,
    },
    database: {
      width: '152px',
      height: '177px',
      img: '/images/project/graph/database.svg',
      imageBackgroundColor: '#1D1E23',
      isActive: false,
      isClickable: false,
      backgroundColor: '#DED7FE',
      text: 'Database',
      bottomBar: false,
      arrowConfig: null,
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
      arrowConfig: null,
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
      arrowConfig: null,
    },
    code: {
      width: '170px',
      height: '186px',
      img: '/images/project/graph/code.png',
      imageBackgroundColor: '#4e4e52',
      isActive: false,
      isClickable: true,
      backgroundColor: '#4E4E52',
      text: 'Code versions',
      bottomBar: true,
      barColor: '#1DF580',
      arrowConfig: null,
    },
    infrastructure: {
      width: '170px',
      height: '186px',
      img: '/images/project/graph/infrastructure.png',
      imageBackgroundColor: '#4e4e52',
      isActive: false,
      isClickable: true,
      backgroundColor: '#4E4E52',
      text: 'FinOPS',
      bottomBar: true,
      barColor: '#B7CFEF',
      arrowConfig: null,
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
      arrowConfig: null,
    },
  },
  production: {
    api_data: {
      width: '152px',
      height: '177px',
      img: '/images/project/graph/api_data.svg',
      imageBackgroundColor: '#1D1E23',
      isActive: false,
      isClickable: false,
      backgroundColor: '#DED7FE',
      text: 'API data',
      bottomBar: false,
      arrowConfig: null,
    },
    data_monitoring: {
      width: '218px',
      height: '186px',
      img: '/images/project/graph/data_monitoring.png',
      imageBackgroundColor: '#4e4e52',
      isActive: false,
      isClickable: false,
      backgroundColor: '#333333',
      text: 'Data monitoring',
      bottomBar: true,
      barColor: '#57DAD7',
      arrowConfig: null,
    },
    monitoring: {
      width: '218px',
      height: '186px',
      img: '/images/project/graph/monitoring.png',
      imageBackgroundColor: '#4e4e52',
      isActive: false,
      isClickable: true,
      backgroundColor: '#333333',
      text: 'Model monitoring',
      bottomBar: true,
      barColor: '#F51D44',
      arrowConfig: null,
    },
    model_serving: {
      width: '218px',
      height: '186px',
      img: '/images/project/graph/model_serving.png',
      imageBackgroundColor: '#4e4e52',
      isActive: false,
      isClickable: false,
      backgroundColor: '#333333',
      text: 'Model serving',
      bottomBar: true,
      barColor: '#FFD600',
      arrowConfig: null,
    },
  },
};

function Graph() {
  const cardMaker = (card: any, key: any) => {
    if (card.img) {
      return (
        <Xwrapper>
          {card.arrowConfig
            && card.arrowConfig.map((item: any) => (
              <Xarrow
                startAnchor={item.startAnchor}
                endAnchor={item.endAnchor}
                color="white"
                strokeWidth={1}
                curveness={1}
                path="grid"
                start={`graph-navigation-${key}`}
                end={item.end}
                showTail={item.showTail}
              />
            ))}
          <div
            id={`graph-navigation-${key}`}
            className={`${s.card_container} ${
              card.isClickable && s.cursor_pointer
            }`}
            style={{ width: card.width, height: card.height }}
          >
            <div
              className={s.image_container}
              style={{
                backgroundColor: card.imageBackgroundColor,
              }}
            >
              <img className={s.card_image} src={card.img} alt={card.text} />
            </div>
            <div className={s.card_text} style={{ marginTop: '24px' }}>
              {card.text}
            </div>
            {card.bottomBar && (
              <div
                className={s.card_bottom_bar}
                style={{ backgroundColor: card.barColor }}
              />
            )}
          </div>
        </Xwrapper>
      );
    }
    return (
      <Xwrapper>
        <div
          className={s.card_container}
          style={{ width: card.width, height: card.height }}
        >
          <div className={s.card_text}>{card.text}</div>
          {card.bottomBar && (
            <div
              className={s.card_bottom_bar}
              style={{ backgroundColor: card.barColor }}
            />
          )}
        </div>
      </Xwrapper>
    );
  };

  const generateJSX = (config: any) => {
    const jsx = Object.keys(config).map((key) => (
      <div className={s.graph_content}>
        <div className={s.status_tag_container}>{key}</div>
        <div className={s.card_wrapper}>
          {Object.keys(config[key]).map((item) => cardMaker(config[key][item], item))}
        </div>
      </div>
    ));
    return jsx;
  };

  return <div>{generateJSX(configuration)}</div>;
}

export default Graph;
