import React,{useState,lazy,Suspense} from "react";
import {tabledetails} from "../component/tabledata";

const Pagenation=lazy(()=>{
  return import("../component/pagenation/Pagenation")
})
export default function Tabledata() {
   console.log("Tabledata componet");
  const[page, setPage] = useState(1);
   const [pagelimt, setPagelimit] = useState(5);

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
        <Pagenation />
      </Suspense>
    </div>
  );
}
