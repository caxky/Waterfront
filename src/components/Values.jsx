import './Values.scss';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

export default function Values() {
  return (
    <div className='my-5 py-2 values' id='values'>
      <h2 className='text-center my-5'>OUR VALUES</h2>
      <Row className='d-flex'>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title className='text-center'>Value 1</Card.Title>
              <Card.Text>
                Text here
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Body>
              <Card.Title className='text-center'>Value 2</Card.Title>
              <Card.Text>
                Text here
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Body>
              <Card.Title className='text-center'>Value 3</Card.Title>
              <Card.Text>
                Text here
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      
      <Row className='mx-auto my-5 wrapper'>
        <Link to='/values'><Button variant="outline-dark">LEARN MORE</Button></Link>
      </Row>
    </div>
  )
}
