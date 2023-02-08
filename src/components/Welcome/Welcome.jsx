import { useParams } from 'react-router-dom'
import './Welcome.css'

function Welcome() {
    const data = useParams()
    console.log(data);
    return (
        <div>
            <div className='welcom'>
                <h1>Welcome to my web, <br/> {data.email}</h1>
            </div>
        </div>
    )
}

export default Welcome