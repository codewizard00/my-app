import * as React  from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useHistory} from "react-router-dom"
import {toast} from "react-toastify"
import  {useState,useEffect} from "react"
import { TextField } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function CreatPost() {

    const history = useHistory();
    const [title,setTitle] = useState("");
    const [body,setBody] = useState("");
    const [image,setImage] = useState("");
    const [url,setUrl] = useState("");
    useEffect(()=>{
      if(url){
      fetch("/createpost",{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            "Authorization":"Bearer "+localStorage.getItem("jwt")
        },
        body:JSON.stringify({
            title,
            body,
            pic:url,
        })
    }).then(res=>res.json())
    .then(data=>{
        if(data.error){
          toast.warn(data.error);
        }
        else{
          toast.success(data.message);
          history.push("/")
        }
    })
  }
    },[url])
  
  
    const postDetails=()=>{
      const data = new FormData();
      data.append("file",image);
      data.append("upload_preset","Instaclone")
      data.append("cloud_name","ganesh1213")
      fetch("https://api.cloudinary.com/v1_1/ganesh1213/image/upload",{
        method:"post",
        body:data
      })
      .then(res=>res.json())
      .then(data=>{
        setUrl(data.url)
      })
      .catch(err=>{
        console.log(err);
      })
      setOpen(false);
    }
  

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button style={{color:"white"}} onClick={handleOpen}>Create Post</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
        <Box sx={style}>
            <h2 id="transition-modal-title">CreatePost</h2>
            <TextField style={{marginBottom:"2%"}} fullWidth label="Title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
            <Box sx={{ minWidth: 120 }} style={{marginBottom:"2%"}} >
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          Category
        </InputLabel>
        <NativeSelect
          defaultValue={30}
          inputProps={{
            name: 'age',
            id: 'uncontrolled-native',
          }}
        >
          <option value={10}>Science & Technology</option>
          <option value={20}>Sports</option>
          <option value={30}>Entertainment</option>
          <option value={40}>Cultural</option>
          <option value={50}>Ancient</option>
          <option value={60}>News</option>
        </NativeSelect>
      </FormControl>
    </Box>
            <TextField multiline rows={4} fullWidth label="Body" value={body} onChange={(e)=>setBody(e.target.value)} style={{marginBottom:"2%"}}  />
            <div>
            <TextField style={{marginBottom:"2%"}}  type="file" onChange={(e)=>setImage(e.target.files[0])} />
            </div>
            <div>
            <Button variant="contained" size="sm" color="primary" onClick={postDetails} style={{marginRight:"2%"}}  >Ok</Button>
            <Button variant="contained" size="sm" color="primary" onClick={handleClose} >Cancel</Button>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
