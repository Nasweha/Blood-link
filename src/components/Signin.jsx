import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../pages/Home.css'
import { getAdminUserApi, getUserApi } from '../services/allAPI';
import { useNavigate } from 'react-router-dom';
import { Toaster, toast } from 'sonner';


const Signin = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const[userData,setUserData] = useState([])

    // input check 
    const [signIn,setSignIn] = useState({
        username:"",
        password:""
    })
    console.log(signIn);

      // navigate next page with a delay 
     const navigate = useNavigate('')


    const handleUser = async () => {
      try {
        const response = await getUserApi();
        console.log("Fetched User Data:", response.data);
        setUserData(response.data);

        const adminResponse = await getAdminUserApi();
        console.log("Fetched Admin Data:", adminResponse.data);
        setUserData(adminResponse.data);
    
        const existingUser = response.data.find(item => item.username === signIn.username);
        const existingAdmin = adminResponse.data.find(item => item.username === signIn.username);

        
        if (existingUser || existingAdmin) {
          const existingPswd = existingUser?.password;
          const existingAdminPswd = existingAdmin?.password;
    
          if (existingPswd === signIn.password) {
            toast.success('User Logged In successfully');
            handleClose();
    
            setTimeout(() => {
              localStorage.setItem('user', existingUser.username);
              navigate('/hospital');
            }, 3000);
          }
          else if(existingAdminPswd === signIn.password){
            toast.success('Admin Logged In successfully');
            handleClose();
    
            setTimeout(() => {
              localStorage.setItem('admin', existingAdmin.username);
              navigate('/admin/userDetails');
            }, 3000);
          }
          else {
            toast.error('Invalid password');
          }
        } else {
          toast.error('Invalid username');
        }
      } catch (error) {
        console.error("Error:", error);
        toast.error('Error occurred while signing in');
      }
    };

  return (
    
    <>
    <button onClick={handleShow} style={{border:"none",backgroundColor:"transparent"}} className='hospital'>Sign in</button>
    <Modal show={show} onHide={handleClose} >
    <Modal.Body>
        <h3>Sign in</h3>
        <input type="text" className='form-control mb-3' placeholder='User name' onChange={((e)=> setSignIn({...signIn,username:e.target.value}))}/>
       
        <input type="text" className='form-control mb-3' placeholder='Password' onChange={((e)=>setSignIn({...signIn,password:e.target.value}))}/>
        
    </Modal.Body>
    <Modal.Footer className='bg-transparent d-flex justify-content-evenly'>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
      <Button variant="primary" className='bg-danger' style={{border:"none"}} onClick={handleUser}>
        Login
      </Button>
    </Modal.Footer>
    
  </Modal>
  <Toaster position="top-right" toastOptions={{
        style: { background: 'white', fontSize: "1rem" },
      }} />
    </>
  )
}

export default Signin