import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Home.css';


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    
  }
 

  render() {
    return (
      <section className="page" id="home-page">
        <Container fluid>
          <Row>
            <Col sm={12} md={12} lg={12}>
              <h1>Home</h1>
              <hr/>
            </Col>
          </Row>

        </Container>
      </section>
    );
  }
}

export default Home;