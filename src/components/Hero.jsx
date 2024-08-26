import React from 'react'
import './Hero.css'
import { Col, Row } from 'react-bootstrap'
import { motion } from "framer-motion";
import Hero1 from '../assets/Hero1.svg'
import Hero2 from '../assets/Hero2.svg'
import Hero4 from '../assets/Hero4.svg'
import Hero5 from '../assets/Hero5.svg'
import Hero3 from '../assets/Hero3.png'
const Hero = () => {
    return (
        <motion.div initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 1.2,
                delay: 1,
                ease: [0, 0.71, 0.2, 1.01]
            }}>
            <div className='hero'>
                <Row md={1} xs={1}>
                    <Col>
                        <Row md={5} xs={5} className='p-4 mb-4 d-flex justify-content-between align-items-center'>
                            <img src={Hero1} alt="" />
                            <img src={Hero2} alt="" />
                            <img src={Hero3} alt="" />
                            <img src={Hero4} alt="" />
                            <img src={Hero5} alt="" />
                        </Row>
                    </Col>
                    <Col>
                        <h4 style={{ color: "black" }} className='text-center'>About us</h4>
                        <p className='p-3 text-black.'>BloodLink is designed to facilitate direct communication between blood donors and recipients, ensuring swift and efficient access to life-saving blood donations.
                            When you create a post on BloodLink, simply specify your blood group and the urgency of your need. Other users can then browse these posts and contact you directly if they are a match and able to donate. This direct communication streamlines the process, allowing donors and recipients to connect quickly and coordinate donations with ease.</p>
                        <ul>
                            <li className='text-danger'><span className='fw-bold text-black'><i class="fa-solid fa-user me-2"></i>User Profiles :</span> <p className='text-black'>Users can create profiles detailing their blood type, location, and contact information. This allows both donors and recipients to provide necessary information for connecting with each other.</p></li>
                            <li className='text-danger'><span className='fw-bold text-black'><i class="fa-solid fa-square-poll-vertical me-2"></i>Post Creation :</span> <p className='text-black'>Users can create posts indicating their need for blood donations or their willingness to donate. Posts include details such as blood type, urgency, and any specific requirements.</p></li>
                            <li className='text-danger'><span className='fw-bold text-black'><i class="fa-solid fa-magnifying-glass me-2"></i>Search and Filters :</span> <p className='text-black'>Users can search for specific blood types or filter posts based on location and urgency. This helps streamline the process of finding suitable matches.
                            </p></li>
                            <li className='text-danger'><span className='fw-bold text-black'><i class="fa-brands fa-whatsapp me-2"></i>Direct Messaging :</span> <p className='text-black'>BloodLink facilitates direct communication between users. Once a potential match is found, users can message each other securely through the platform to coordinate the donation process.
                            </p></li>
                            <li className='text-danger'><span className='fw-bold text-black'><i class="fa-solid fa-circle-check me-2"></i>Direct Messaging :</span> <p className='text-black'>BloodLink implements a verification system to ensure the authenticity of users and their blood type information. This builds trust among users and enhances the reliability of the platform.
                            </p></li>

                        </ul>
                    </Col>
                </Row>
            </div>
        </motion.div>
    )
}

export default Hero