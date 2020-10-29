const supportedHttpVerbs = ["POST", "GET", "DELETE"];

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

export const removeHttpVerbs = (text: string) => {
  const httpVerbsPattern = new RegExp(supportedHttpVerbs.join("|"));
  return text.replace(httpVerbsPattern,'').trim()};

export const startWithHttpVerb = (text:string)=> {
  const httpVerbsPattern = new RegExp(`^(${supportedHttpVerbs.join("|")})`);
  return httpVerbsPattern.test(text)}
