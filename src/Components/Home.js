import { Grid } from '@mui/material';
import React, { useState,useEffect } from 'react'
import Blog from './Blog/Blog'
import Loading from './Loading/Loading';
import SideNav from "./SideNav/SideNav"
import Message from "./message/Message"


function Home() {
  const [data,setData] = useState([]);
  useEffect(()=>{
    fetch("/",).then(res=>res.json())
  },[])
  useEffect(()=>{
    fetch("/allpost").then(res=>res.json())
    .then(result=>{
      setData(result.posts)
      localStorage.setItem("posts",result.posts)
    }).catch(err=>{
      setData(localStorage.getItem("posts"))
      console.log(err)
    })
  },[])


  return (

    <div>
      <SideNav/>
      <Grid container>
      <Grid item style={{marginLeft:"20%",marginTop:"-7%"}}>
      {data.length===0?<Loading/>:       
      data.map((item)=>{
        return(
        <Blog id={item._id} comments={item.comments} likes={item.likes.length} name={item.postedby.name} userid={item.postedby._id} date={item.created_at} image={item.photo} title={item.title} body={item.body}  />
        )
      })
    }
    </Grid>
    <Grid item style={{marginLeft:"30px",marginTop:"-7%",height:"80vh",width:"25%",backgroundColor:"grey",color:"white"}}>
      {/* <Message/> */}
      </Grid>
    </Grid>
    </div>
  )
}

export default Home
