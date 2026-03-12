import { parseCookies, setCookie, destroyCookie } from 'nookies';

export const useCookies = () => {
  const cookies = parseCookies();

  const addCookie = (name: string, value: string, options: { [key: string]: string | number }) =>
    setCookie(null, name, value, options);
  const deleteCookie = (name: string, options: { [key: string]: string | number }) =>
    destroyCookie(null, name, options);
  const getCookie = (name: string) => (cookies[name] && JSON.parse(cookies[name])) || null;

  return { cookies, addCookie, deleteCookie, getCookie };
};
