import capitalize from "lodash.capitalize";

const supportedHttpVerbs = ["POST", "GET", "DELETE"];

export const removeHttpVerbs = (text: string) => {
  const httpVerbsPattern = new RegExp(supportedHttpVerbs.join("|"));
  return text.replace(httpVerbsPattern, "").trim();
};

export const startWithHttpVerb = (text: string) => {
  const httpVerbsPattern = new RegExp(`^(${supportedHttpVerbs.join("|")})`);
  return httpVerbsPattern.test(text);
};

export const getMethodName = (text: string) => {
  if (text.startsWith("GET")) return methodNameBuilder("GET");
  if (text.startsWith("POST")) return methodNameBuilder("POST");
  if (text.startsWith("DELETE")) return methodNameBuilder("DELETE");
};
export const methodNameBuilder = (verb: string) => {
  if (supportedHttpVerbs.includes(verb)) {
    return `this.transport.do${capitalize(verb)}Request`;
  }
  throw new Error("This verb is not supported");
};
