import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap';
const tasks = [
    { id: 1, title: 'Design new homepage', status: 'In Progress', dueDate: '2024-07-10' },
    { id: 2, title: 'Develop login feature', status: 'Pending', dueDate: '2024-07-12' },
    { id: 3, title: 'Testing application', status: 'Completed', dueDate: '2024-07-08' },
    { id: 4, title: 'Fix bugs', status: 'In Progress', dueDate: '2024-07-15' },
    { id: 5, title: 'Deploy to production', status: 'Pending', dueDate: '2024-07-20' },
    { id: 6, title: 'Create documentation', status: 'Completed', dueDate: '2024-07-05' },
    // Add more tasks as needed
  ];
const Projectpage = () => {
    return (


        <Row>
            {tasks.map((task) => (
                <Col key={task.id} xs={12} sm={6} md={4} lg={3} className="mb-4 d-flex justify-content-center align-items-center">
                    <Card style={{ maxWidth: '18rem' }}>
                        <Button >
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>


                            </Card.Body>
                        </Button>
                    </Card>
                </Col>
            ))}
        </Row>








    
  )
}

export default Projectpage