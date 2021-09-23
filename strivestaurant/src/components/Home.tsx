import { Carousel, Col, Container, Row } from 'react-bootstrap'
import dishes from '../data/menu.json'
import { useState } from 'react'
import DishComments from './DishComments'
import upperName from '../helpers/lib'
import { RouteComponentProps } from 'react-router-dom'

interface homeComponentProps{
  title:string
}

interface selectedPasta{
  id: number
  name: string
  image: string
  category: string
  label: string
  price: string
  description: string
  comments: comment[]
}
interface comment {
  id: number
  rating: number
  comment: string
  author: string
  date: string
}
type AllProps = RouteComponentProps & homeComponentProps

const Home = ({ title }:AllProps) => {
  const [selected, setSelected] = useState<selectedPasta | null>(null)

  return (
    <Container>
      <Row className="justify-content-center mt-3">
        <Col xs={12} md={6}>
          <h1>Welcome to {upperName(title)}!</h1>
          <h3 className="text-center mb-4">We can only cook pasta...</h3>
          <Carousel>
            {dishes.map((dish, i) => (
              <Carousel.Item
                key={dish.id}
                onClick={() => {
                  setSelected(dish)
                }}
              >
                <img className="d-block w-100" src={dish.image} alt={'slide number ' + (i + 1)} />
                <Carousel.Caption>
                  <h3>{dish.name}</h3>
                  <p>{dish.description}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
        <DishComments selectedPasta={selected}/>
      </Row>
    </Container>
  )
}

export default Home
