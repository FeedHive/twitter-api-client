export const createCamelCaseTitle = (slashedTitle: string) => {
  const transformedSlashedTitle = slashedTitle
    .trim()
    .replace(/ /g, '/')
    .replace(/:/g, 'By/')
    .replace(/\(/g, '/')
    .replace(/\)/g, '/')
    .replace(/\/\//g, '/')
    .replace(/_/g, '/')
    .replace(/,/g, '/');

  const words = transformedSlashedTitle.split('/');
  let title = '';

  words.forEach((w) => {
    if (!w) {
      return;
    }

    title += w.replace(/^./, w[0].toUpperCase());
  });

  return title;
};
