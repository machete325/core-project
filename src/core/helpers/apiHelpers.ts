export const getAdditionalParams = (
  display?: boolean,
  page?: number,
  size?: number,
) => {
  let url = display ? '?display=true' : '?display=false';
  if (page) {
    url += `&page=${page}`;
  }
  if (size) {
    url += `&page_size=${size}`;
  }
  return url;
};
