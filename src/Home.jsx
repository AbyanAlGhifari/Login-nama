import { useParams } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Welcome from './components/Welcome/Welcome'

function Home() {
    const data = useParams()
    console.log(data);
    return (
        <div>
            <Navbar />
            <Welcome />
            <About />
            <Contact />
        </div>
    )
}

export default Home