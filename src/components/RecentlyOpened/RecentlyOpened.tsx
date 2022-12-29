import React, { useMemo } from 'react';
import CheckBox from '../CheckBox/CheckBox';
import ExperimentsDropDown from '../DropDown/ExperimentsDropDown/DropDown';
import DatasetsDropDown from '../DropDown/DatasetsDropDown/DropDown';
import s from './RecentlyOpened.module.scss';
import { textSlicer } from '../../core/helpers/textMethods';

interface IRecently {
  id: number;
  category: string;
  name: string;
  check: boolean;
}

type Props = {
  data: IRecently[] | undefined;
  handleCheckRecentlyOpened: any;
};

const defineDropDownType = (category: string) => {
  switch (category) {
    case 'experiments':
      return <ExperimentsDropDown position="top-left" />;
    case 'datasets':
      return <DatasetsDropDown position="top-left" />;
    default:
      return null;
  }
};

const findCategories = (data: IRecently[]) => {
  const categories = data.reduce(
    (acc: any, elem: any) => [...acc, elem.category],
    [],
  );
  const uniqeCategories = new Set(categories);
  return uniqeCategories;
};

const generateRecentlyItems = (
  data: IRecently[],
  category: string,
  handleCheckRecentlyOpened: any,
) => (
  <div key={category} className={s.category_container}>
    <div className={s.title}>{category}</div>
    {data.map(
      (item) => item.category === category && (
      <div key={item.id} className={s.item_container}>
        <div className={s.checkbox_container}>
          <CheckBox
            id={item.id}
            checked={item.check}
            onChange={() => handleCheckRecentlyOpened(item.id, item.category)}
          />
          <span title={item.name} className={s.name}>
            {textSlicer(item.name, 25)}
          </span>
        </div>
        <div>{defineDropDownType(category)}</div>
      </div>
      ),
    )}
  </div>
);

const generateJSX = (data: IRecently[], handleCheckRecentlyOpened: any) => {
  const categories = useMemo(() => findCategories(data), [data]);
  const markup: any = [];
  categories.forEach((category) => markup.push(
    generateRecentlyItems(data, category, handleCheckRecentlyOpened),
  ));
  return markup;
};

function RecentlyOpened({ data, handleCheckRecentlyOpened }: Props) {
  return (
    <div className={s.wrapper}>
      {data && generateJSX(data, handleCheckRecentlyOpened)}
    </div>
  );
}

export default RecentlyOpened;
