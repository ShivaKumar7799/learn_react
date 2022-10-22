import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Axios() {
  const [sportsData, setSportData] = useState([]);
  const sportsApi = "https://62f7efccab9f1f8e8905fef0.mockapi.io/sports";
  useEffect( () => {
     axios.get(sportsApi).then((response) => {
        console.log(response.data);
        setSportData(response.data)
     })
  },[])
  return (
    <div>
        {sportsData.map((item,index) => <div key={index}>
                                           <h1> Sport Name : {item.sportName} </h1>
                                           <h2> Players : {item.players} </h2> 
                                           <h2> Kit : {item.sportKit} </h2>
                                         </div> )}
    </div>
  )
}

export default Axios