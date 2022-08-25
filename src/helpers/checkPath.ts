export default function checkPath(linkPath: string, pathname: string) {
  if (pathname === '/main/' && linkPath === 'projects') {
    return true;
  }
  return pathname === `/main/${linkPath}`;
}
