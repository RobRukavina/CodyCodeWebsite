import React, { Component } from 'react';
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

//Import Images
import logo from "../../assets/images/codycodeSM.png";

class FooterLinks extends Component {
    render() {
        return (
          <React.Fragment>
            <section className="bg-primary py-3">
              <Container>
                <Row>
                  <Col lg={12}>
                    <div className="float-sm-left">
                      <Link to="#">
                        <img src={logo} alt="" height="20" />
                      </Link>
                    </div>
                    <div className="float-sm-right mt-4 mt-sm-0">
                      <p className="copyright-desc text-white mb-0">
                        {new Date().getFullYear()} © CodyCode
                      </p>
                    </div>
                  </Col>
                </Row>
              </Container>
            </section>
          </React.Fragment>
        );
    }
}

export default FooterLinks;