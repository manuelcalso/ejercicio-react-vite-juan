import Header from "./Header"
import Footer from "./Footer"
import Acordion from "./Acordion"
import Cardsmenu from "./Cardsmenu"
import chilaquiles from "./../src/assets/chilaquiles.jpg"
import huevosmexicanos from "./assets/huevosmexicanos.jpg"
import aguasandia from "./assets/sandialimon.jpg"
import lasana from "./assets/lasana.jpg"
import Omelet from "./../src/assets/omeletmediterraneo.jpg"
import falafe from "./../src/assets/falafe.jpg"
import risotto from "./../src/assets/risotto.jpg"

function Menu() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Cardsmenu
          imageuno={chilaquiles}
          imagedos={huevosmexicanos}
          imagetres={lasana}
          imagecuatro={Omelet}
          imagecinco={falafe}
          imageseis={risotto}
          imagesiete={aguasandia}
        />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Menu
