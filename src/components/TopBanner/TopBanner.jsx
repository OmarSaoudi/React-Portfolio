import React, { Component, Fragment } from 'react'
import '../../asset/css/Bootstrap.min.css'
import '../../asset/css/Custom.css'
import { Button, Col, Container, Row } from 'react-bootstrap'

export class TopBanner extends Component {
  render() {
    return (
      <Fragment>

        <Container fluid={true} className="topFixedBanner p-0">
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
