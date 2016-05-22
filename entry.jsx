import React from "react";
import {render} from "react-dom";

import LikeComponent from "./LikeComponent";

class App extends React.Component {
  render () {
    return(
      <div>
        <p> Hlo </p>
        <LikeComponent/>
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
