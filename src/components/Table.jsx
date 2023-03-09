import { useEffect, useState } from "react"



const Table=()=>{
  const [data,getData]=useState([])
  const [color,getColor]=useState([])
//   const url="https://jsonplaceholder.typicode.com/todos"
    // const fetchdata=()=>{
    //   try{
    //     const response= fetch(url)
    //     const json=response.json()
    //     console.log(json);
    //     getData(json)
    //   }catch(error){
    //     console.log(error);
    //   }
    // }
    const fetchdata = () => {
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then(res => res.json())
        .then(
          (result) => {
            getData(result)
            console.log(result);
          }
        )
    }
    // const handleRowClicked = row => {
    //     const updatedData = data.map(item => {
    //       if (row.id !== item.id) {
    //         return item;
    //       }
    
    //       return {
    //         ...item,
    //         toggleSelected: !item.toggleSelected
    //       };
    //     });
    
    //     getData(updatedData);
    //   };

    const test1 = ()=>{
        return 'red';
        // if (data.id >=0 && data.id <=5) {
		// 	return 'red';
		// } else if (data.id > 5 && data.id <=10) {
		// 	return 'green';
		// }
    }
    

    useEffect(()=>{
        test1();
      fetchdata();
     
    },[])
  return(
    <>
     <div className="cntainer">
     <div className="container-fluid">
          <table className="table">
            <tbody>
              <tr>
                <th>Id</th>
                <th>Title</th>
                <th>User Id</th>
              </tr>
              {
                data.map((item,i)=>(
                    
                  <tr key={i} style={{ backgroundColor:  'red'}}>
                    <td  >{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.userId}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
      </div>
     </div>
    </>
  )
}
export default Table























// import React, { useState } from 'react'
// import axios from 'axios'
// import { useEffect } from 'react';

// const Table = () => {

// const [data, setData] = useState([]);

// const getPostsData = () => {
//     axios
//     .get("https://jsonplaceholder.typicode.com/todos")
//     .then(data => console.log(data.data))
//     .catch(error => console.log(error));
//     };


//    useEffect(()=>{
//     getPostsData();
//   },[])


//     return (
//         <>
//            <div className="container">
//            <table class="table">
//                 <thead>
//                     <tr>
//                         <th scope="col">User Id</th>
//                         <th scope="col">ID</th>
//                         <th scope="col">Title</th>
//                         <th scope="col">Handle</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     <tr>
//                     {
//                 data.map((item,i)=>(
//                   <tr key={i}>
//                     <td>{item.id}</td>
//                     <td>{item.title}</td>
//                     <td>{item.userId}</td>
//                   </tr>
//                 ))
//               }
//                     </tr>
//                     {/* <tr>
//                         <th scope="row">1</th>
//                         <td>ID</td>
//                         <td>Title</td>
//                         <td>@mdo</td>
//                     </tr>
//                     <tr>
//                         <th scope="row">2</th>
//                         <td>Jacob</td>
//                         <td>Thornton</td>
//                         <td>@fat</td>
//                     </tr>
//                     <tr>
//                         <th scope="row">3</th>
//                         <td colspan="2">Larry the Bird</td>
//                         <td>@twitter</td>
//                     </tr> */}
//                 </tbody>
//             </table>
//            </div>
//         </>
//     )
// }

// export default Table