import React, { useState } from 'react'
import { motion } from "framer-motion";
import Logo from '../assets/BloodLink-Logo.svg'
import { Col, Row } from 'react-bootstrap';
import { registerUserApi } from '../services/allAPI';
import { Toaster, toast } from 'sonner'
import { useNavigate } from 'react-router-dom';


const Form = () => {
  //navigate to home
  const navigate = useNavigate('')


  const [userDetails, setUserDetails] = useState({
    name: "",
    age: "",
    email: "",
    bloodGroup: "",
    location: "",
    num: ""
  })
  console.log(userDetails);
  const handleSubmit = async () => {
    const { name, age, email, bloodGroup, location, num } = userDetails
    if (!name || !age || !email || !bloodGroup || !location || !num) {
      toast.error('Please Fill the form ')
    }
    else {
      const res = await registerUserApi(userDetails)
      if (res.status >= 200 && res.status < 300) {
        toast.success('Created Succefully')

        setTimeout(()=>{
          navigate('/')
        },3000)
      }
    }
  }
  return (
    <motion.div className='p-5' initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }}>
      <div className='d-flex justify-content-start align-items-center'>
        <a href="/" className='text-decoration-none'>
          <div className='d-flex'>
            <img src={Logo} alt="BloodLink_Logo" className='me-2' width={40} />
            <h5 className='mt-3'>BloodLink.in</h5>
          </div>
        </a>
      </div>
      <br />
      <Row md={3} xs={1}>
        <Col>
        </Col>
        <Col>
          <motion.div initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1.2,
              delay: 0.9,
              ease: [0, 0.71, 0.2, 1.01]
            }}>
            <h5 className='mb-3'>Full Name :</h5>
            <input type="text" className='form-control mb-3' onChange={((e) => setUserDetails({ ...userDetails, name: e.target.value }))} />
            <h5>Age:</h5>
            <input type="text" className='form-control mb-3' onChange={((e) => setUserDetails({ ...userDetails, age: e.target.value }))} />
            <h5>Email :</h5>
            <input type="text" className='form-control mb-3' onChange={((e) => setUserDetails({ ...userDetails, email: e.target.value }))} />
            <p className='fs-5'>Please Select your Group</p>
            <select class="form-select mb-3" aria-label="Default select example" onChange={((e) => setUserDetails({ ...userDetails, bloodGroup: e.target.value }))}>
              <option selected></option>
              <option value="A">A+</option>
              <option value="A">A-</option>
              <option value="B">B+</option>
              <option value="B">B-</option>
              <option value="AB">AB+</option>
              <option value="AB">AB-</option>
              <option value="O">O+</option>
              <option value="O">O-</option>
            </select>
            <h5>Location/State :</h5>
            <input type="text" className='form-control mb-3' onChange={((e) => setUserDetails({ ...userDetails, location: e.target.value }))} />
            <h5>Contact Num :</h5>
            <input type="text" className='form-control mb-3' onChange={((e) => setUserDetails({ ...userDetails, num: e.target.value }))} />
            <div className='d-flex justify-content-center mt-5'>
              <button className='px-3 py-2' style={{ backgroundColor: "#D22F27", borderRadius: "15px", border: "none" }} onClick={handleSubmit}>Submit</button>
            </div>
          </motion.div>
        </Col>
        <Col></Col>
      </Row>
      <Toaster position="top-center" toastOptions={{
        style: { background: 'white', fontSize: "1rem" },
      }} />
    </motion.div>
  )
}

export default Form