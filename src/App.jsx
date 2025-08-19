import Navbar from './components/Navbar/Navbar'
import Router from './router/Router'

const App = () => {
  return (
    <div className='container w-full h-fit relative'>
      <Navbar/>
      <Router/>
    </div>
  )
}

export default App