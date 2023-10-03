import React from "react"
import Header from "./Header"
import Footer from "./Footer"

export default function Contacto() {
  return (
    <>
      <div>
        <Header />
      </div>
      <section id="contactocontainer">
        <div id="ubicacion">
          <br />
          <h2>Nuestra Ubicacion</h2>
          <p>
            Direccion: Jose Maria Morelos #711 <br /> Colonia: Centro, La merced{" "}
            <br /> CP: 50080
            <br />
            Telefono: 729807848
          </p>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1882.936272172804!2d-99.66094662072271!3d19.287908125673518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDE3JzE2LjUiTiA5OcKwMzknMzUuNSJX!5e0!3m2!1ses-419!2smx!4v1696363537355!5m2!1ses-419!2smx"
              width="600"
              height="450"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <br />
        </div>
        <div id="contactinfo">
          <h1>Contacto</h1>
          <label htmlFor="name">Nombre</label>
          <input type="text" for="name" />
          <label htmlFor="email">Email</label>
          <input type="e-mail" for="email" />
          <label htmlFor="textarea">Comentanos tus dudas...</label>
          <textarea name="textarea" id="" cols="10" rows="5"></textarea>
          <br />
          <button type="submit">Enviar</button>
          <br />
        </div>
        <br />
      </section>
      <div>
        <Footer />
      </div>
    </>
  )
}
