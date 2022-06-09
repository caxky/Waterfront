import './Pricing.scss';
import { Row, Col, Card, ListGroup, Button } from 'react-bootstrap';
import { CheckCircle, XCircle } from 'react-bootstrap-icons';

export default function Pricing() {
  return (
    <div className='my-5 py-2 pricing' id='pricing'>
      <h2 className='text-center my-5'>PRICING</h2>
      <Row className='d-flex'>
        <Col className='mb-5' sm={12} xl={4}>
        <Card>
          <Card.Body>
            <Card.Title className='text-center' id='card-1'>$0 - $249,999</Card.Title>
            <ListGroup variant="flush">
              <ListGroup.Item><CheckCircle className='me-1'/>Expert Services</ListGroup.Item>
              <ListGroup.Item><CheckCircle className='me-1'/>Investment Insurance</ListGroup.Item>
              <ListGroup.Item><CheckCircle className='me-1'/>Regular Rebalancing</ListGroup.Item>
              <ListGroup.Item><CheckCircle className='me-1'/>Automatic Monthly Contributions</ListGroup.Item>
              <ListGroup.Item><CheckCircle className='me-1'/>Performance Reporting</ListGroup.Item>
              <ListGroup.Item><XCircle className='me-1'/>Transfer Fees Reimbursed</ListGroup.Item>
              <ListGroup.Item><XCircle className='me-1'/>Tax Planning</ListGroup.Item>
            </ListGroup>
            <Card.Text className='text-center'>
              <h5><b>1.15%</b></h5>
              <h5>Annual Management Fee</h5>
            </Card.Text>
          </Card.Body>
        </Card>
        </Col>

        <Col className='mb-5' sm={12} xl={4}>
          <Card>
            <Card.Body>
              <Card.Title className='text-center' id='card-2'>$250,000 - $749,999</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item><CheckCircle className='me-1'/>Expert Services</ListGroup.Item>
                <ListGroup.Item><CheckCircle className='me-1'/>Investment Insurance</ListGroup.Item>
                <ListGroup.Item><CheckCircle className='me-1'/>Regular Rebalancing</ListGroup.Item>
                <ListGroup.Item><CheckCircle className='me-1'/>Automatic Monthly Contributions</ListGroup.Item>
                <ListGroup.Item><CheckCircle className='me-1'/>Performance Reporting</ListGroup.Item>
                <ListGroup.Item><CheckCircle className='me-1'/>Transfer Fees Reimbursed</ListGroup.Item>
                <ListGroup.Item><XCircle className='me-1'/>Tax Planning</ListGroup.Item>
              </ListGroup>
              <Card.Text className='text-center'>
                <h5><b>0.85%</b></h5>
                <h5>Annual Management Fee</h5>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col className='mb-5' sm={12} xl={4}>
          <Card>
            <Card.Body>
              <Card.Title className='text-center' id='card-3'>$750,000 - $1,499,999</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item><CheckCircle className='me-1'/>Expert Services</ListGroup.Item>
                <ListGroup.Item><CheckCircle className='me-1'/>Investment Insurance</ListGroup.Item>
                <ListGroup.Item><CheckCircle className='me-1'/>Regular Rebalancing</ListGroup.Item>
                <ListGroup.Item><CheckCircle className='me-1'/>Automatic Monthly Contributions</ListGroup.Item>
                <ListGroup.Item><CheckCircle className='me-1'/>Performance Reporting</ListGroup.Item>
                <ListGroup.Item><CheckCircle className='me-1'/>Transfer Fees Reimbursed</ListGroup.Item>
                <ListGroup.Item><CheckCircle className='me-1'/>Tax Planning</ListGroup.Item>
              </ListGroup>
              <Card.Text className='text-center'>
                <h5><b>0.45%</b></h5>
                <h5>Annual Management Fee</h5>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className='mx-auto mb-5 text-center wrapper'>
        <h4 className='mb-3'>Need to manage more than $1.5M?</h4>
        <Button href="#book">CONTACT US</Button>
      </Row>
    </div>
  )
}
