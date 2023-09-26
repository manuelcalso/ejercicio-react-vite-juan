import Table from "react-bootstrap/Table"
import { Button } from "react-bootstrap"

function Cardsmenu({
  imageuno,
  imagedos,
  imagetres,
  imagecuatro,
  imagecinco,
  imageseis,
  imagesiete,
}) {
  return (
    <>
      <div className="tablecontent">
        <div>
          <Table striped bordered hover id="table">
            <thead>
              <tr>
                <th>Desayunos</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Huevos a la mexicana</td>
                <img src={imagedos} alt="" />
                <Button>Agregar a la orden</Button>
                <td>$100</td>
              </tr>
              <tr>
                <td>Huevos Rancheros</td>
                <td>$200</td>
                <Button>Agregar a la orden</Button>
              </tr>
              <tr>
                <td>Huevos con jamon</td>
                <td>$300</td>
                <Button>Agregar a la orden</Button>
              </tr>
              <tr>
                <td>Chilaquiles con huevo</td>
                <img src={imageuno} alt="chilaquiles con huevo" />
                <Button>Agregar a la orden</Button>
                <td>$300</td>
              </tr>
              <tr>
                <td>Chilaquiles con pollo</td>
                <td>$300</td>
                <Button>Agregar a la orden</Button>
              </tr>
              <tr>
                <td>Omelet mediterraneo</td>
                <img src={imagecuatro} alt="" />
                <Button>Agregar a la orden</Button>
                <td>$300</td>
              </tr>
              <tr>
                <td>Croissant de jamon y queso</td>
                <td>$300</td>
                <Button>Agregar a la orden</Button>
              </tr>
              <p>
                *Todos los desayunos incluyen cafe, jugo y fruta de temporada
              </p>
            </tbody>
          </Table>
        </div>
        <div>
          <Table striped bordered hover id="table">
            <thead>
              <tr>
                <th>Comidas</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Lasagna</td>
                <img src={imagetres} alt="" />
                <Button>Agregar a la orden</Button>
                <td>$100</td>
              </tr>
              <tr>
                <td>Risotto</td>
                <img src={imageseis} alt="" />
                <Button>Agregar a la orden</Button>
                <td>$200</td>
              </tr>
              <tr>
                <td>Chiles rellenos</td>
                <td>$300</td>
                <Button>Agregar a la orden</Button>
              </tr>
              <tr>
                <td>Milanesa de pollo</td>
                <td>$300</td>
                <Button>Agregar a la orden</Button>
              </tr>
              <tr>
                <td>Enchiladas suizas</td>
                <td>$300</td>
                <Button>Agregar a la orden</Button>
              </tr>
              <tr>
                <td>Faláfe</td>
                <img src={imagecinco} alt="" />
                <Button>Agregar a la orden</Button>
                <td>$300</td>
              </tr>
              <tr>
                <td>Paella</td>
                <td>$300</td>
                <Button>Agregar a la orden</Button>
              </tr>
              <tr>
                <td>Agua de sandia con menta</td>
                <img src={imagesiete} alt="" />
                <Button>Agregar a la orden</Button>
                <td>$50</td>
              </tr>
              <p>
                *Todos las comidas incluyen jarra de agua, una entrada ya sea
                arroz o spaghetti.
              </p>
            </tbody>
          </Table>
        </div>
      </div>
    </>
  )
}

export default Cardsmenu
