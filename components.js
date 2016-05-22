import React from 'react';

export function Memo(props) {
  const { memo } = props;

  return(
    <span>
      { memo.text }
    </span>
  );
}

export function MemoList(props) {
  const { memos, addMemo } = props;

  const onSubmit = (event) => {
    const input = event.target;
    const text  = input.value;
    const isEnterKey   = (event.which == 13);
    const isLongEnough = text.length > 0;
    if(isEnterKey && isLongEnough) {
      input.value = "";
      addMemo(text);
    }
  };

  return (
    <div>
      <ul>
        { memos.map(m => (
          <li key={ m.id }>
            <Memo memo={ m } />
          </li>
          ))}
        </ul>
        <textarea placeholder="What's up?" onKeyUp={onSubmit} />
      </div>
  );
}
