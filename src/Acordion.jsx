import Accordion from "react-bootstrap/Accordion"
import chilaquiles from "./../src/assets/chilaquiles.jpg"
import huevosmexicanos from "./assets/huevosmexicanos.jpg"
import aguasandia from "./assets/sandialimon.jpg"
import lasana from "./assets/lasana.jpg"
import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"



function Acordion() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header >
          Desayunos
        </Accordion.Header>
        <Accordion.Body className="desayunoclass">
          <img
            className="w-50 h-50 rounded-xlg shadow-md border border-black"
            src={chilaquiles}
          />
          <div>
            <p className="desayunoparrafo">
              CHILAQUILES<br></br> Se preparan a base de trocitos de tortilla de
              maíz fritos (o tostados) o de totopos, y se bañan en salsa de
              chile verde o roja. Pueden llevar huevos, pechuga de pollo
              deshebrada, chorizo y hasta un buen trozo de cecina u otros tipos
              de carnes. Los chilaquiles son mi desayuno mexicano favorito y
              siempre los prefiero rojos (con salsa roja) y con dos huevos
              estrellados.
            </p>
          </div>
        </Accordion.Body>
        <Accordion.Body className="desayunoclass">
          <div className="desayunoclass2">
            <p className="desayunoparrafo2">
              HUEVOS A LA MEXICANA: <br></br>Se fríen los tomates, la cebolla y
              el chile y se le agregan los huevos, que pueden batirse
              previamente o no. Se sirven con tortillas, claro.
              <div className="desayunobutton2">
                <Button className="flex flex-column justify-center bg-black border border-black">
                  <Link to="/menu" className="text-white">
                    Consulta el menu de desayunos
                  </Link>
                </Button>{" "}
              </div>
            </p>
            <img
              className="w-50 h-55 rounded-lg shadow-md border border-black"
              src={huevosmexicanos}
            />
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Almuerzos</Accordion.Header>
        <Accordion.Body className="almuerzoclass">
          <img
            className="w-96 h-72 rounded-lg shadow-md border border-black"
            src={lasana}
          />
          <div>
            <p className="desayunoparrafo">
              LASAGNA <br />
              Consiste en un tipo de pasta con forma de lámina cuadrada que se
              coloca en forma de bloque y se rellena con carne, pescado o
              verdura. Entre lámina y lámina también lleva bechamel, y para
              terminar abundante queso con el que se le dará su aspecto habitual
              gratinado.
              <div className="desayunobutton">
                <Button className="flex justify-center item-center bg-black border border-black text-white">
                  <Link to="/menu" className="text-white">
                    Consulta el menu de almuerzos
                  </Link>
                </Button>{" "}
              </div>
            </p>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Bebidas</Accordion.Header>
        <Accordion.Body className="desayunoclass3">
          <img
            className="w-50 h-30 rounded-xl shadow-md border border-black"
            src={aguasandia}
          />
          <div>
            <p className="desayunoparrafo">
              AGUA DE SANDIA CON MENTA <br></br>
              El agua de sandía con menta es una bebida refrescante y deliciosa
              que combina la dulzura natural de la sandía con el fresco sabor de
              la menta. Esta refrescante bebida es muy popular en muchas
              regiones, especialmente en los meses cálidos de verano del
              mediterraneo.
              <div className="desayunobutton">
                <Button className="justify-center bg-black item-center border border-black">
                  <Link to="/menu" className="text-white">
                    Consulta el menu de bebidas
                  </Link>
                </Button>{" "}
              </div>
            </p>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}

export default Acordion
