import React,{useState} from "react";
import {tabledetails} from "../component/tabledata";

// pagelimit
// page
//for holding two differnt values we use two diffent state varible


//this page limiet and page value we will update thoufght the event 
export default function Tabledata() {
  const[page, setPage] = useState(1);
   const [pagelimt, setPagelimit] = useState(5);
  //    let arraydata=[]
  //  for(let i=(page-1)*pagelimt;i<pagelimt*page;i++){
  //   console.log(i)
  //   let arraydata.push(tabledetails[i])
  //  }
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
            .slice((page - 1)*pagelimt, page*pagelimt)
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
    </div>
  );
}
