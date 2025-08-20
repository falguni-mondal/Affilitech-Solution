import LoadingScreen from './components/LoadingScreen/LoadingScreen'
import Navbar from './components/Navbar/Navbar'
import Router from './router/Router'

const App = () => {
  return (
    <div className='container w-full overflow-x-hidden h-fit relative'>
      <LoadingScreen/>
      <Navbar/>
      <Router/>
    </div>
  )
}

export default App