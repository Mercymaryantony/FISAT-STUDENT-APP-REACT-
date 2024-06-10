import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const View = () => {
    const [data,changedata]=useState([])
    const fetchdata = ()=>
        {
            axios.get("https://courseapplogix.onrender.com/getdata").then(
                (response)=>{
                    changedata(response.data)
                }
            ).catch(
              (error)=>{
                console.log(error.message)
                alert(error.message)
              }
            ).finally()
        }
        useEffect(()=>{fetchdata()},[])
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <table class="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">COLLEGE</th>
      <th scope="col">DOB</th>
      <th scope="col">COURSE</th>
      <th scope="col">MOBILE</th>
      <th scope="col">EMAIL</th>
      <th scope="col">ADDRESS</th>
    </tr>
  </thead>
  <tbody>
   {data.map(
    (value,i)=>{
        return <tr>
        <th scope="row">{value._id}</th>
        <td>{value.firstname}</td>
        <td>{value.lastname}</td>
        <td>{value.college}</td>
        <td>{value.dob}</td>
        <td>{value.course}</td>
        <td>{value.mobile}</td>
        <td>{value.email}</td>
        <td>{value.address}</td>
        
      </tr>
    }
   )}
  </tbody>
</table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default View