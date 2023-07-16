import React from "react";
import Header from "./Header";
import Custom from "./custom";

function App(){
    function btnmsg()
    {
        console.log("button is pressed")
    }
    return <div>
        <Header/ >
        <Custom name="yash" msg="how are you"/ >
          <button type="button" onClick={btnmsg}  className="btn btn-outline-primary">hey click me </button>  
    </div>
}

export default App