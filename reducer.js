import { List, Map } from "immutable";

const init = List([]);

export default function(memos=init, action) {
  switch(action.type) {
    case "ADD_MEMO":
      return memos.push(action.payload);
    default:
      return memos;
  }
}
