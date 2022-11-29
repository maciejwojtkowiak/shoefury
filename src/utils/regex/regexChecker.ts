export const regexChecker = (regex: RegExp, textContent: string): boolean => {
  return regex.test(textContent);
};
