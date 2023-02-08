import config from './config'
import { GoogleAuthProvider, FacebookAuthProvider, signInWithPopup } from 'firebase/auth'
import './App.css'
import { useNavigate } from 'react-router-dom'

function App() {
  const Navigate = useNavigate()
  const LoginGoogle = async () => {
    const data = await signInWithPopup(config, new GoogleAuthProvider())
    Navigate(`/Home/${data.user.email}`)
  }
  // const LoginFacebook = async () => {
  //   const data = await signInWithPopup(config, new FacebookAuthProvider())
  //   Navigate(`/Home/${data.user.displayName}`)
  // }
  return (
    <div  className='kotak'>
      <h1>Login With Platform by Abyan</h1>
      <button onClick={LoginGoogle}>Login With Google</button>
      {/* <button onClick={LoginFacebook}>Login With Facebook</button> */}
    </div>
  )
}

export default App
