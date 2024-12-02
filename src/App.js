
import React, { lazy, Suspense, useState } from "react";
import './App.css';
  let Tabledata = lazy(() => {
    return import("./component/Table");
  });


function App() {
     const [increment, setIncrement] = useState(1);
    const incrementfunction = () => {
     
      setIncrement(increment + 1);
    };
  console.log("app componet")

  return (
    <div className="App">
      <h1>Hello</h1>
      <Suspense>
        <Tabledata />
      </Suspense>
      <button
        onClick={() => {
          incrementfunction();
        }}
      >
       Parent componet
      </button>
    </div>
  );
}

export default React.memo(App);
