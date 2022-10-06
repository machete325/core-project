import React from 'react';
import { useLocation } from 'react-router-dom';
import Breadcrumbs from './Breadcrumbs';

interface IBreadcrumb {
  name: string | undefined;
  href: string;
  active: boolean;
}

interface IData {
  id: string;
  name: string;
  page: string;
  description: string;
}

type Props = {
  data: IData;
};

function BreadcrumbsContainer({ data }: Props) {
  const { pathname } = useLocation();
  // const navigate = useNavigate();

  const getBreadcrumbs = () => {
    const breadcrumbs = pathname.split('/');
    breadcrumbs.shift();
    const pathsArr: IBreadcrumb[] = [];
    breadcrumbs.forEach((path) => {
      let obj: IBreadcrumb = {
        name: '',
        href: '',
        active: false,
      };
      if (path === breadcrumbs[1]) {
        const { name } = data;
        obj = { ...obj, name, href: `/project/${path}/overview` };
      } else if (path === 'project') {
        obj = { ...obj, name: 'Projects', href: '/main/projects' };
      } else {
        obj = { ...obj, name: path, href: `${pathsArr[1].href}/${path}` };
      }
      pathsArr.push(obj);
    });
    pathsArr[pathsArr.length - 1].active = true;
    return pathsArr;
  };

  const handleNavigate = (e: React.MouseEvent) => {
    const value = (e.target as HTMLInputElement).getAttribute('value');
    const active = (e.target as HTMLInputElement).getAttribute('active');
    if (active === 'true') {
      return;
    }
    console.log(`../${value}`);
    // navigate(`../${value}`);
  };
  const breadcrumbs = getBreadcrumbs();

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {Object.keys(data).length !== 0
        && breadcrumbs.map((breadcrumb) => (
          <Breadcrumbs
            key={breadcrumb.href}
            href={breadcrumb.href}
            name={breadcrumb.name}
            active={breadcrumb.active}
            separator={!breadcrumb.active ? '/images/icons/CaretRight.svg' : ''}
            onClick={handleNavigate}
          />
        ))}
    </>
  );
}

export default BreadcrumbsContainer;
