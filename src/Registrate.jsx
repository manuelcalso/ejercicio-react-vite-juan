import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Header from "./Header";
import Footer from "./Footer";
import { useState, useEffect } from "react";
import React from "react";

export default function Registrate() {
  const [registro, setRegistro] = useState([]);
  const [newRegistro, setNewRegistro] = useState({
    id: "",
    nombre: "",
    email: "",
    password: "",
  });

  const serverUrl = import.meta.env.VITE_SERVER_URL_USR;

  useEffect(() => {
    console.log("entrando a hook");
    const fetchRegistros = async () => {
      const response = await fetch(serverUrl);
      const allRegistros = await response.json();

      setRegistro(allRegistros.data);
      return;
    };
    fetchRegistros();
  }, []);

  const handleSubmit = (e, data) => {
    e.preventDefault();
    console.log(data);
    const sendData = async () => {
      const response = await fetch(serverUrl, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(data),
      });
      console.log(response);

      const successData = await response.json();
      console.log(successData);

      setRegistro(successData.data);
    };
    sendData();
  };

  function handleChange(e) {
    console.log("handleChange se ha llamado");
    setNewRegistro({
      ...newRegistro,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <>
      <section>
        <div>
          <Header />
        </div>
        <article id="contenedor">
          <Form id="registratecontain">
            <Form.Group className="mb-3" controlId="formBasicNombre">
              <Form.Label>Nombre completo</Form.Label>
              <Form.Control
                type="text"
                name="nombre"
                placeholder="nombre"
                onChange={(e) => handleChange(e)}
                value={newRegistro.nombre}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Correo electronico</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="email"
                onChange={(e) => handleChange(e)}
                value={newRegistro.email}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                onChange={(e) => handleChange(e)}
                value={newRegistro.password}
              />
            </Form.Group>
            <Form.Text className="text-muted">
              No compartiermos tus datos con nadie.
            </Form.Text>
            <br />
            <Button type="submit" onClick={(e) => handleSubmit(e, newRegistro)}>
              Enviar
            </Button>
          </Form>
          <br />
        </article>
        <div className="border border-black bg-[#fdbb2d]">
          {registro.length === 0 ? (
            <p>Aun no hay registro...</p>
          ) : (
            registro.map((e) => {
              return (
                <div
                  key={e.id}
                  className="registroalert flex inline-block justify-center items-center"
                >
                  <h1 className="text-2xl">
                    ¡Registro confirmado!
                    <br />
                    bienvenido {e.nombre}
                  </h1>
                </div>
              );
            })
          )}
        </div>
        <div>
          <Footer />
        </div>
      </section>
    </>
  );
}
