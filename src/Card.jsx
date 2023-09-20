import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import maria from "./../src/assets/maria1.jpg"
import ana from "./../src/assets/ana1.jpg"
import roberto from "./../src/assets/roberto1.jpg"

export function Onecard({ nombreuno, edad1, comentario1 }) {
  return (
    <Card style={{ width: "18rem" }} id="card1">
      <img src={maria} />
      <Card.Body>
        <Card.Title>{nombreuno}</Card.Title>
        <Card.Text>{edad1} años</Card.Text>
        <Card.Text>{comentario1}</Card.Text>
        <Button variant="primary" href="/comenta">
          Deja tu comentario!
        </Button>
      </Card.Body>
    </Card>
  )
}

export function Secondcard({ nombredos, edad2, comentario2 }) {
  return (
    <Card style={{ width: "18rem" }} id="card2">
      <img src={roberto} />
      <Card.Body>
        <Card.Title>{nombredos}</Card.Title>
        <Card.Text>{edad2}</Card.Text>
        <Card.Text>{comentario2}</Card.Text>
        <Button variant="primary" href="/comenta">
          Deja tu comentario!
        </Button>
      </Card.Body>
    </Card>
  )
}

export function Thirdcard({ nombredos, edad2, comentario2 }) {
  return (
    <Card style={{ width: "18rem" }} id="card3">
      <img src={ana} />
      <Card.Body>
        <Card.Title>{nombredos}</Card.Title>
        <Card.Text>{edad2}</Card.Text>
        <Card.Text>{comentario2}</Card.Text>
        <Button variant="primary" href="/comenta">
          Deja tu comentario!
        </Button>
      </Card.Body>
    </Card>
  )
}
