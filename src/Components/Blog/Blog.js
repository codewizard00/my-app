import React from 'react'
import './Blog.scss'
import {IconButton,Typography} from "@mui/material"
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import CardContent from '@mui/material/CardContent';

import CommentIcon from '@mui/icons-material/Comment';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';
//hello

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));


function Blog({id,name,date,image,title,body,likes,comments,userid}) {
  const [data,setData] = useState([])
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const likepost=(id)=>{
    console.log(id)
    fetch('/like',{
      method:"put",
      headers:{
        "Content-Type":'application/json' ,
        "Authorization":"Bearer "+localStorage.getItem('jwt')
      },
      body:JSON.stringify({
        postId:id,
      })
    }).then(res=>res.json())
    .then((res)=>{console.log(res)})
    .catch(err=>console.log(err))
  }
  const comment=(text,id)=>{
    fetch('/comment',{
      method:"put",
      headers:{
        "Content-Type":'application/json' ,
        "Authorization":"Bearer "+localStorage.getItem('jwt')
      },
      body:JSON.stringify({
        postId:id,
        text,
      })
    })
      .then(res=>res.json())
      .then((res)=>{
        console.log(res)
        const newData = data.map(item=>{
          if(item._id==res._id){
            return res
          }else{
            return item
          }
        })
        setData(newData)
      }).catch(err=>console.log(err))
  
}

    return (
        <div>
              <div class="blog-card">
    <div class="meta">
      <div class="photo" style={{"background-image": `url(${image})`}}></div>
      <ul class="details">
      <li class="author"><a href={`/profile/${userid}`} >{name}</a></li>
        <li class="date">{date}</li>
        <li class="tags">
          <ul>
            <li><a href="#">Science & Technology</a></li>
          </ul> 
        </li>
      </ul>
    </div>
    <div class="description">
    
      <div style={{display:'flex',justifyContent:"space-between"}}>
      <div>
        <Avatar>H</Avatar>
      </div>
        <div style={{marginLeft:"-45%"}}>
      <h1>{title}</h1>
      <h2><a href={`/profile/${userid}`}>{name}</a></h2>
      </div>
      <div>
      <IconButton aria-label="share" style={{height:"50px"}}>
          <MoreVertIcon/>
        </IconButton>
      </div>
      </div>
      <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit. <a class="read-more" href={`Blogpage/${id}`}>Read More</a></p>
      
      <CardActions >
        <IconButton style={{height:"50px",fontSize:"15px"}} aria-label="add to favorites">
          <p1>{likes}</p1>
          <FavoriteIcon onClick={()=>{likepost(id)}} />
          <p1>Like</p1>
        </IconButton>
        <IconButton aria-label="share" style={{height:"50px",fontSize:"20px"}}>
          <ShareIcon color="success" />
          <h6>Share</h6>
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
   
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <input placeholder="write comments here" style={{borderRadius:"10px",marginTop:"-5%",width:"80%"}}></input>
        
        </CardContent>
      </Collapse>
      </div>
      </div>
        </div>
    )
}

export default Blog
