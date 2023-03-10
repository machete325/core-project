/* eslint-disable */
export const convertToString = function (o: any, s: any) {
  s = s.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
  s = s.replace(/^\./, ''); // strip a leading dot
  var a = s.split('.');
  for (var i = 0, n = a.length; i < n; ++i) {
    var k = a[i];
    if (o) {
      if (k in o) {
        o = o[k];
      } else {
        return;
      }
    }
  }
  return o;
};

export const checkCodeMessage = (obj: any) => {
  let commit = 'Not available';
  if (obj) {
    if (obj['code']) {
      if (obj['code']['commitMessage']) {
        commit = obj['code']['commitMessage'];
      }
    }
  }
  return commit;
};
