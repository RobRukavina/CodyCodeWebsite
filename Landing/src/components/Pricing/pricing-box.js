import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, CardBody } from "reactstrap";

class PricingBox extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.pricings.map((pricing, key) => (
          <Col lg={4} key={key}>
            <div className="pricing-plan card text-center">
              <CardBody className="p-4">
                <h5 className="mt-2 mb-5">{pricing.title}</h5>

                <h1 className="mb-5">
                  <sup>
                    <small>$</small>
                  </sup>
                  {pricing.price}
                </h1>
                <div>
                  <a
                    className="btn btn-primary"
                    style={{ maxHeight: "2.5rem", fontSize: "small" }}
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://mail.google.com/mail/?view=cm&source=mailto&to=cscollins.0311@gmail.com"
                  >
                    Inquire
                  </a>
                </div>
                <div className="plan-features mt-5">
                  {pricing.features.map((feature, key) => (
                    <p key={key}>
                      {feature.title}
                    </p>
                  ))}
                </div>
              </CardBody>
            </div>
          </Col>
        ))}
      </React.Fragment>
    );
  }
}

export default PricingBox;
