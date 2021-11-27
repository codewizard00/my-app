import React, { useState,useEffect } from 'react'
import './profile.css'
import {Button, Grid} from "@mui/material" 
import {useParams} from 'react-router-dom'
import Card from './Card';
import Followers from './followers';
// import bgimg from "../../Images/Culturist_5.jpg"

function Profile() {
  const {id} = useParams();
  const [data,setData] = useState([]);
  const [userpost,setUserpost] = useState([]);
  useEffect(()=>{
    fetch('/userDetail',{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        id
      })
    }).then(res=>
      res.json()
    ).then((res)=>{
      setData(res.user)
      console.log(res.user)
    })
  },[])
  useEffect(()=>{
    fetch("/userpost",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        id
      })
    }).then(res=>res.json())
    .then(result=>{
      setUserpost(result.mypost)
      console.log(result.mypost)
    }).catch(err=>console.log(err))
  },[])
    return (
        <div>
            <div class="container">
  <div class="profile-header">
    <div class="profile-img">
      <img src="./bg.jpg" width="200" alt="Profile Image"/>
    </div>
    <div class="profile-nav-info" >
      <h3 class="user-name" style={{color:"white"}}>{data.name}</h3>
      <div style={{display:"flex",flexDirection:"row"}}>
      <p style={{marginTop:"-10%",marginRight:"4%"}}>Posts:</p>
      <p style={{marginTop:"-10%",marginRight:"4%"}}>Posts</p>
      <p style={{marginTop:"-10%",marginRight:"4%"}}>Posts</p>
      </div>
    </div>
    <div class="profile-option">
      <div class="notification">
        <i class="fa fa-bell"></i>
        <span class="alert-message">3</span>
      </div>
    </div>
  </div>

  <div class="main-bd">
    <div class="left-side">
      <div class="profile-side">
        <p class="user-mail"><i class="fa fa-envelope"></i>{data.email}</p>
        <div class="user-bio">
          <h3>Bio</h3>
          <p class="bio">
            Lorem ipsum dolor sit amet, hello how consectetur adipisicing elit. Sint consectetur provident magni yohoho consequuntur, voluptatibus ghdfff exercitationem at quis similique. Optio, amet!
          </p>
        </div>
        <div class="profile-btn">
          <Button variant='contained' style={{marginRight:"10%"}} ><i class="fa fa-comment"></i> Chat</Button>
          <Button variant="contained" ><i class="fa fa-plus"></i> Follow</Button>
        </div>
      </div>

    </div>
    <div class="right-side">
      <Grid container justifyContent="space-between">
        <Grid item xs={12} md={9} lg={9} sm={12}>
          <div className="scrollbar" style={{overflowY:"auto",overflowX:"hidden",height:"700px"}}>
      {userpost.map((item)=>{
        return(
          <Card item={item} />
        )
      })}
      </div>
     </Grid>
     <Grid item order={0} xs={12} md={3} lg={3} sm={12}>
       <Followers/>
     </Grid>
     </Grid>
    </div>
  </div>
</div>
        </div>
    )
}

export default Profile
