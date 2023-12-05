import React, { useState } from 'react'
import { useGetAllHospitalsQuery } from '../../services/hospApi'

function AddBed() {
 var{isLoading:isHospitalLoading, data:hospitals}= useGetAllHospitalsQuery();
 var [newBed,setNewBed]=useState({
  bedStatus:'open',
  bedtype:'',
  bedPrice:0,
  patients:[]

 })
 var [selectedHospital,setSelectedHospital]=useState(null)
 var [bedTypes,setBedTypes]=useState([])
 function updateBedTypes(hn)
 {
  
  setBedTypes(JSON.parse(hn).bedTypes)
 }
  return (
    <div className='border border-2 border-danger m-2 p-2'>
        <h1>ADD BED</h1>
        {
          isHospitalLoading &&(<b>...wait</b>)
        }
        {
          !isHospitalLoading &&(
            <select onChange={(e)=>{updateBedTypes(e.target.value)}} name="" id="">
              <option value={null} disabled selected>Please Select</option>
              {
                hospitals.map((h)=>{
                  return <option value={JSON.stringify(h)} >{h.hospitalName}</option>
                  
                })
              }
            </select>
          )
        }
        {
          bedTypes.length>0 && (
            <select>
              {
                bedTypes.map((bt)=>{
                  return <option value={JSON.stringify(bt)}>{bt.bedType}</option>
                })
              }
            </select>
            )
        }
    </div>
  )
}

export default AddBed