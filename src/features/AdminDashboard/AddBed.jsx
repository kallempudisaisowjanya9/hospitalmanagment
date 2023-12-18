import React, { useEffect, useState } from 'react'
import { useAddBedsMutation, useGetAllHospitalsQuery } from '../../services/hospApi'

function AddBed() {
var[bedCount,setBedCount]=  useState(0);
var[bedPrice,setBedPrice]=  useState(0);
var[selectedBedType,setSelectedBedType]=  useState('');
 var{isLoading:isHospitalLoading, data:hospitals}= useGetAllHospitalsQuery();
 var [addBedsToDB]=useAddBedsMutation();
 
//  var [newBed,setNewBed]=useState({
//   bedStatus:'open',
//   bedtype:'selectedBedType',
//   bedPrice,
//   patients:[]

//  })
var [selectedHospital,setSelectedHospital]=useState('')
 var [bedTypes,setBedTypes]=useState([])
 function updateBedTypes(hn)
 {
  var selectedHospitalDetails=JSON.parse(hn);
  setBedTypes(selectedHospitalDetails.bedTypes)
 // setSelectedHospitalId(selectedHospitalDetails.id)
  console.log(selectedHospitalDetails.id)
 }
 useEffect(()=>{
  console.log("selectedhosp",selectedHospital)
 },[selectedHospital])
 
 function saveBed(){
  var newbeds=[];
  var newBeds=selectedHospital.beds.filter(b=>b.bedtype===selectedBedType).length;
  for(var i=0;i<=bedCount-1;i++){
   var newBed={
    bedStatus: 'open',
    bedtype:selectedBedType,
    bedPrice,
    patients:[],
    bedId:`${selectedBedType+(newBeds+i+1)}`
   }
  newbeds.push(newBed)
  }
  var latestHospitalDetails= {...selectedHospital,beds:[...selectedHospital.beds,...newbeds]};
  setSelectedHospital({...selectedHospital,beds:[...selectedHospital.beds,...newbeds]})
  //console.log(selectedHospital)
  // var a = [...beds,{id:selectedHospitalId}]
   addBedsToDB(latestHospitalDetails)
 }
  return (
    <div className='border border-2 border-danger m-2 p-2'>
        <h1>ADD BED</h1>
        {
          isHospitalLoading &&(<b>...wait</b>)
        }
        {

          !isHospitalLoading &&(
            <>  
            <select onChange={(e)=>{setSelectedHospital(JSON.parse(e.target.value))}} name="" id="">
              <option value={null} disabled selected>Please Select</option>
              {
                hospitals.map((h)=>{
                  return <option value={JSON.stringify(h)} >{h.hospitalName}</option>
                  
                })
              }
            </select>
            <br />
            </>
          )
        }
        {
       selectedHospital && selectedHospital.bedTypes.length>0 && (
            <>
            <select onChange={(e)=>{setSelectedBedType(e.target.value)}}>
            <option value={null} disabled selected> Please Select</option>
              {
                selectedHospital.bedTypes.map((bt)=>{
                  return <option value={bt.bedType}>{bt.bedType}</option>
                })
              }
            </select>
            <br />
              <input type="number" placeholder='Enter Bed Price' onChange={(e)=>setBedPrice(e.target.value)} /> <br />
              <input type="number" placeholder='Enter Bed Count' onChange={(e)=>setBedCount(e.target.value)} /> <br />

              </>
            )
        }
      
        <br />
        <button onClick={()=>{saveBed()}}>Save Beds</button>
    </div>
  )
}

export default AddBed