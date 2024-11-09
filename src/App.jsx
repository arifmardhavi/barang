import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div className='text-3xl flex justify-center h-screen items-center border '>Hello World</div> */}
      <div className='flex flex-row'>
        <Sidebar />
        <Navbar />

      </div>
        
    </>
  )
}

export default App
