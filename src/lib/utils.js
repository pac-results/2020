export const toTitleCase = (str) =>
  str.replace(
    /([^\W_]+[^\s-]*) */g,
    (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  );

export const compareRaceDates = (a, b) => {
  if (a[0].Date < b[0].Date) {
    return -1;
  }
  if (a[0].Date > b[0].Date) {
    return 1;
  }
  return 0;
};

export const compareStrings = (field) => (a, b) => {
  if (a[field] < b[field]) {
    return -1;
  }
  if (a[field] > b[field]) {
    return 1;
  }
  return 0;
};

export const compareTimes = (a, b) => {
  const as = a.Time.split('.');
  const bs = b.Time.split('.');
  if (as.length !== bs.length) return as.length - bs.length;

  for (let i = 0; i< as.length; i++) {
    let aa = parseInt(as[i]);
    let bb = parseInt(bs[i]);
    if (aa !== bb) return aa - bb;
  }
  return 0;
};

export const toSlug = (str) => str.replace(/ /g, '_');

