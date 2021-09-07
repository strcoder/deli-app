import axios from 'axios';

export const setError = (error: object) => ({
  type: 'SET_ERROR',
  error,
});

export const setTheme = (theme: string) => ({
  type: 'SET_THEME',
  theme,
});

export const updateTheme = ({ theme, dispatch }: { theme: 'light' | 'dark', dispatch: Function }) => {
  try {
    document.cookie = `theme=${theme}`;
    dispatch(setTheme(theme));
  } catch (error) {
    dispatch(setError(error));
  }
};
