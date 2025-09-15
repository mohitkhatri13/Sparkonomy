import './App.css'
import Main from './Components/Main'
import Navbar from './Components/Navbar'
function App() {
  

  return (
    <div className='bg-pink-100  h-full w-full  flex  justify-center'>
    <div className='   w-[390px] mt-3   flex flex-col items-center justify-center'>
     <Navbar/>
     <Main/>
      
    </div>
    </div>
  )
}

export default App
