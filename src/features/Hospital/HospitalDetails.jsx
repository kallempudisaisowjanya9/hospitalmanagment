import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {  useGetHospitalDetailsByIdQuery } from '../../services/hospApi';
import _ from 'lodash'

function HospitalDetails() {
  var p=useParams();
  var {isLoading,data}=useGetHospitalDetailsByIdQuery(p.id);
  
  console.log(data)
  console.log(p)
  var[beds,setBeds]=useState(null)
  var[bedTypes,setBedTypes]=useState([])
  useEffect(()=>{
    if(data){
      var bedsByCategory=_.groupBy(data.beds,"bedtype")
      console.log(bedsByCategory)
      setBeds(bedsByCategory)
      var temp=[]
      for(var k in bedsByCategory ){
        temp.push(k)
      }
      setBedTypes([...temp])
    }
  },[data])
  function occupyBed(bid){
    console.clear();
    console.log(data)
    var tempBeds=data.beds;
    tempBeds=tempBeds.map((bed)=>{
      if(bed.bedId==bid){
        return {...bed,bedStatus:'occupied'}
      }
      else {
        return bed;
      }
     
    })
    console.log("Temp bed::",tempBeds);
    data={...data,beds:[...tempBeds]}
  }
  return (
    <div>
      <h1>HospitalDetails</h1>
      {
        isLoading && ("please wait...")
      }
      {
        !isLoading && (
          <div>
            <h1>{data.hospitalName.toUpperCase()}</h1>
            <ul>
              {
                bedTypes.map((t)=>{
                  return <li>
                    {t}-{beds[t].length}
                    <br />
                    {
                      beds[t].map((bed)=>{
                        return (<> { bed.bedStatus==='open' && <i class="bi bi-clipboard h4 m-2" onClick={()=>{occupyBed(bed.bedId)}}> </i>}
                        { bed.bedStatus==='occupied' && <i class="bi bi-clipboard-fill h4 m-2" onClick={()=>{occupyBed(bed.bedId)}}> </i>}
                        </>)
                      })
                    }
                  
                  </li>
                })
              }
            </ul>
            </div>
        )
      }
    </div>
  )
}

export default HospitalDetails