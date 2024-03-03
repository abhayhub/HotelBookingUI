
import {Routes, Route} from "react-router-dom"
import Layout from "./layouts/Layout"
import Register from "./pages/Register"
import LayoutOne from "./layouts/LayoutOne"


function App() {

  return (
    <Routes>
        <Route path="/" element={<Layout>hii</Layout>}/>
        <Route path="/register" element={<LayoutOne><Register/></LayoutOne>}/>
    </Routes>
  )
}

export default App
