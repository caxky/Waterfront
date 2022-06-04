import './Pricing.scss';
import { Row, Col, Card, ListGroup } from 'react-bootstrap';
import { CheckCircle, XCircle } from 'react-bootstrap-icons';

export default function Pricing() {
  return (
    <div className='my-5 py-2 pricing' id='pricing'>
      <h2 className='text-center my-5'>PRICING</h2>
      <Row className='d-flex'>
        <Col>
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

        <Col>
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
                <h5><b>1.15%</b></h5>
                <h5>Annual Management Fee</h5>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
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
                <h5><b>1.15%</b></h5>
                <h5>Annual Management Fee</h5>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  )
}
