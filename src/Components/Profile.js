import React, { useState,useEffect } from 'react'
import cat from "../Images/cat.jpg"
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';
// import itemData from './itemData';


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    imageList: {
      width: 500,
      height: 450,
    },
  }));

function Profile() {
    const [itemData,setItemData] = useState([])
    useEffect(()=>{
      fetch("/mypost",{
        headers:{
          "Authorization":"Bearer "+localStorage.getItem("jwt")
        }
      }).then(res=>res.json())
      .then(result=>{
        setItemData(result.mypost)
        console.log(result.mypost)
      }).catch(err=>console.log(err))
    },[])
    const classes = useStyles();
    return (
        <div>
            <div style={{display:"flex",flexDirection:"row",width:"50%",height:"50vh",margin:"auto"}}>
            <div style={{margin:"5% 10% 0% 5%"}}>
                <img src={cat} height="200px" width="200px" style={{borderRadius:"100%",border:"2px solid red"}} ></img>
                
            </div>
            <div style={{marginTop:"10%"}}>
                <Button style={{float:"right"}}>
                <EditIcon />
                </Button>
                <h3>User Name</h3>
                <p1 >Hello ,how r u</p1>
                <div style={{marginTop:"10%"}}>
                <Button size="small" color="primary" variant="contained" style={{marginRight:"10px"}} >followers</Button>
                <p1 style={{marginRight:"10px"}} >:32</p1>
                <Button size="small" variant="contained" color="primary" style={{marginRight:"10px"}} >following</Button>
                <p1>:32</p1>
                </div>
            </div>
            </div> 
            <div>
            <div className={classes.root}>
      <ImageList rowHeight={180} style={{width:"70%"}} className={classes.imageList} cols={3}>
        {itemData.map((item) => (
          <ImageListItem key={item.postedby._id} cols={item.cols || 1}>
            <img src={item.photo} alt={item.title} />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
            </div>
        </div>
    )
}

export default Profile
