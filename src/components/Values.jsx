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
            <Card.Body className='text-center'>
              <Card.Title className='text-center'>Passion</Card.Title>
              <Card.Img variant='top' className='p-4' src='./images/passion.png' />
              <Link to='/values'><Button variant="outline-dark">LEARN MORE</Button></Link>
            </Card.Body>
          </Card>
        </Col>

        <Col className='mb-5' xs={12} lg={4}>
          <Card className='h-100'>
            <Card.Body className='text-center'>
              <Card.Title>Commitment</Card.Title>
              <Card.Img variant='top' className='p-4' src='./images/commitment.png' />
              <Link to='/values'><Button variant="outline-dark">LEARN MORE</Button></Link>
            </Card.Body>
          </Card>
        </Col>

        <Col className='mb-5' xs={12} lg={4}>
          <Card className='h-100'>
            <Card.Body className='text-center'>
              <Card.Title className='text-center'>Innovation</Card.Title>
              <Card.Img variant='top' className='p-4' src='./images/innovation.png' />
              <Link to='/values'><Button variant="outline-dark">LEARN MORE</Button></Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  )
}
