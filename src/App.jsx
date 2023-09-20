import Header from "./Header"
import Footer from "./Footer"
import Content from "./Content"
import { Onecard, Secondcard, Thirdcard } from "./Card"
import "bootstrap/dist/css/bootstrap.min.css"
import { SpinnerExp, Growspinner } from "./Spinner"
import Acordion from "./Acordion"
import Basicform from "./Forms"

function App() {
  const datacarousel = {
    slideunotitulo: "COCINA MEXICANA",
    slideunoparrafo:
      "¡Bienvenidos a nuestro rincón de México! En nuestro restaurante solo te ofrecemos deliciosos platillos mexicanos. Aquí celebramos la riqueza de nuestras tradiciones. Únete a nosotros y viaja a través de la historia y la pasión de México en cada bocado y cada momento que compartas con nosotros. ¡Te esperamos con los brazos abiertos en esta experiencia única de cultura mexicana!",
    slidedostitulo: "COCINA ITALIANA",
    slidedosparrafo:
      "Nuestra cocina italiana es una oda a la simplicidad y al sabor. Desde los clásicos spaghetti a la bolognesa, con su salsa de tomate fresco y carne de res cocida a fuego lento, hasta las pizzas margherita, con su base de masa fina y crujiente, salsa de tomate, mozzarella fresca y albahaca.",
    slidetrestitulo: "COCINA MEDITERRANEA",
    slidetresparrafo:
      "Nuestros exquisitos platos mediterráneos te transportarán a las soleadas playas de Grecia, Italia y España. Disfruta de la frescura de los ingredientes locales, el aceite de oliva aromático y las especias que dan vida a nuestros platos.",
  }

  const datacards = {
    nombre1: "Maria",
    edad1: "35",
    comentario1:
      "¡La comida en Fusion Global es asombrosa! Probé el plato de paella y me hizo sentir como si estuviera de nuevo en la costa de España. Los sabores auténticos y frescos realmente hacen la diferencia. ¡Definitivamente volveré!",
    nombre2: "Roberto",
    edad2: "42",
    comentario2:
      "No puedo dejar de elogiar la comida en Fusion Global. El plato de moussaka que pedí me transportó directamente a las tabernas de Grecia. El ambiente y el servicio son excepcionales.  ¡Este restaurante es una joya",
    nombre3: "Ana Laura",
    edad3: "28",
    comentario3:
      "Fusion Global es mi lugar favorito para disfrutar de auténtica comida mediterránea. El kebab de cordero es simplemente delicioso y el hummus es el mejor que he probado. El personal es amable y el ambiente es acogedor. ¡Siempre me siento como en casa cuando como aquí!",
  }

  return (
    <>
      <div id="headercontainer">
        <Header />
      </div>

      <div>
        <Content
          tituloslideuno={datacarousel.slideunotitulo}
          parrafoslideuno={datacarousel.slideunoparrafo}
          tituloslidedos={datacarousel.slidedostitulo}
          parrafoslidedos={datacarousel.slidedosparrafo}
          tituloslidetres={datacarousel.slidetrestitulo}
          parrafoslidetres={datacarousel.slidetresparrafo}
        />
      </div>
      <div id="Card">
        <Onecard
          nombreuno={datacards.nombre1}
          edad1={datacards.edad1}
          comentario1={datacards.comentario1}
        />
        <Secondcard
          nombredos={datacards.nombre2}
          edad2={datacards.edad2}
          comentario2={datacards.comentario2}
        />
        <Thirdcard
          nombredos={datacards.nombre3}
          edad2={datacards.edad3}
          comentario2={datacards.comentario3}
        />
      </div>
      <div id="generalform">
        <div id="formid">
          <Basicform />
        </div>
      </div>
      <div>
        <Acordion />
      </div>
      <div>
        <Footer />
      </div>
    </>
  )
}

export default App
