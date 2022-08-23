export default function checkPath(linkPath: string, pathname: string) {
  if (pathname === '/' && linkPath === 'projects') {
    return true;
  }
  return pathname === `/${linkPath}`;
}
