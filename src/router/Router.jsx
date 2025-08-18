import { Route, Routes } from "react-router-dom"
import Homepage from "../components/pages/Homepage/Homepage"

const Router = () => {
  return (
    <Routes>
        <Route path="/" element={<Homepage />}/>
    </Routes>
  )
}

export default Router