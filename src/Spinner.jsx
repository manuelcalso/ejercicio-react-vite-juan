import Spinner from "react-bootstrap/Spinner"

export function SpinnerExp() {
  return (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  )
}

export function Growspinner() {
  return <Spinner animation="grow" />
}
