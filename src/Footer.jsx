import juanP from "./../src/assets/juanarboles.jpg"
import juanA from "./../src/assets/juanpalmera.jpg"

import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"

function Footer() {
  return (
    <>
      <Navbar className="footerr">
        <Container>
          <Navbar.Brand href="#home">Brand link</Navbar.Brand>
        </Container>
      </Navbar>
      <br />
      <Navbar className="footerr">
        <Container>
          <Navbar.Brand>Brand text</Navbar.Brand>
        </Container>
      </Navbar>
      <br />
      <Navbar className="footerr">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={juanP}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
      <br />
      <Navbar className="footerr">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={juanA}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            React Bootstrap
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Footer
