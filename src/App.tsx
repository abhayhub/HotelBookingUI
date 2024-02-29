
import {Routes, Route} from "react-router-dom"
import Layout from "./layouts/Layout"


function App() {

  return (
    <Routes>
        <Route path="/" element={<Layout>helll ya baby</Layout>}/>
    </Routes>
  )
}

export default App
