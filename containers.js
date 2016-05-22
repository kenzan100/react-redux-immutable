import { connect } from "react-redux";
import * as components from "./components";
import { addMemo } from "./actions";

export const MemoList = connect(
  function mapStateToProps(state) {
    return { memos: state };
  },
  function mapDispatchToProps(dispatch) {
    return {
      addMemo: text => dispatch(addMemo(text))
    };
  }
)(components.MemoList);
