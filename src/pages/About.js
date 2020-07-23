import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function About() {
  return (
    <div>
      <Hero>
        <h1>Pupster</h1>
        <h2>This is Kuro's journey for <br/>Finding Friends</h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Welcome To Pupster!</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
              Kuro has very shy and timid chracters, so he is not a social dog. <br/>
              He likes to smell his friends, but he hates other friends smelling him.<br/>
              Kuro likes to play with people, but due to COVID-19 and the Samuel's bootcamp course make him bored.<br/>
            </p><br/>
            <p style={{ textAlign: "right" }}>
              It is time to find a real friend.<br/>
              How many friends can you make to Kuro?<br/>
              <h5>Yes, This is Competition.</h5>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
