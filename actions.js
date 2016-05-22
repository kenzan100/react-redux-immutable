const uid = () => Math.random().toString(34).slice(2);

export function addMemo(text) {
  return {
    type: "ADD_MEMO",
    payload: {
      id:   uid(),
      text: text
    }
  }
}
