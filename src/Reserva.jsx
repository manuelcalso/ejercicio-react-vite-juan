import React from 'react'
import Header from './Header'
import Footer from './Footer'
import 'tailwindcss/tailwind.css'
import { Button } from 'react-bootstrap'
import { useState, useEffect } from 'react'




export default function Reserva() {

  const [reservations, setReservations] = useState([])

  const serverUrl = import.meta.env.VITE_SERVER_URL
  
  
  useEffect(() => {
    console.log("entrando a hook")
    const fetchReservations = async () => {
      const response = await fetch(serverUrl)
      const allReservations = await response.json()
      

      setReservations(allReservations.data)
      return
    }
    fetchReservations()
  }, [])

  return (
    <>
    <section>
        <div>
          < Header/>
        </div>
        <form className='flex flex-col justify-center items-center m-5 border border-black' >
            <div>
              <div>
              <h1 className='text-2xl'>Reserva tu mesa</h1>
              </div>
              <div>
              <label htmlFor="title">Titulo Reservacion</label>
              <input type="text" name="title" id=""  />
              </div>
            </div>
            <br />
            <div>
              <div>
              <label htmlFor="description">Descripcion</label>
              <input type="text" name="description" id="" />
              </div>
              <div className='flex flex-row border border-black justify-center items-center'>
                <Button className='text-black'>Crear Reservacion</Button>
              </div>
            </div>
        </form>
        <div className='border border-black'>
      
      {
        reservations.length === 0 ? <p>no hay reservaciones...</p> : reservations.map(e => {
          return (
            <div key={e.id}>
              <h1>Reservacion: {e.title}</h1>
              <p>Descripcion: {e.description}</p>
            </div>
          )
        })
      }

    </div>
        <div>
          <Footer/>
        </div>
       
    </section>
    
    </>
  )
}
