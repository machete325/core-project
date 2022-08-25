export default function checkPath(
  linkPath: string,
  pathname: string,
  path: string,
  link: string,
  id?: number | undefined,
) {
  if (pathname === path && linkPath === link) {
    return true;
  }
  const linkId = `${id}/`;
  console.log(pathname, `${path}${id ? linkId : ''}${linkPath}`);
  return pathname === `${path}${id ? linkId : ''}${linkPath}`;
}
