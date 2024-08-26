import React, { useEffect, useState } from 'react'
import Logo from '../assets/BloodLink-Logo.svg'
import { Card, Col, Row } from 'react-bootstrap'
import User from '../assets/user-icon.svg'
import { motion } from "framer-motion";
import Enquire from '../components/Enquire';
import './Home.css'
import { getAllUserApi } from '../services/allAPI';
import { Link } from 'react-router-dom';

const Hospital = () => {
    // to store details from backend 
    const [bloodData, setBloodData] = useState([])

    // to show blood group in the table 
    const data = async () => {
        const result = await getAllUserApi()
        // console.log(result);
        setBloodData(result.data)
    }
    useEffect(() => {
        data()
    }, [])
    return (
        <motion.div className='p-5' initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
            }}>
            <div className='d-flex justify-content-between align-items-center'>
                <div>
                    <a href="/" style={{ textDecoration: "none" }}>
                        <div className='d-flex align-items-center'>
                            <img src={Logo} alt="" width={40} />
                            <h5 className='ms-2 mt-3'>BloodLink.in</h5>
                        </div>
                    </a>
                </div>
                <div className='reqBtn ms-auto'>
                    <Link to={'/form'}>
                    <Enquire />
                    </Link>
                   
                </div>
                <Link to={'/form'}><p className='request'><i class="fa-solid fa-rectangle-list text-danger mt-2"></i></p></Link>
            </div>
            <br />
            <p className='ms-5 mb-4'> BloodLink enables immediate connections between blood donors and recipients. With just a few clicks, those in need can find donors who match their blood type and location, facilitating quick and efficient blood donations.</p>
            <motion.div initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 1.0,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01]
                }}>

                <Row className='p-4 bg-white rounded-3' xs={1} md={4}  >
                    <Col className='bg-white'>
                        <h1 className='text-center mb-4 ' style={{ backgroundColor: "transparent", color: "#D22F27", fontWeight: "700", borderBottom: "1px black solid" }}>A</h1>
                        {bloodData?.length > 0 ? (
                            bloodData?.map((item) => {
                                if (item.bloodGroup == 'A') {
                                    return (
                                        <Card key={item.id} style={{ width: '100%' }} className='mb-2'>
                                            <Card.Body className='p-4 rounded-3'>
                                                <div className='d-flex justify-content-between align-items-center'>
                                                    <h2>{item.name}</h2>
                                                    <img src={User} alt="" />
                                                </div>
                                                <Card.Subtitle className="mb-2 fs-5 text-danger">Blood Group: {item.bloodGroup}</Card.Subtitle>
                                                <Card.Text>
                                                    <p>Age: {item.age}</p>
                                                    <p>Location: {item.location}</p>
                                                    <p>Ph Num: {item.num}</p>
                                                </Card.Text>
                                                <div className='d-flex justify-content-evenly'>
                                                    <Card.Link href="#"><i className="fa-solid fa-circle-check fs-5"></i></Card.Link>
                                                    <Card.Link href={`https://wa.me/${item.num}`} ><i className="fa-brands fa-whatsapp fs-5"></i></Card.Link>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    );
                                } else {
                                    return null; // Render nothing if blood group is not 'A'
                                }
                            })
                        ) : (
                            <p>No data available</p>
                        )}

                    </Col>

                    <Col className='bg-white'>
                        <h1 className='text-center mb-4 ' style={{ backgroundColor: "transparent", color: "#D22F27", fontWeight: "700", borderBottom: "1px black solid" }}>B</h1>
                        {bloodData?.length > 0 ? (
                            bloodData?.map((item) => {
                                if (item.bloodGroup == 'B') {
                                    return (
                                        <Card key={item.id} style={{ width: '100%' }} className='mb-2'>
                                            <Card.Body className='p-4 rounded-3'>
                                                <div className='d-flex justify-content-between align-items-center'>
                                                    <h2>{item.name}</h2>
                                                    <img src={User} alt="" />
                                                </div>
                                                <Card.Subtitle className="mb-2 fs-5 text-danger">Blood Group: {item.bloodGroup}</Card.Subtitle>
                                                <Card.Text>
                                                    <p>Age: {item.age}</p>
                                                    <p>Location: {item.location}</p>
                                                    <p>Ph Num: {item.num}</p>
                                                </Card.Text>
                                                <div className='d-flex justify-content-evenly'>
                                                    <Card.Link href="#"><i className="fa-solid fa-circle-check fs-5"></i></Card.Link>
                                                    <Card.Link href={`https://wa.me/${item.num}`} ><i className="fa-brands fa-whatsapp fs-5"></i></Card.Link>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    );
                                } else {
                                    return null; // Render nothing if blood group is not 'A'
                                }
                            })
                        ) : (
                            <p>No data available</p>
                        )}
                    </Col>

                    <Col className='bg-white'>
                        <h1 className='text-center mb-4 ' style={{ backgroundColor: "transparent", color: "#D22F27", fontWeight: "700", borderBottom: "1px black solid" }}>AB</h1>
                        {bloodData?.length > 0 ? (
                            bloodData?.map((item) => {
                                if (item.bloodGroup == 'AB') {
                                    return (
                                        <Card key={item.id} style={{ width: '100%' }} className='mb-2'>
                                            <Card.Body className='p-4 rounded-3'>
                                                <div className='d-flex justify-content-between align-items-center'>
                                                    <h2>{item.name}</h2>
                                                    <img src={User} alt="" />
                                                </div>
                                                <Card.Subtitle className="mb-2 fs-5 text-danger">Blood Group: {item.bloodGroup}</Card.Subtitle>
                                                <Card.Text>
                                                    <p>Age: {item.age}</p>
                                                    <p>Location: {item.location}</p>
                                                    <p>Ph Num: {item.num}</p>
                                                </Card.Text>
                                                <div className='d-flex justify-content-evenly'>
                                                    <Card.Link href="#"><i className="fa-solid fa-circle-check fs-5"></i></Card.Link>
                                                    <Card.Link href={`https://wa.me/${item.num}`} ><i className="fa-brands fa-whatsapp fs-5"></i></Card.Link>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    );
                                } else {
                                    return null; // Render nothing if blood group is not 'A'
                                }
                            })
                        ) : (
                            <p>No data available</p>
                        )}
                    </Col>

                    <Col className='bg-white'>
                        <h1 className='text-center mb-4 ' style={{ backgroundColor: "transparent", color: "#D22F27", fontWeight: "700", borderBottom: "1px black solid" }}>O</h1>
                        {bloodData?.length > 0 ? (
                            bloodData?.map((item) => {
                                if (item.bloodGroup == 'O') {
                                    return (
                                        <Card key={item.id} style={{ width: '100%' }} className='mb-2'>
                                            <Card.Body className='p-4 rounded-3'>
                                                <div className='d-flex justify-content-between align-items-center'>
                                                    <h2>{item.name}</h2>
                                                    <img src={User} alt="" />
                                                </div>
                                                <Card.Subtitle className="mb-2 fs-5 text-danger">Blood Group: {item.bloodGroup}</Card.Subtitle>
                                                <Card.Text>
                                                    <p>Age: {item.age}</p>
                                                    <p>Location: {item.location}</p>
                                                    <p>Ph Num: {item.num}</p>
                                                </Card.Text>
                                                <div className='d-flex justify-content-evenly'>
                                                    <Card.Link href="#"><i className="fa-solid fa-circle-check fs-5"></i></Card.Link>
                                                    <Card.Link href={`https://wa.me/${item.num}`} ><i className="fa-brands fa-whatsapp fs-5"></i></Card.Link>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    );
                                } else {
                                    return null; // Render nothing if blood group is not 'A'
                                }
                            })
                        ) : (
                            <p style={{ color: "black" }}>No data available</p>
                        )}
                    </Col>



                </Row>
            </motion.div>
        </motion.div>
    )
}

export default Hospital
