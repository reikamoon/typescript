export default class Acronym {
  public static parse = (phrase: string): string =>
    phrase
      .match(/[A-Z]+[a-z]*|[a-z]+/g)
      ?.map((m) => m[0].toUpperCase())
      .join("") || "";
}