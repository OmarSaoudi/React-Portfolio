import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import SerImg1 from '../../asset/image/gallery-01.png'
import SerImg2 from '../../asset/image/gallery-02.png'
import SerImg3 from '../../asset/image/gallery-03.jpg'

import '../../asset/css/Services.css'
import '../../asset/css/Bootstrap.min.css'



 class Services extends Component {
     render() {
          return (
               <Fragment>
                    <Container className="text-center">
                         <h1 className="serviceMainTitle"> MY SERVICES</h1>
                         <div className="bottom"  ></div>
                         <Row>
                              <Col lg={4} md={6} sm={12}  >
                                   <div className="serviceCard  text-center ">
                                        <img src={SerImg1} className="ServicesIcon" />
                                        <h4 className="serviceName"  >OFFICE APPLICATIONS</h4>
                                        <p className="serviceDescription">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam qui a in quas, ipsam, consequatur voluptatem dolores soluta nisi corporis facilis quasi fugit modi ipsa velit tenetur accusantium incidunt. Rem.</p>
                                   </div>
                              </Col>
                              <Col lg={4} md={6} sm={12}  >
                                   <div className="serviceCard  text-center ">
                                        <img src={SerImg2} className="ServicesIcon" />
                                        <h4 className="serviceName"  >OFFICE APPLICATIONS</h4>
                                        <p className="serviceDescription">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti sit sed repellendus laboriosam officiis ducimus, autem sunt quidem illo consequuntur ipsum, fugiat minima quia error odit iure sint deserunt accusantium.</p>
                                   </div>
                              </Col>
                              <Col lg={4} md={6} sm={12}  >
                                   <div className="serviceCard  text-center ">
                                        <img src={SerImg3} className="ServicesIcon" />
                                        <h4 className="serviceName"  >OFFICE APPLICATIONS</h4>
                                        <p className="serviceDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum earum maiores quidem est omnis culpa doloribus, quae fugiat inventore ratione reprehenderit officiis necessitatibus hic ipsa eligendi error quisquam quibusdam et!</p>
                                   </div>
                              </Col>
                         </Row>
                    </Container>
               </Fragment>
          )
     }
}

export default Services
