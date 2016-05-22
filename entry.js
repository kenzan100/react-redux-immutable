import React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducer";
import { MemoList } from "./containers";

import { List } from "immutable";

const store = createStore(reducer);

const dummyStore = {
  mode: "Write",
  memos: List([
    {
      id: 0, text: "Hi"
    }
  ])
}

render(
  <Provider store={store}>
    <MemoList />
  </Provider>, document.getElementById('app')
);
