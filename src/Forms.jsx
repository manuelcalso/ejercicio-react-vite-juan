import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"

const mostrarAlerta = () => {
  alert("tu suscripcion se ha registrado")
}

function Basicform() {
  return (
    <Form>
      <h1>Enterate de nuestros planes</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          Nunca compartiremos tus datos...
        </Form.Text>
      </Form.Group>
      <Button
        type="submit"
        className="border border-transparent"
        onClick={mostrarAlerta}
      >
        Suscribir
      </Button>
    </Form>
  )
}

export default Basicform
