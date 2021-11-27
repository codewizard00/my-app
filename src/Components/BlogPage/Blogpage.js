import React, { useEffect, useState } from 'react'
import './BlogPage.scss'
import { useSpeechSynthesis } from 'react-speech-kit';
import {useParams} from 'react-router-dom'
import {Grid} from '@mui/material'




function Blogpage() {
  const [data,setData] = useState({});
  var {id} = useParams();
  useEffect(()=>{
    fetch('/postDetail',{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        id:id,
      })
    }).then(res=>
      res.json()
    ).then((res)=>{
      setData(res.post);
      console.log(res.post)
    })
  },[])
	const { speak } = useSpeechSynthesis();
	return (
		<div class="container-fluid">
  <section style={{marginTop:"3%"}}>
    <Grid container>
      <Grid item xs={9}>
      <div class="content" style={{width:"98%"}}>
       <div class="item post">
         <div style={{height:"400px",backgroundImage:`url(${data.photo})`,backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"}}>
        </div>
        <div class="post-detail">
        <h2 class="title-article">{data.title}</h2>
        <button onClick={() => speak({ text: `Blog by ${data.postedby.name} Title ${data.title} , ${data.body}`, voice:speechSynthesis.getVoices()[4] })} ></button>
        <div class="title-description"><span class="text-des">Title description,</span><span class="time"></span></div>
         <div class="post-content">Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</div>
         <div class="bottom">
           <a href="#"><button class="read-more">Read more</button></a>
           <lable class="label-comment">
             Comment <span class="num-of-comment">0</span>
           </lable>
         </div>
      </div>
     </div>
    </div>
      </Grid>
      <Grid xs={3}>
      <aside>
      <div class="popular-post widget">
        <div class="header">Popular Posts</div>
        <ul class="list-popular-post">
          <li class="post-item">
            <img src="https://www.w3schools.com/w3images/workshop.jpg" alt="Lorem" class="post-image"/>
            <div class="post-item-info">
              <h5 class="post-item-title">Lorem</h5>
              <p class="post-item-description">Sed mattis nunc</p>
            </div>
          </li>
           <li class="post-item">
            <img src="https://www.w3schools.com/w3images/workshop.jpg" alt="Lorem" class="post-image"/>
            <div class="post-item-info">
              <h5 class="post-item-title">Lorem</h5>
              <p class="post-item-description">Sed mattis nunc</p>
            </div>
          </li>
           <li class="post-item">
            <img src="https://www.w3schools.com/w3images/workshop.jpg" alt="Lorem" class="post-image"/>
            <div class="post-item-info">
              <h5 class="post-item-title">Lorem</h5>
              <p class="post-item-description">Sed mattis nunc</p>
            </div>
          </li>
           <li class="post-item">
            <img src="https://www.w3schools.com/w3images/workshop.jpg" alt="Lorem" class="post-image"/>
            <div class="post-item-info">
              <h5 class="post-item-title">Lorem</h5>
              <p class="post-item-description">Sed mattis nunc</p>
            </div>
          </li>
           <li class="post-item">
            <img src="https://www.w3schools.com/w3images/workshop.jpg" alt="Lorem" class="post-image"/>
            <div class="post-item-info">
              <h5 class="post-item-title">Lorem</h5>
              <p class="post-item-description">Sed mattis nunc</p>
            </div>
          </li>
        </ul>
      </div>
    </aside>
      </Grid>
    </Grid>
   
  
  </section>
</div>
	)
}

export default Blogpage
