import './Values.scss';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

export default function Values() {
  return (
    <div className='my-5 py-2 values' id='values'>
      <h2 className='text-center my-5'>OUR VALUES</h2>
      <Row className='d-flex'>
        <Col className='mb-5' xs={12} lg={4}>
          <Card className='h-100'>
            <Card.Body>
              <Card.Title className='text-center'>Passion</Card.Title>
              <Card.Img variant='top' className='p-5' src='./images/passion.png' />
            </Card.Body>
          </Card>
        </Col>

        <Col className='mb-5' xs={12} lg={4}>
          <Card className='h-100'>
            <Card.Body>
              <Card.Title className='text-center'>Commitment</Card.Title>
              <Card.Img variant='top' className='p-5' src='./images/commitment.png' />
            </Card.Body>
          </Card>
        </Col>

        <Col className='mb-5' xs={12} lg={4}>
          <Card className='h-100'>
            <Card.Body>
              <Card.Title className='text-center'>Innovation</Card.Title>
              <Card.Img variant='top' className='p-5' src='./images/innovation.png' />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      
      <Row className='wrapper mb-5'>
        <Link to='/values'><Button variant="outline-dark">LEARN MORE</Button></Link>
      </Row>
    </div>
  )
}
