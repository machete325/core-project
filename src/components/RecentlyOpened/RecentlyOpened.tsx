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
  data: IRecently[] | undefined;
  handleCheckRecentyOpened: any;
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
  handleCheckRecentyOpened: any,
) => (
  <div key={category} className={s.category_container}>
    <div className={s.title}>{category}</div>
    {data.map(
      (item) => item.category === category && (
      <div key={item.id} className={s.checkbox_container}>
        <CheckBox
          id={item.id}
          checked={item.check}
          onChange={() => handleCheckRecentyOpened(item.id)}
        />
        <span className={s.name}>{item.name}</span>
      </div>
      ),
    )}
  </div>
);

const generateJSX = (data: IRecently[], handleCheckRecentyOpened: any) => {
  const categories = useMemo(() => findCategories(data), [data]);
  const markup: any = [];
  // eslint-disable-next-line max-len
  categories.forEach((category) => markup.push(generateRecentlyItems(data, category, handleCheckRecentyOpened)));
  return markup;
};

function RecentlyOpened({ data, handleCheckRecentyOpened }: Props) {
  return (
    <div className={s.wrapper}>
      {data && generateJSX(data, handleCheckRecentyOpened)}
    </div>
  );
}

export default RecentlyOpened;
