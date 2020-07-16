import { set, remove, get } from 'tiny-cookie';
import moment from 'moment';

export function setCookie({ name, value, domain, expires }) {
  if (!name || !value) return console.error('Missing cookie name or value');
  const hostName = window.location.hostname;
  const currentDomain = domain || hostName;
  const currentExpires =
    expires ||
    moment()
      .add(30, 'day')
      .toDate();
  return set(name, value, {
    domain: currentDomain,
    expires: currentExpires,
  });
}

export function getCookie(name) {
  return get(name);
}

export function removeCookie({ name, domain }) {
  const hostName = window.location.hostname;
  const currentDomain = domain || hostName;
  remove(name, {
    domain: currentDomain,
  });
}
