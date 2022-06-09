import './ValuesPage.scss';
import { Row, Col, Card } from 'react-bootstrap';

export default function ValuesPage() {
    return (
        <div>
            <Col className='mb-5' xs={12} lg={4}>
            <Card className='h-100'>
                <Card.Body>
                <Card.Title className='text-center'>Passion</Card.Title>
                <Card.Text>
                    Everyone feels good about contributing to a larger cause and doing something selfless, 
                    especially if those outcomes align with the delivery of solid results and success for you.
                </Card.Text>
                </Card.Body>
            </Card>
            </Col>

            <Col className='mb-5' xs={12} lg={4}>
            <Card className='h-100'>
                <Card.Body>
                <Card.Title className='text-center'>Empathy</Card.Title>
                <Card.Text>
                    Leading with compassion has great merits since it allows us to perceive 
                    things from another individual’s perspective and be able to leverage that information for good.
                </Card.Text>
                </Card.Body>
            </Card>
            </Col>

            <Col className='mb-5' xs={12} lg={4}>
            <Card className='h-100'>
                <Card.Body>
                <Card.Title className='text-center'>Innovation</Card.Title>
                <Card.Text>
                    By being open-minded rather than impressing what we might want for you, 
                    new ideas will flow and the end goals will tell you what it needs.
                </Card.Text>
                </Card.Body>
            </Card>
            </Col>
        </div>
    )
}