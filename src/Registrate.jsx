import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Header from "./Header"
import Footer from "./Footer"
import { useState, useEffect } from "react"


export default function Registrate() {

  const [registro, setRegistro] = useState([])
  
  const serverUrl = import.meta.env.VITE_SERVER_URL

  useEffect(()=>{
    const fetchReservations = async () => {
      const response = await fetch(serverUrl)
      const allRegistros = await response.json()

      setRegistro(allRegistros.data)
      return
    }
    fetchReservations()

  }, [])

  

  function handleChange(e) {
    setRegistro({
      ...registro,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = (e, data) => {
    e.preventDefault()
    const sendData = async () => {
      const response = await fetch(serverUrl, {
        headers: {
          "Content-Type": "application/json"

        },
        method: "POST",
        body: JSON.stringify(registro),
      })
      console.log(response)

      const successData = await response.json()
      console.log(successData)

      setRegistro([...registro, successData.data]);
      
    }
    sendData()
  }


  return (
    <>
      <section>
        <div>
          <Header />
        </div>
        <article id="contenedor">
          <Form id="registratecontain" onSubmit={()=>handleSubmit(e, setRegistro)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nombre completo</Form.Label>
              <Form.Control type="text" placeholder="nombre"  onChange={(e) => handleChange(e)} value={registro.name}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Correo electronico</Form.Label>
              <Form.Control type="email" placeholder="email"  onChange={(e) => handleChange(e)} value={registro.email} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={(e) => handleChange(e)} value={registro.password} />
            </Form.Group>
            <Form.Text className="text-muted">
              No compartiermos tus datos con nadie.
            </Form.Text>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button type="submit" >Enviar</Button>
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