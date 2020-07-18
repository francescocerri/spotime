import {
  SET_GLOBAL_MESSAGE,
  RESET_GLOBAL_MESSAGE
} from './constants';

export function setGlobalMessage(messageProps) {
  return {
    type: SET_GLOBAL_MESSAGE,
    payload: messageProps,
  };
}

export function resetGlobalMessage() {
  return {
    type: RESET_GLOBAL_MESSAGE,
  };
}
