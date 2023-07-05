import "./errorpage.css"
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className="error">
        <h2>Can't seem to find that page...</h2>
        <p style={{opacity: ".8"}}>Go back <Link className="home-link" to="/">Home</Link></p>
    </div>
  )
}

export default ErrorPage