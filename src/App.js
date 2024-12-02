
import React,{lazy,Suspense} from "react"
import './App.css';
  let Tabledata = lazy(() => {
    return import("./component/Table");
  });


function App() {

  return (
    <div className="App">
      <h1>Hello</h1>
      <Suspense>
        <Tabledata />
      </Suspense>
     
    </div>
  );
}

export default App;
