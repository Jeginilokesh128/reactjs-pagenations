import React,{useState,lazy,Suspense,useMemo} from "react";
import {tabledetails} from "../component/tabledata";

const Pagenation=lazy(()=>{
  return import("../component/pagenation/Pagenation")
})
 function Tabledata() {
   console.log("Tabledata componet");
  const[page, setPage] = useState(1);
   const [pagelimt, setPagelimit] = useState(5);
   const [decrement, setdecrement] = useState(4);

  //  const decrementfunction=(a,b)=>{
  //   console.log("usememo function")
  //         setdecrement(a+b);
  //  }

// const decrementfunction = useMemo(() => {
//   console.log("usememo function");
//           setdecrement(a+b);
// },[2,2]);

//this will call initiall one time reactjs
//here usememo is a callback function it will auto matically called 
// const decrementfunction = useMemo((a,b) => {
//   console.log("usememo function");
//   setdecrement(a + b);
// }, [10,20]);

const decrementfunction = useMemo(
  (a, b) => {
    console.log("usememo function");
    debugger;
    // setdecrement(a + b);
  },
  [decrement, page]
);

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {tabledetails
            .slice((page - 1) * pagelimt, page * pagelimt)
            .map((item, index) => {
              return (
                <>
                  <tr>
                    <th scope="row">{item.userId}</th>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.completed}</td>
                  </tr>
                  ;
                </>
              );
            })}
        </tbody>
      </table>
      <Suspense>
        <h1>{decrement}</h1>
        <h1>{decrementfunction}</h1>
        <button
          onClick={() => {
           setdecrement(decrement+1);
          }}
        >
          child componet
        </button>
        <Pagenation />
      </Suspense>
    </div>
  );
}
export default React.memo(Tabledata);
