import React from "react";
import Greeting from "./Greeting";

function App(){
  return(
    <div>

      <Greeting name="Ali" timeOfDay="morning" bgColor="lightblue"/>

      <Greeting name="Sara" timeOfDay="afternoon" bgColor="lightgreen"/>

      <Greeting name="Hassan" timeOfDay="evening" bgColor="lightpink"/>

    </div>
  )
}

export default App;