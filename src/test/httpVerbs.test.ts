import Item from "mock-fs/lib/item";
import {
  removeHttpVerbs,
  startWithHttpVerb,
  methodNameBuilder,
  getMethodName
} from "../base/httpVerbs";

describe("Utils", () => {
  it("Removes supported http verbs from string", () => {
    const query = "DELETE a";
    const result = removeHttpVerbs(query);
    expect(result).toEqual("a");
  });
  it("Keep untouched a string without the supported http verbs", () => {
    const query = "PUT a";
    const result = removeHttpVerbs(query);
    expect(result).toEqual(query);
  });
  it("Check a string that have an http verb", () => {
    const query = "DELETE a";
    const result = startWithHttpVerb(query);
    expect(result).toEqual(true);
  });
  it("Check a string that doesnt have an http verb", () => {
    const query = "PUT a";
    const result = startWithHttpVerb(query);
    expect(result).toEqual(false);
  });
  it("returns false if text has a verb elsewhere but the start", () => {
    const query = "a GET";
    const result = startWithHttpVerb(query);
    expect(result).toEqual(false);
  });
  it("return the correct method name", () => {
    const result = methodNameBuilder("GET");
    expect(result).toEqual("this.transport.doGetRequest");
  });
  it('should return the correct method name with GET',()=>{
    const result = getMethodName('GET dd dd dd ')
    expect(result).toEqual("this.transport.doGetRequest")
  })
});
