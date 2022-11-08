import React, { useMemo, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Xarrow from 'react-xarrows';
import { convertToString } from '../../../../core/helpers/objectMethods';
import { hexToRgba } from '../../../../core/helpers/colorMethods';
import { IConfiguration } from './types';
import s from './GraphNavigation.module.scss';

const configuration: { [key: string]: { [key: string]: IConfiguration } } = {
  infrastructure: {
    datasets: {
      marginLeft: 0.136,
      width: 0.116,
      height: 0.641,
      img: '/images/project/graph/dataset.png',
      imageBackgroundColor: '#4e4e52',
      isActive: false,
      isClickable: true,
      backgroundColor: '#333333',
      text: 'Data Version Control',
      bottomBar: true,
      barColor: '#9A86FD',
      href: 'datasets',
      arrowConfig: [
        {
          end: 'graph-navigation-database',
          startAnchor: 'bottom',
          endAnchor: 'top',
          showTail: true,
          showHead: true,
          path: 'grid',
        },
        {
          end: 'graph-navigation-experiments',
          startAnchor: 'right',
          endAnchor: 'left',
          showTail: true,
          showHead: true,
          path: 'grid',
        },
      ],
    },
    experiments: {
      marginLeft: 0.32,
      width: 0.116,
      height: 0.641,
      img: '/images/project/graph/experiments.png',
      imageBackgroundColor: '#4e4e52',
      isActive: false,
      isClickable: true,
      backgroundColor: '#333333',
      text: 'Experiment control',
      bottomBar: true,
      barColor: '#0D5DEC',
      indicatorColor: '#468BF3',
      href: 'experiments',
      arrowConfig: [
        {
          end: 'graph-navigation-ml_model',
          startAnchor: 'bottom',
          endAnchor: 'top',
          showTail: true,
          showHead: true,
          path: 'grid',
        },
      ],
    },
  },
  research: {
    maintenance: {
      marginLeft: 0.012,
      width: 0.116,
      height: 0.286,
      img: null,
      isActive: false,
      isClickable: false,
      backgroundColor: null,
      text: 'Maintenance',
      bottomBar: true,
      barColor: '#DED7FE',
      arrowConfig: [
        {
          end: 'graph-navigation-monitoring',
          startAnchor: 'bottom',
          endAnchor: 'bottom',
          showTail: true,
          showHead: true,
          path: 'grid',
          cpy1Offset: 0.78,
          cpy2Offset: 0.78,
          extendSVGcanvas: 2000,
        },
        {
          end: 'graph-navigation-database',
          startAnchor: 'right',
          endAnchor: 'left',
          showTail: false,
          showHead: true,
          path: 'grid',
        },
      ],
    },
    database: {
      marginLeft: 0.04,
      width: 0.081,
      height: 0.618,
      img: '/images/project/graph/database.svg',
      imageBackgroundColor: '#1D1E23',
      isActive: false,
      isClickable: false,
      backgroundColor: null,
      text: 'Database',
      bottomBar: false,
      arrowConfig: [
        {
          end: 'graph-navigation-data_labeling_web',
          startAnchor: 'right',
          endAnchor: 'left',
          showTail: false,
          showHead: true,
          path: 'grid',
        },
      ],
    },
    data_labeling_web: {
      marginLeft: 0.019,
      width: 0.116,
      height: 0.286,
      img: null,
      isActive: false,
      isClickable: false,
      backgroundColor: null,
      text: 'Data Labeling (web)',
      bottomBar: true,
      barColor: '#DED7FE',
      arrowConfig: [
        {
          end: 'graph-navigation-data_exploration',
          startAnchor: 'right',
          endAnchor: 'left',
          showTail: false,
          showHead: true,
          path: 'grid',
        },
        {
          end: 'graph-navigation-evaluation',
          startAnchor: 'top',
          endAnchor: 'top',
          showTail: true,
          showHead: true,
          path: 'grid',
          cpy1Offset: -1.36,
          cpy2Offset: -1.36,
          extendSVGcanvas: 100,
          strokeWidth: 0.5,
          headSize: 12,
          tailSize: 12,
        },
      ],
    },
    data_exploration: {
      marginLeft: 0.019,
      width: 0.116,
      height: 0.286,
      img: null,
      isActive: false,
      isClickable: false,
      backgroundColor: null,
      text: 'Data Exploration',
      bottomBar: true,
      barColor: '#DED7FE',
      arrowConfig: [
        {
          end: 'graph-navigation-ml_model',
          startAnchor: 'right',
          endAnchor: 'left',
          showTail: false,
          showHead: true,
          path: 'grid',
        },
        {
          end: 'graph-navigation-data_monitoring',
          startAnchor: 'bottom',
          endAnchor: 'top',
          showTail: true,
          showHead: true,
          path: 'grid',
        },
      ],
    },
    ml_model: {
      marginLeft: 0.019,
      width: 0.211,
      height: 0.867,
      img: null,
      imageBackgroundColor: '#4e4e52',
      isActive: false,
      isClickable: false,
      backgroundColor: null,
      text: 'ML Model',
      bottomBar: false,
      barColor: null,
      arrowConfig: [
        {
          end: 'graph-navigation-evaluation',
          startAnchor: 'right',
          endAnchor: 'left',
          showTail: false,
          showHead: true,
          path: 'grid',
        },
        {
          end: 'graph-navigation-monitoring',
          startAnchor: 'bottom',
          endAnchor: 'top',
          showTail: true,
          showHead: true,
          path: 'grid',
        },
      ],
      content: {
        code: {
          width: 0.09,
          height: 0.65,
          img: '/images/project/graph/code.png',
          imageBackgroundColor: '#4e4e52',
          isActive: false,
          isClickable: true,
          backgroundColor: '#333333',
          text: 'Code versions',
          bottomBar: true,
          barColor: '#1DF580',
          href: 'code',
          arrowConfig: null,
        },
        infrastructure: {
          width: 0.09,
          height: 0.65,
          img: '/images/project/graph/infrastructure.png',
          imageBackgroundColor: '#4e4e52',
          isActive: false,
          isClickable: true,
          backgroundColor: '#333333',
          text: 'FinOPS',
          bottomBar: true,
          barColor: '#B7CFEF',
          indicatorColor: '#87A4D1',
          href: 'infrastructure',
          arrowConfig: null,
        },
      },
    },
    evaluation: {
      marginLeft: 0.066,
      width: 0.116,
      height: 0.286,
      img: null,
      isActive: false,
      isClickable: false,
      backgroundColor: null,
      text: 'Evaluation',
      bottomBar: true,
      barColor: '#DED7FE',
      arrowConfig: [
        {
          end: 'graph-navigation-data_labeling_web',
          startAnchor: 'top',
          endAnchor: 'top',
          showTail: true,
          showHead: false,
          path: 'grid',
          cpy1Offset: -1.35,
          cpy2Offset: -1.35,
          extendSVGcanvas: 2000,
          strokeWidth: 0.5,
          headSize: 12,
          tailSize: 12,
        },
        {
          end: 'graph-navigation-model_serving',
          startAnchor: 'bottom',
          endAnchor: 'top',
          showTail: false,
          showHead: true,
          path: 'grid',
        },
      ],
    },
  },
  production: {
    api_data: {
      marginLeft: 0.162,
      width: 0.081,
      height: 0.618,
      img: '/images/project/graph/api_data.svg',
      imageBackgroundColor: '#1D1E23',
      isActive: false,
      isClickable: false,
      backgroundColor: null,
      text: 'API data',
      bottomBar: false,
      arrowConfig: [
        {
          end: 'graph-navigation-data_monitoring',
          startAnchor: 'right',
          endAnchor: 'left',
          showTail: false,
          showHead: true,
          path: 'grid',
        },
      ],
    },
    data_monitoring: {
      marginLeft: 0.155,
      width: 0.116,
      height: 0.641,
      img: '/images/project/graph/data_monitoring.png',
      imageBackgroundColor: '#4e4e52',
      isActive: false,
      isClickable: false,
      backgroundColor: '#333333',
      text: 'Data monitoring',
      bottomBar: true,
      barColor: '#57DAD7',
      href: 'monitoring',
      arrowConfig: [
        {
          end: 'graph-navigation-monitoring',
          startAnchor: 'right',
          endAnchor: 'left',
          showTail: false,
          showHead: true,
          path: 'grid',
        },
      ],
    },
    monitoring: {
      marginLeft: 0.066,
      width: 0.116,
      height: 0.641,
      img: '/images/project/graph/monitoring.png',
      imageBackgroundColor: '#4e4e52',
      isActive: false,
      isClickable: true,
      backgroundColor: '#333333',
      text: 'Model monitoring',
      bottomBar: true,
      barColor: '#F51D44',
      href: 'monitoring',
      arrowConfig: null,
    },
    model_serving: {
      marginLeft: 0.113,
      width: 0.116,
      height: 0.641,
      img: '/images/project/graph/model_serving.png',
      imageBackgroundColor: '#4e4e52',
      isActive: false,
      isClickable: false,
      backgroundColor: '#333333',
      text: 'Model serving',
      bottomBar: true,
      barColor: '#FFD600',
      href: 'monitoring',
      arrowConfig: [
        {
          end: 'graph-navigation-monitoring',
          startAnchor: 'top',
          endAnchor: 'top',
          showTail: true,
          showHead: false,
          path: 'grid',
          cpy1Offset: -0.1,
          cpy2Offset: -0.1,
        },
      ],
    },
  },
};

const pageConfiguration: { [key: string]: string } = {
  'model-serving': '.production.model_serving',
  monitoring: '.production.monitoring',
  experiments: '.infrastructure.experiments',
  datasets: '.infrastructure.datasets',
  infrastructure: '.research.ml_model.content.infrastructure',
  code: '.research.ml_model.content.code',
  'data-monitoring': '.production.data_monitoring',
};

function Graph({ cardContainerSize, handleGetCardContainerSize }: any) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [cardConfiguration, setCardConfiguration] = useState(configuration);
  const [page, setPage] = useState<undefined | string>(undefined);

  const getActualPage = () => {
    const splitedPath = pathname.split('/');
    // the splitedPath.length > 3 because we must have path which consist of four elements
    if (splitedPath.length > 3) {
      const actualPage = splitedPath[splitedPath.length - 1];
      if (pageConfiguration[actualPage]) {
        const configurationCopy = JSON.parse(JSON.stringify(configuration));
        const card = convertToString(
          configurationCopy,
          pageConfiguration[actualPage],
        );
        setCardConfiguration(configurationCopy);
        card.isActive = true;
      } else {
        setCardConfiguration(configuration);
      }
      setPage(actualPage);
    }
  };

  const handleNavigate = (path: string, isClickable: boolean) => {
    if (isClickable) {
      if (page === path) {
        return;
      }
      navigate(`../${path}`);
    }
  };

  useEffect(() => {
    handleGetCardContainerSize();
    getActualPage();
  }, [page]);

  const formAdditionalContent = (cards: any) => (
    <div className={s.card_content_wrapper}>
      {Object.entries(cards).map(([key, card]: any) => (
        <div
          role="presentation"
          key={`container-${key}`}
          id={`graph-navigation-${key}`}
          className={`${
            card.isActive ? s.card_container_active : s.card_container
          } ${card.isClickable && s.cursor_pointer}`}
          style={{
            width: `${cardContainerSize.width * card.width}px`,
            height: `${cardContainerSize.height * card.height}px`,
            marginLeft: `${cardContainerSize.width * card.marginLeft}px`,
            backgroundColor: card.backgroundColor
              ? card.backgroundColor
              : 'inherit',
            border: card.isActive
              ? `2px solid ${card.barColor}`
              : '1px solid #4e4e52',
            boxShadow: card.isActive
              ? `0px 4px 50px rgba(${hexToRgba(card.barColor, '0.35')})`
              : 'none',
          }}
          onClick={() => handleNavigate(card.href, card.isClickable)}
        >
          {card.isActive && (
            <span
              className={s.card_indicator}
              style={{
                backgroundColor: card.indicatorColor
                  ? card.indicatorColor
                  : card.barColor,
                boxShadow: `0px 3px 11px rgba(${hexToRgba(
                  card.barColor,
                  '0.8',
                )})`,
              }}
            />
          )}
          <div
            className={s.image_container}
            style={{
              backgroundColor: card.imageBackgroundColor,
              width: `${cardContainerSize.width * card.width * 0.47}px`,
              height: `${cardContainerSize.height * card.height * 0.43}px`,
            }}
          >
            <img
              width={`${cardContainerSize.width * card.width * 0.35}px`}
              height={`${cardContainerSize.height * card.height * 0.32}px`}
              className={s.card_image}
              src={card.img}
              alt={card.text}
            />
          </div>
          <div className={s.card_text} style={{ marginTop: '11%' }}>
            {card.text}
          </div>
          {card.bottomBar && (
            <div
              className={s.card_bottom_bar}
              style={{ backgroundColor: card.barColor }}
            />
          )}
        </div>
      ))}
    </div>
  );

  const handleCreateCard = (card: any, key: any) => {
    if (card.img) {
      return (
        <div key={key}>
          {card.arrowConfig
            && card.arrowConfig.map((item: any) => (
              <Xarrow
                key={`xarrow-${key}${item.end}`}
                startAnchor={item.startAnchor}
                endAnchor={item.endAnchor}
                color="white"
                strokeWidth={item.strokeWidth || 1}
                headSize={item.headSize || 6}
                tailSize={item.tailSize || 6}
                curveness={1}
                path={item.path}
                start={`graph-navigation-${key}`}
                end={item.end}
                showTail={item.showTail}
                showHead={item.showHead}
                _cpy1Offset={
                  Math.ceil(cardContainerSize.height * item.cpy1Offset) || 0
                }
                _cpy2Offset={
                  Math.ceil(cardContainerSize.height * item.cpy2Offset) || 0
                }
                _extendSVGcanvas={item.extendSVGcanvas || 0}
              />
            ))}

          <div
            role="presentation"
            id={`graph-navigation-${key}`}
            className={`${
              card.isActive ? s.card_container_active : s.card_container
            } ${card.isClickable && s.cursor_pointer}`}
            style={{
              width: `${cardContainerSize.width * card.width}px`,
              height: `${cardContainerSize.height * card.height}px`,
              marginLeft: `${cardContainerSize.width * card.marginLeft}px`,
              backgroundColor: card.backgroundColor
                ? card.backgroundColor
                : 'inherit',
              border: card.isActive
                ? `2px solid ${card.barColor}`
                : '1px solid #4e4e52',
              boxShadow: card.isActive
                ? `0px 4px 50px rgba(${hexToRgba(card.barColor, '0.35')})`
                : 'none',
            }}
            onClick={() => handleNavigate(card.href, card.isClickable)}
          >
            {card.isActive && (
              <span
                className={s.card_indicator}
                style={{
                  backgroundColor: card.indicatorColor
                    ? card.indicatorColor
                    : card.barColor,
                  boxShadow: `0px 3px 11px rgba(${hexToRgba(
                    card.barColor,
                    '0.8',
                  )})`,
                }}
              />
            )}
            <div
              className={s.image_container}
              style={{
                backgroundColor: card.imageBackgroundColor,
                width: `${cardContainerSize.width * card.width * 0.36}px`,
                height: `${cardContainerSize.height * card.height * 0.43}px`,
              }}
            >
              <img
                width={`${cardContainerSize.width * card.width * 0.275}px`}
                height={`${cardContainerSize.height * card.height * 0.32}px`}
                className={s.card_image}
                src={card.img}
                alt={card.text}
              />
            </div>
            <div
              className={s.card_text}
              style={{
                marginTop: '11%',
              }}
            >
              {card.text}
            </div>
            {card.bottomBar && (
              <div
                className={s.card_bottom_bar}
                style={{ backgroundColor: card.barColor }}
              />
            )}
          </div>
        </div>
      );
    }
    return (
      <div key={key}>
        {card.arrowConfig
          && card.arrowConfig.map((item: any) => (
            <Xarrow
              key={`xarrow-${key}${item.end}`}
              startAnchor={item.startAnchor}
              endAnchor={item.endAnchor}
              color="white"
              strokeWidth={item.strokeWidth || 1}
              headSize={item.headSize || 6}
              tailSize={item.tailSize || 6}
              curveness={1}
              path={item.path}
              start={`graph-navigation-${key}`}
              end={item.end}
              showTail={item.showTail}
              showHead={item.showHead}
              _cpy1Offset={
                Math.ceil(cardContainerSize.height * item.cpy1Offset) || 0
              }
              _cpy2Offset={
                Math.ceil(cardContainerSize.height * item.cpy2Offset) || 0
              }
              _extendSVGcanvas={item.extendSVGcanvas || 0}
            />
          ))}
        <div
          id={`graph-navigation-${key}`}
          className={s.card_container}
          style={{
            width: `${cardContainerSize.width * card.width}px`,
            height: `${cardContainerSize.height * card.height}px`,
            marginLeft: `${cardContainerSize.width * card.marginLeft}px`,
            backgroundColor: card.backgroundColor
              ? card.backgroundColor
              : 'inherit',
            padding: card.content ? '16px' : '0',
          }}
        >
          <div className={card.content ? s.card_content_text : s.card_text}>
            {card.text}
          </div>
          {card.bottomBar && (
            <div
              className={s.card_bottom_bar}
              style={{ backgroundColor: card.barColor }}
            />
          )}
          {card.content && formAdditionalContent(card.content)}
        </div>
      </div>
    );
  };

  const generateMarkup = (config: any) => {
    const jsx = Object.keys(config).map((key) => (
      <div id="graph-content" key={key} className={s.graph_content}>
        <div className={s.status_tag_container}>{key}</div>
        <div className={s.card_wrapper}>
          {Object.keys(config[key]).map((item) => handleCreateCard(config[key][item], item))}
        </div>
      </div>
    ));
    return jsx;
  };

  const markup = useMemo(
    () => generateMarkup(cardConfiguration),
    [cardConfiguration, page, cardContainerSize],
  );

  return <div className={s.navigation_wrapper}>{page && markup}</div>;
}

export default Graph;
