import Header from "./Header"
import Footer from "./Footer"
import Content from "./Content"
import { Onecard, Secondcard } from "./Card"
import "bootstrap/dist/css/bootstrap.min.css"
import { SpinnerExp, Growspinner } from "./Spinner"
import Acordion from "./Acordion"

function App() {
  const metadata = {
    title: "Mi primer app",
    subtitle: "Este es un parrafo",
  }
  return (
    <>
      <div>
        <Header title={metadata.title} subtitle={metadata.subtitle} />
      </div>
      <div>
        <SpinnerExp />
        <Growspinner />
      </div>
      <div>
        <Content />
      </div>
      <div id="Card">
        <Onecard />
        <Secondcard />
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
