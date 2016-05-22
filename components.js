import React from 'react';
import { Modes } from "./actions";

export function Memo(props) {
  const { memo } = props;

  return(
    <span>
      { memo.text }
    </span>
  );
}

export function MemoList(props) {
  const { state, addMemo, changeMode } = props;
  const mode  = state.get('mode');
  const memos = state.get('memos');

  const onSubmit = (event) => {
    const input = event.target;
    const text  = input.value;
    const isEnterKey   = (event.which == 13);
    const isLongEnough = text.replace(/\n/, '').length > 0;
    if(isEnterKey && isLongEnough) {
      input.value = "";
      addMemo(text);
      changeMode(Modes.DRAFT);
    }
  };

  const addHere = id => event => {
    changeMode(Modes.WRITE);
  }

  if( mode == Modes.WRITE) {
    return (
      <div>
        <textarea placeholder="What's up?" onKeyUp={onSubmit} />
      </div>
    );
  } else {
    return (
      <div>
        <ul>
          { memos.map(m => (
            <li key={ m.id }>
              <button onClick={addHere(m.id)}>Add</button>
              <Memo memo={ m } />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
