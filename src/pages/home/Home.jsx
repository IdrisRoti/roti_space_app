import {Link} from 'react-router-dom'
import "./home.css"

const Home = () => {
  return (
   <main className="home">
    <div className='container grid'>
        <div className="left">
            <h2>so you want to travel to,</h2>
            <h1>space</h1>
            <p> Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
        </div>
        <Link to="destination " className='link'><div className="explore">EXPLORE</div></Link>
    </div>
   </main>
  )
}

export default Home;