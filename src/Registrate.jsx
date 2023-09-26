import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Header from "./Header"
import Footer from "./Footer"
import { useState } from "react"

export default function Registrate() {
  return (
    <>
      <section>
        <div>
          <Header />
        </div>
        <article id="contenedor">
          <Form id="registratecontain">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nombre completo</Form.Label>
              <Form.Control type="text" placeholder="nombre" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Correo electronico</Form.Label>
              <Form.Control type="email" placeholder="email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Text className="text-muted">
              No compartiermos tus datos con nadie.
            </Form.Text>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button type="submit">Enviar</Button>
          </Form>
          <br />
        </article>
        <div>
          <Footer />
        </div>
      </section>
    </>
  )
}
