import React, { Component } from "react";
import { Container, Row, Col, Media } from "reactstrap";
// import { AvForm, AvField } from "availity-reactstrap-validation";

//Import Section Title
import SectionTitle from "../common/section-title";

//Import Images
import LogoLG from "../../assets/images/codyCodeMD.jpg";

class GetInTouch extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="section" id="contact" style={{ minHeight: "90vh" }}>
          <Container>
            <SectionTitle
              title="Get In Touch"
              subtitle="Contact"
              desc="Give us a call or send us an email for more information on our services."
            />
            <Row className="mt-5 pt-2">
              <Col lg={5}>
                <div className="contact-info">
                  <Media>
                    <i className="mdi mdi-map-marker text-primary h4"></i>
                    <Media body className=" ml-4">
                      <p className="text-muted">Beaumont, California</p>
                    </Media>
                  </Media>

                  <Media className="mt-4">
                    <i className="mdi mdi-phone text-primary h4"></i>
                    <Media body className="ml-4">
                      <p className="text-muted">Phone: 1-909-280-2993</p>
                    </Media>
                  </Media>

                  {/* <Media className="media mt-4">
                    <i className="mdi mdi-calendar-clock text-primary h4"></i>
                    <Media body className="ml-4">
                      <p className="text-muted">
                        Monday-Friday: 9am-5pm Mountain Time
                      </p>
                    </Media>
                  </Media> */}

                  <Media className="media mt-4">
                    <i className="mdi mdi-email text-primary h4"></i>
                    <Media body className="ml-4">
                      <p className="text-muted">
                        Email:{" "}
                        <a href="https://mail.google.com/mail/?view=cm&source=mailto&to=cscollins.0311@gmail.com">
                          cscollins.0311@gmail.com
                        </a>
                      </p>
                    </Media>
                  </Media>
                  {/* <Media className="media mt-4">
                    <i
                      className="fab fa-yelp fa-2x"
                      style={{
                        marginLeft: "3px",
                        color: "#F57C00",
                      }}
                    ></i>
                    <Media body className="ml-4">
                      <p className="text-muted">
                        Yelp:{" "}
                        <a href="https://www.yelp.com/biz/aerial-fidelity-sandy?osq=aerial+Fidelity">
                          www.yelp.com/biz/aerial-fidelity
                        </a>
                      </p>
                    </Media>
                  </Media> */}
                </div>
              </Col>
              <Col lg={7}>
                <img
                  className="myLogoOnContact"
                  src={LogoLG}
                  alt="#"
                  style={{
                    height: "300px",
                    width: "auto",
                    marginLeft: "13rem",
                  }}
                ></img>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default GetInTouch;
