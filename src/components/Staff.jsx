import './Staff.scss';
import { Row, Col, Card, Button } from 'react-bootstrap';

export default function Staff() {
  return (
    <div className='staff' id='staff'>
      <h2 className='text-center my-5'>OUR STAFF</h2>
      <Row className='d-flex'>
        <Col>
          <Card>
            <Card.Img variant='top' className='p-3' src='./images/george-pauler.jpg' />
            <Card.Body>
              <Card.Title className='text-center'>George Pauler, CFA, CFP</Card.Title>
              <Card.Text>
              Extensive financial investment experience – earned over 30 years – has solidified George's reputation as a retirement and wealth 
              planning expert and respected authority in Ottawa’s financial planning community.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Img variant='top' className='p-3' src='./images/eric-chen.jpg' />
            <Card.Body>
              <Card.Title className='text-center'>Eric Chen, CFA</Card.Title>
              <Card.Text>
              Eric's goal is to use his extensive market knowledge to guide you toward the greatest financial advantage possible. He’ll work 
              with you to implement your best-fit financial strategy, and to keep working your plan as the years – always full of the unexpected – unfold.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Img variant='top' className='p-3' src='./images/fredrick-smith.jpg' />
            <Card.Body>
              <Card.Title className='text-center'>Fredrick Smith</Card.Title>
              <Card.Text>
              Fredrick is focused on providing clients with the utmost level of service by building a rapport with each client and providing them with 
              investment advice and financial planning projections tailored to their unique circumstances.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      
      <Row className='mx-auto mt-5 wrapper'>
        <Button>BOOK NOW</Button>
      </Row>
    </div>
  )
}
