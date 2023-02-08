import './About.css'
import Udin from '../../assets/img/udin.png'

function About() {
    return (
        <div>
            <div className='titles'>About Me</div>
            <div className='abot'>
                <div className='tex'>
                    <div className='per'>
                        My Name is Muhammad Abyan Al Ghifari, iam a student at SMKN 2 Karanganyar
                    </div>
                    <div>

                    </div>
                </div>
                <div className='pict'>
                    <img src={Udin}/>
                </div>
            </div>
        </div>
        
    )
}

export default About 
