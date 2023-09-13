import Header from "./Header"
import Footer from "./Footer"
import Content from "./Content"
import "bootstrap/dist/css/bootstrap.min.css"

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
        <Content />
      </div>
      <div>
        <Footer />
      </div>
    </>
  )
}

export default App
