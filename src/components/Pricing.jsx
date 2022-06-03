import './Pricing.scss';
import { Row, Col, Card, ListGroup } from 'react-bootstrap';

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
              <ListGroup.Item>Expert Services</ListGroup.Item>
              <ListGroup.Item>Investment Insurance</ListGroup.Item>
              <ListGroup.Item>Regular Rebalancing</ListGroup.Item>
              <ListGroup.Item>Automatic Monthly Contributions</ListGroup.Item>
              <ListGroup.Item>Performance Reporting</ListGroup.Item>
              <ListGroup.Item>Transfer Fees Reimbursed</ListGroup.Item>
              <ListGroup.Item>Tax Planning</ListGroup.Item>
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
                <ListGroup.Item>Expert Services</ListGroup.Item>
                <ListGroup.Item>Investment Insurance</ListGroup.Item>
                <ListGroup.Item>Regular Rebalancing</ListGroup.Item>
                <ListGroup.Item>Automatic Monthly Contributions</ListGroup.Item>
                <ListGroup.Item>Performance Reporting</ListGroup.Item>
                <ListGroup.Item>Transfer Fees Reimbursed</ListGroup.Item>
                <ListGroup.Item>Tax Planning</ListGroup.Item>
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
                <ListGroup.Item>Expert Services</ListGroup.Item>
                <ListGroup.Item>Investment Insurance</ListGroup.Item>
                <ListGroup.Item>Regular Rebalancing</ListGroup.Item>
                <ListGroup.Item>Automatic Monthly Contributions</ListGroup.Item>
                <ListGroup.Item>Performance Reporting</ListGroup.Item>
                <ListGroup.Item>Transfer Fees Reimbursed</ListGroup.Item>
                <ListGroup.Item>Tax Planning</ListGroup.Item>
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
