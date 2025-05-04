
export const getThemeValue = (key: string): string => {
  return getComputedStyle(document.documentElement).getPropertyValue(`--${key}`).trim();
};

