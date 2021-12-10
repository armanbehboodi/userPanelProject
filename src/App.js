import React, {Fragment} from "react";

import MainBox from "./components/MainBox/MainBox";
import SideBox from "./components/SideBox/SideBox";

const App = () => {
  return (
      <Fragment>
        <MainBox />
        <SideBox />
      </Fragment>
  )
}

export default App;