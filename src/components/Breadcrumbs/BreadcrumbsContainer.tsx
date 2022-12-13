import React, { useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Skeleton } from '@mui/material';
import Breadcrumbs from './Breadcrumbs';
import { IProject } from '../../types/project/project';

interface IBreadcrumb {
  name: string | undefined;
  href: string;
  active: boolean;
}

type Props = {
  data: IProject;
};

function BreadcrumbsContainer({ data }: Props) {
  const { pathname } = useLocation();
  const navigate = useNavigate();

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
      if (obj.name !== 'overview') {
        pathsArr.push(obj);
      }
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
    navigate(`../${value}`);
  };

  const breadcrumbs = useMemo(() => {
    if (data) {
      return getBreadcrumbs();
    }
    return null;
  }, [data]);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {breadcrumbs ? (
        breadcrumbs.map((breadcrumb) => (
          <Breadcrumbs
            key={breadcrumb.href}
            href={breadcrumb.href}
            name={breadcrumb.name}
            active={breadcrumb.active}
            separator={!breadcrumb.active ? '/images/icons/CaretRight.svg' : ''}
            onClick={handleNavigate}
          />
        ))
      ) : (
        <Skeleton
          variant="rounded"
          width="400px"
          animation="wave"
          height="40px"
        />
      )}
    </>
  );
}

export default BreadcrumbsContainer;
