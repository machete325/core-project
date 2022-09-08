import React, { useMemo } from 'react';
import CheckBox from '../CheckBox/CheckBox';
import s from './RecentlyOpened.module.scss';

interface IRecently {
  id: number;
  category: string;
  name: string;
  check: boolean;
}

type Props = {
  data: IRecently[];
};

const findCategories = (data: IRecently[]) => {
  const categories = data.reduce((acc: any, elem: any) => [...acc, elem.category], []);
  const uniqeCategories = new Set(categories);
  return uniqeCategories;
};

const generateRecentlyItems = (data: IRecently[], category: string) => (
  <div key={category} className={s.category_container}>
    <div className={s.title}>{category}</div>
    {data.map(
      (item) => item.category === category && (
      <div key={item.id} className={s.checkbox_container}>
        <CheckBox id={item.id} checked={item.check} />
        <span className={s.name}>{item.name}</span>
      </div>
      ),
    )}
  </div>
);

const generateJSX = (data: IRecently[]) => {
  const categories = useMemo(() => findCategories(data), [data]);
  const arr = [];
  /* eslint-disable-next-line */
  for (const category of categories.values()) {
    arr.push(generateRecentlyItems(data, category));
  }

  return arr;
};

function RecentlyOpened({ data }: Props) {
  return <div className={s.wrapper}>{generateJSX(data)}</div>;
}

export default RecentlyOpened;
