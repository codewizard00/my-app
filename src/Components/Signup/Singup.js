import React, { useState } from 'react'
import './signup.css';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { UilFacebookF,UilGoogle,UilInstagram } from '@iconscout/react-unicons'
import {useHistory} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AccountCircle from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import DateRangeIcon from '@mui/icons-material/DateRange';
import LockIcon from '@mui/icons-material/Lock';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';



function Signin() {
	const history = useHistory();
	const [name,setName] = useState('')
	const [email,setEmail] = useState('')
	const [dob,setDob] = useState('')
	const [refer,setRefer] = useState('')
	const [password,setPassword] = useState('')
	const [conpass,setConpass] = useState('')
	const [lpassword,setLpassword] = useState('')
	const [lemail,setLemail] = useState('')
	const Register = (e) =>{
		e.preventDefault();
		fetch("/register",{
			method:'POST',
			headers:{
				"Content-Type":"application/json"
			},
			body:JSON.stringify({
				name,email,password,conpass,dob,refer
			})
		}).then(res=>res.json())
		.then((data)=>{
			if(data.message==='successfully registerd'){
				history.push('/signup')
				toast("Email Sent to your Account");
			}
			else{
				toast.warn(data.message)
			}
		}
		)
	}

	const Login= (e)=>{
		e.preventDefault();
		fetch('/login',{
			method:"POST",
			headers:{
				'Content-Type':"application/json"
			},
			body:JSON.stringify({
				lemail,lpassword
			})
		}).then(res=>res.json())
		.then(data=>{
			if(data.message==='succ'){
				localStorage.setItem('jwt',data.token)
				localStorage.setItem('user',JSON.stringify(data.user))
				history.push("/")
				window.location.reload();
			}
			else{
                console.log(data)
				toast.warn(data.message);
			}
		})
		.catch(err=>console.log(err))
	}

    return (   
        <div className="sign">
			<ToastContainer/>            
        <div className="container1" id="container1">
        <div className="form-container1 sign-up-container1">
<form>
	<h1>Create Account</h1>
	<div className="social-container1">
		<a href="#" className="social"><i className="fa fa-facebook"><UilFacebookF/></i></a>
		<a href="#" className="social"><i className="fa fa-google"><UilGoogle/></i></a>
		<a href="#" className="social"><i className="fa fa-Instagram"><UilInstagram/></i></a>
	</div>
	<span>or use your email for registration</span>
    <Box style={{width:"100%"}} sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField name='name' value={name} onChange={(e)=>{setName(e.target.value)}} variant="standard" label="Name" fullWidth />
      </Box>
	
    <Box style={{width:"100%"}} sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <EmailIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField name='email' value={email} onChange={(e)=>{setEmail(e.target.value)}} variant="standard" label="Email" fullWidth />
      </Box>
	
	
    <Box style={{width:"100%"}} sx={{ display: 'flex', alignItems: 'flex-end' }}>
    <DateRangeIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField name='name' value={dob} onChange={(e)=>{setDob(e.target.value)}} variant="standard" label="Date of Birth" type={Date} />
        <MonetizationOnIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField name='name' value={refer} onChange={(e)=>{setRefer(e.target.value)}} variant="standard" label="Refer" />
      </Box>
	
    <Box style={{width:"100%"}} sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <LockIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField name="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}  variant="standard" label="Password" fullWidth />
      </Box>
	  <Box style={{width:"100%"}} sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <LockIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField name="cpassword" value={conpass} onChange={(e)=>{setConpass(e.target.value)}}  variant="standard" label="Confirm-Password" fullWidth />
      </Box>
	
	<button type="submit" onClick={Register} style={{marginTop:"4%"}}>SignUp</button>
</form>
</div>
<div className="form-container1 sign-in-container1">
	<form >
		<h1>Sign In</h1>
		<div className="social-container1">
		<a href="#" className="social"><i className="fa fa-facebook"><UilFacebookF color="blue"/></i></a>
		<a href="#" className="social"><i className="fa fa-google"><UilGoogle color="black"/></i></a>
		<a href="#" className="social"><i className="fa fa-Instagram"><UilInstagram color="red"/></i></a>
	</div>
	<span>or use your account</span>
	<Box style={{width:"100%"}} sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <EmailIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField variant="standard" value={lemail} label="Email" size='small' onChange={(e)=>{setLemail(e.target.value)}} fullWidth />
      </Box>   <Box style={{width:"100%"}} sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <LockIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField variant="standard" value={lpassword} label="Password" size='small' onChange={(e)=>{setLpassword(e.target.value)}} fullWidth />
      </Box>
	
	<a href="#">Forgot Your Password</a>
	<button className="signup" onClick={Login} >Sign In</button>
	</form>
</div>
<div className="overlay-container1">
	<div className="overlay">
		<div className="overlay-panel overlay-left">
			<h1>Welcome Back!</h1>
			<p>To keep connected with us please login with your personal info</p>
			<button onClick={()=>{document.getElementById('container1').classList.remove("right-panel-active")}} className="ghost" id="signIn">Sign In</button>
		</div>
		<div className="overlay-panel overlay-right">
			<h1>Hello, Friend!</h1>
			<p>Enter your details and start journey with us</p>
			<button  onClick={()=>{document.getElementById('container1').classList.add("right-panel-active")}} className="ghost" id="signUp">Sign Up</button>
		</div>
	</div>
</div>
</div>
</div>
    )
}

export default Signin
