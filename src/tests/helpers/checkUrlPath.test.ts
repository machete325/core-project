import checkUrlPath from '../../core/helpers/checkUrlPath';

test('Check checkUrlPath function', () => {
  const arr = [
    {
      linkPath: 'projects',
      pathName: '/main/projects',
      path: '/main/',
      id: undefined,
      link: 'projects',
      expect: true,
    },
    {
      linkPath: 'projects',
      pathName: '/main/basd211/projects',
      path: '/main/',
      id: 'basd211',
      link: 'projects',
      expect: true,
    },
    {
      linkPath: 'projects',
      pathName: '/main/112321/projects',
      path: '/main/',
      id: 112321,
      link: 'projects',
      expect: true,
    },
    {
      linkPath: 'projects',
      pathName: '/main/112321/projects',
      path: '/main//12',
      id: 112321,
      link: 'projects',
      expect: false,
    },
  ];
  arr.forEach((item) => {
    expect(
      checkUrlPath(item.linkPath, item.pathName, item.path, item.link, item.id),
    ).toBe(item.expect);
  });
});
