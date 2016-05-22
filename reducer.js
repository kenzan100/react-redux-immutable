import { List, Map } from "immutable";
import { CHANGE_MODE, ADD_MEMO, Modes } from "./actions";

const initState = Map({
  mode:  Modes.WRITE,
  memos: List([
    { id: 0, text: "Hello" }
  ])
});

export default function(state=initState, action) {
  switch(action.type) {
    case ADD_MEMO:
      return state.set('memos', state.get('memos').push(action.payload));
    case CHANGE_MODE:
      return state.set('mode', action.mode);
    default:
      return state;
  }
}
