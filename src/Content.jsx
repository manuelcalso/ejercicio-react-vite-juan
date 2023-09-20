import Carousel from "react-bootstrap/Carousel"
import comidamexicana2 from "./../src/assets/comidamexicana2.jpg"
import comidaitaliana2 from "./../src/assets/comidaitaliana2.jpg"
import comidamediterranea2 from "./../src/assets/comidamediterranea2.jpg"
import { SpinnerExp, Growspinner } from "./Spinner"

const Content = (props) => {
  return (
    <>
      <Carousel id="carouselcontainer">
        <Carousel.Item>
          <img src={comidamexicana2} alt="" />
          <Carousel.Caption>
            <h1>
              {props.tituloslideuno}
              <div id="loadermexico">
                <article
                  style={{
                    display: "flex;",
                    color: "green",
                    width: "20px",
                    height: "20px",
                  }}
                >
                  <Growspinner />
                </article>
                <article
                  style={{
                    display: "flex;",
                    color: "white",
                    width: "20px",
                    height: "20px",
                  }}
                >
                  <Growspinner />
                </article>
                <article
                  style={{
                    display: "flex;",
                    color: "red",
                    width: "20px",
                    height: "20px",
                  }}
                >
                  <Growspinner />
                </article>
              </div>
            </h1>
            <p>{props.parrafoslideuno}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={comidaitaliana2} alt="" />
          <Carousel.Caption>
            <h1>{props.tituloslidedos}</h1>
            <p>{props.parrafoslidedos}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={comidamediterranea2} alt="" />
          <Carousel.Caption>
            <h1>{props.tituloslidetres}</h1>
            <p>{props.parrafoslidetres}</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  )
}

export default Content
