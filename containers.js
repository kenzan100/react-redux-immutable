import { connect } from "react-redux";
import * as components from "./components";
import { addMemo, changeMode } from "./actions";

export const MemoList = connect(
  function mapStateToProps(state) {
    return { state: state };
  },
  function mapDispatchToProps(dispatch) {
    return {
      addMemo: text => dispatch(addMemo(text)),
      changeMode: modeName => dispatch(changeMode(modeName))
    };
  }
)(components.MemoList);
