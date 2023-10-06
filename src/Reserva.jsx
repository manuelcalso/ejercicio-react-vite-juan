import React from 'react'
import Header from './Header'
import Footer from './Footer'
import 'tailwindcss/tailwind.css'
import { useState, useEffect } from 'react'


export default function Reserva() {

  const [reservations, setReservations] = useState([])
  const [newReservation, setNewReservation] = useState({
    title: "",
    description: ""
  })

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

  const handleSubmit = (e, data) => {
    e.preventDefault()
    const sendData = async () => {
      const response = await fetch(serverUrl, {
        headers: {
          "Content-Type": "application/json"

        },
        method: "POST",
        body: JSON.stringify(data),
      })
      console.log(response)

      const successData = await response.json()
      console.log(successData)

      setReservations(successData.data)
      
    }
    sendData()
  }


  const handleChange = (e) => {
  
    setNewReservation({
      ...newReservation,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
    <section className='sectionreserva flex flex-col justify-center'>
        <div>
          <Header />
        </div>
        <div className='flex flex-row items-center justify-center'>
        <form className='flex flex-col justify-center items-center m-5 border border-black bg-[#45ebf7] rounded w-80' onSubmit={(e) => handleSubmit(e, newReservation)} >
            <div>
              <div>
              <h1 className='text-3xl'>Reserva tu mesa</h1>
              </div>
              <div>
              <label htmlFor="title">Titular de la reservacion</label>
              <br />
              <input type="text" name="title" placeholder='a nombre de quien...' className='border border-black rounded-lg w-100' onChange={(e) => handleChange(e)} value={newReservation.title}/>
              </div>
            </div>
            <br />
            <div>
              <div>
              <label htmlFor="description">Descripcion de la reservacion</label>
              <br />
              <textarea type="text" name="description" placeholder='cuantas personas, zona deseada...' className='border border-black rounded w-100' onChange={(e) => handleChange(e)} value={newReservation.description} />
              </div>
              <br />
              <div className='flex flex-row justify-center items-center h-20'>
                <button className='reservabutton text-white rounded bg-[#644164] w-50 h-20'> Crear Reservacion</button>
              </div>
              <br />
            </div>
        </form>
        </div>
        <div className='border border-black bg-[#fdbb2d]'>
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
