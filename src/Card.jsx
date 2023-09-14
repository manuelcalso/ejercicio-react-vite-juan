import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import juanP from "./../src/assets/juanarboles.jpg"
import juanA from "./../src/assets/juanpalmera.jpg"

export function Onecard() {
  return (
    <Card style={{ width: "18rem" }}>
      <img src={juanA} />
      <Card.Body>
        <Card.Title>Juan C</Card.Title>
        <Card.Text>Ejemplo de carta</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  )
}

export function Secondcard() {
  return (
    <Card style={{ width: "18rem" }}>
      <img src={juanP} />
      <Card.Body>
        <Card.Title>Juan S</Card.Title>
        <Card.Text>Ejemplo de carta</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  )
}
