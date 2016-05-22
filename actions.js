export const ADD_MEMO = 'ADD_MEMO';
export const CHANGE_MODE = 'CHANGE_MODE';
export const Modes = {
  WRITE: 'WRITE',
  DRAFT: 'DRAFT'
}

const uid = () => Math.random().toString(34).slice(2);

export function addMemo(text) {
  return {
    type: ADD_MEMO,
    payload: {
      id:   uid(),
      text: text
    }
  }
}

export function changeMode(mode) {
  return {
    type: CHANGE_MODE,
    mode: mode
  }
}
