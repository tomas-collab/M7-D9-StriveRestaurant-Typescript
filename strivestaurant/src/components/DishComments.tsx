import { Container, Row, Col, ListGroup } from "react-bootstrap"

interface dishCommentsProps{
    selectedPasta: Pasta | null
}
interface Pasta{
    id: number
    name: string
    image: string
    category: string
    label: string
    price: string
    description: string
    comments: comment[]
    }
interface comment{
    id: number
    rating: number
    comment: string
    author: string
    date: string
}

const DishComments = ({ selectedPasta}:dishCommentsProps) => (
    <Container>
        <Row className="justify-content-center mt-3">
            <Col xs={12} md={6}>
                <ListGroup>
                    {
                        selectedPasta ? selectedPasta.comments.map(c => (
                            <ListGroup.Item key={c.id}>{c.comment}</ListGroup.Item>
                        )) : <p>Click on a dish to read its comments</p>
                    }
                </ListGroup>
            </Col>
        </Row>
    </Container>
)

export default DishComments