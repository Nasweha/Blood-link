import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";
import Logo from '../assets/BloodLink-Logo.svg'
import User from '../assets/user-icon.svg'
import { Card, Col, Row } from 'react-bootstrap';
import './Home.css'
import Signin from '../components/Signin';
import Signup from '../components/Signup';
import { getAllUserApi } from '../services/allAPI';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';


const Admin = () => {
    // store card to show details 
    const [card, setCard] = useState([])

    const currentUser = localStorage.getItem('admin')

    const [searchTerm,setSearchTerm] = useState('');
    

    // get userdetails for card append 
    const getDetails = async () => {
        const response = await getAllUserApi()
        console.log(response);
        setCard(response.data)
    }

    // search functionality 
    const handleSearch = (e)=>{
        setSearchTerm(e.target.value)
    }

    const filteredCards = card.filter(
        (item)=>
            item.location.toLowerCase().includes(searchTerm.toLowerCase()) || item.bloodGroup.toLowerCase().includes(searchTerm.toLowerCase())
    )

    useEffect(() => {
        getDetails()
    }, [])

    const clearName = () => {
            localStorage.removeItem('admin')
        getDetails()
    }


    return (
        <>
            <motion.div className='p-5' initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01]
                }}>
                <div className='d-flex justify-content-between align-items-center'>
                    <a href="/" className='text-decoration-none'>
                        <div className='d-flex'>
                            <img src={Logo} alt="BloodLink_Logo" className='me-2' width={40} />
                            <h5 className='mt-3'>BloodLink.in</h5>
                        </div>
                    </a>

                    {currentUser ?
                    <div className='loginHide'>



                           <div className='d-flex align-items-center bg-danger py-1 px-2 rounded'><FontAwesomeIcon icon={faUser} className='bg-danger p-2 rounded' />
                           <button className='btn btn-danger' onClick={clearName}> SignOut</button>
                           </div>


                    </div>
                    :
                    <div className='loginHide'>

                        <h6 className='hospital px-3 py-1' style={{ textDecoration: "none", transition: "0.3s" }}><Signin /></h6>

                    </div>
                    }
                    
                </div>
                <br />
                <motion.div initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 1.2,
                        delay: 0.7,
                        ease: [0, 0.71, 0.2, 1.01]
                    }} className='justify-content-center align-items-center text-center' style={{ display: "flex", flexDirection: "column" }}>
                    <h2>Welcome to <span className='text-danger' style={{ fontWeight: "700" }}>BloodLink.in</span></h2>
                    <h4>your go-to platform for</h4>
                    <h3>instant blood donation connections.</h3>
                    <div className='underLogin'>
                        <h6 className='hospital px-3 py-1' style={{ textDecoration: "none", transition: "0.3s" }}><Signin /></h6>

                        <h6 className='signup px-3 py-1 ms-2' style={{ textDecoration: "none", transition: "0.3s" }}><Signup /></h6>
                    </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 1.2,
                        delay: 0.9,
                        ease: [0, 0.71, 0.2, 1.01]
                    }} className='d-flex justify-content-center align-items-center'>
                    <input type="text" className='search form-control my-4' style={{ maxWidth: "500px" }} placeholder='Search your location or Blood group' value={searchTerm}
                    onChange={handleSearch}
                    />
                </motion.div>
                <motion.div initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 1.2,
                        delay: 1,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}>
                    <Row xs={1} md={3}>

                        {
                                filteredCards?.map((item) => (
                                    <Col className='mb-3'>
                                        <Card style={{ width: '100%', background: "white" }} className='mb-2'>
                                            <Card.Body className='p-4 rounded-3' style={{ background: "white" }}>
                                                <Card.Title>
                                                    <div className='d-flex justify-content-between' style={{ background: "white" }}>
                                                        <h2 style={{ background: "white", color: "black" }} >{item.name}</h2>
                                                        <img src={User} alt="" style={{ background: "white" }} />
                                                    </div></Card.Title>
                                                <Card.Subtitle className="mb-2 fs-5 text-danger" style={{ background: "white" }}>Blood Group : {item.bloodGroup}</Card.Subtitle>
                                                <Card.Text style={{ background: "white" }}>
                                                    <p style={{ background: "white", color: 'black' }}>Age : {item.age}</p>
                                                    <p style={{ background: "white", color: "black" }}>Location : {item.location}</p>
                                                    <p style={{ background: "white", color: 'black' }}>Ph Num : {item.num}</p>
                                                </Card.Text>
                                                <div className='d-flex justify-content-evenly' style={{ background: "white" }}>
                                                    <Card.Link href="#" style={{ background: "white" }}><i class="fa-solid fa-circle-check fs-5" style={{ background: "white", color: "black" }}></i></Card.Link>
                                                    <Card.Link href={`https://wa.me/+91${item.num}`} style={{ background: "white" }}><i class="fa-brands fa-whatsapp fs-5" style={{ background: "white", color: "black" }}></i></Card.Link>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                ))}
                    </Row>
                </motion.div>
            </motion.div>
                    <Hero/>
                    <Footer/>

        </>
    )
}

export default Admin