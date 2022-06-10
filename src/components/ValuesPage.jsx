import './ValuesPage.scss';
import { Row, Col, Card, Container } from 'react-bootstrap';
import { HeartFill, EmojiSmile, CpuFill, BookHalf, Check2Circle, LayersFill } from 'react-bootstrap-icons';

export default function ValuesPage() {
    return (
        <div className='valuespage'>
            <Container>
                <div className='wrapper mb-5 px-1'>
                    <h3>Who Are We?</h3>
                    <p>
                        Unlike the large investment institutions, we embody a philosophy of independent, unbiased advice with an unwavering commitment to delivering true wealth management. 
                        We do this by offering harmonized advice that intricately weaves defensive portfolio construction, income planning and projecting, tax minimization planning, estate preservation, 
                        and trust management, all with a continuous focus on the management of risk. Our advisors have been carefully selected based on high standards of excellence and integrity. 
                        They tailor client wealth plans with no incentive to use proprietary products or investment vehicles.
                    </p>
                </div>
                <div className='wrapper mb-5 px-1'>
                    <h3>Waterfront Management Core Values</h3>
                    <p>
                        Waterfront was founded on a simple, yet revolutionary belief that doing the right thing for clients and 
                        advisors is a good and sustainable business. No compromise due to possible conflicts with shareholders and 
                        management objectives.
                    </p>
                </div>
                
                <Row>
                    <Col className='mb-5' xs={12} lg={4}>
                        <Card className='h-100 text-center'>
                            <Card.Body>
                            <Card.Title>Passion</Card.Title>
                            <div className='wrapper'>
                                <div className='mx-auto my-2 rounded-circle'>
                                    <HeartFill className='light'/>
                                </div>
                            </div>
                            <Card.Text>
                                Business is human, build with heart and balance.
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col className='mb-5' xs={12} lg={4}>
                        <Card className='h-100 text-center'>
                            <Card.Body>
                            <Card.Title>Commitment</Card.Title>
                            <div className='wrapper'>
                                <div className='mx-auto my-2 rounded-circle'>
                                    <EmojiSmile className='light'/>
                                </div>
                            </div>
                            <Card.Text>
                                Great people make great companies!
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col className='mb-5' xs={12} lg={4}>
                        <Card className='h-100 text-center'>
                            <Card.Body>
                            <Card.Title>Innovation</Card.Title>
                            <div className='wrapper'>
                                <div className='mx-auto my-2 rounded-circle'>
                                    <CpuFill className='light'/>
                                </div>
                            </div>
                            <Card.Text>
                                Fuel innovation & empowerment.
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col className='mb-5' xs={12} lg={4}>
                        <Card className='h-100 text-center'>
                            <Card.Body>
                            <Card.Title>Adaptive</Card.Title>
                            <div className='wrapper'>
                                <div className='mx-auto my-2 rounded-circle'>
                                    <LayersFill className='light'/>
                                </div>
                            </div>
                            <Card.Text>
                                Be the change you seek.
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col className='mb-5' xs={12} lg={4}>
                        <Card className='h-100 text-center'>
                            <Card.Body>
                            <Card.Title>Ownership</Card.Title>
                            <div className='wrapper'>
                                <div className='mx-auto my-2 rounded-circle'>
                                    <Check2Circle className='light'/>
                                </div>
                            </div>
                            <Card.Text>
                                Take ownership, get it done!
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col className='mb-5' xs={12} lg={4}>
                        <Card className='h-100 text-center'>
                            <Card.Body>
                            <Card.Title>Learning</Card.Title>
                            <div className='wrapper'>
                                <div className='mx-auto my-2 rounded-circle'>
                                    <BookHalf className='light'/>
                                </div>
                            </div>
                            <Card.Text>
                                Continuous improvement, versus delayed perfection.
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}