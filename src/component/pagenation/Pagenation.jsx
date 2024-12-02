import React ,{useState}from 'react'

 function Pagenation() {
  const[increment,setIncrement]=useState(1)
  const incrementfunction=()=>{
    setIncrement(increment+1);
  }
   console.log("Pagenation componet");
  return (
    <div>
      <h1>{increment}</h1>
      <button onClick={(()=>{
        incrementfunction()
      })}>page componet</button>
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              1
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              2
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              3
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default React.memo(Pagenation);