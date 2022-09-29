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
}

type Props = {
  data: IData[];
};

function BreadcrumbsContainer({ data }: Props) {
  const { pathname } = useLocation();
  // const navigate = useNavigate();

  const getBreadcrumbs = () => {
    const breadcrumbs = pathname.split('/');
    breadcrumbs.shift();
    const arr: IBreadcrumb[] = [];
    breadcrumbs.forEach((path) => {
      let obj: IBreadcrumb = {
        name: '',
        href: '',
        active: false,
      };
      if (path === breadcrumbs[1]) {
        const name = data.find((project) => project.id === path)?.name;
        obj = { ...obj, name, href: `/project/${path}/overview` };
      } else if (path === 'project') {
        obj = { ...obj, name: 'Projects', href: '/main/projects' };
      } else {
        obj = { ...obj, name: path, href: `${arr[1].href}/${path}` };
      }
      arr.push(obj);
    });
    arr[arr.length - 1].active = true;
    return arr;
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
    <>
      {Object.values(breadcrumbs).map((breadcrumb) => (
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
