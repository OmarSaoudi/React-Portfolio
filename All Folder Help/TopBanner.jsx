import React, { Component, Fragment } from 'react'

import '../../asset/css/custom.css'
import {Container,Row , Col ,Button} from 'react-bootstrap'
import '../../asset/css/Bootstrap.min.css'





export class TopBanner extends Component {
     render() {
          return (
               <Fragment>

               <Container fluid={true} className="topFixedBanner  p-0 "  >

               <div className="topBannerOverly">

               <Container className="topContent"  >

               <Row>

               <Col className="text-center"  >

               <h1  className="topTitle" >  Creative Team Programming  </h1>
               <h4 className="topSubTitle">  Learn Programing skills </h4>
               <Button variant="primary">More</Button>
               
               
               </Col>
               
               
               </Row>
               
               
               </Container>


               
               
               
               
               </div>


              








               
               </Container>








               </Fragment>
          )
     }
}

export default TopBanner