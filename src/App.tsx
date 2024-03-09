
import {Routes, Route} from "react-router-dom"
import Layout from "./layouts/Layout"
import Register from "./pages/Register"
import LayoutOne from "./layouts/LayoutOne"
import SignIn from "./pages/SignIn"
import AddHotel from "./pages/AddHotel"
import { useAppContext } from "./contexts/AppContext"

function App() {
  const {isLoggedIn} = useAppContext();
  return (
    <Routes>

        {isLoggedIn && (<>
        <Route path="/add-hotel" element={
          <LayoutOne>
            <AddHotel />
          </LayoutOne>
        }
        />
        </>
        )}
        <Route path="/" element={<Layout>hii</Layout>}/>
        <Route path="/register" element={<LayoutOne><Register/></LayoutOne>}/>
        <Route path="/sign-in" element={<LayoutOne><SignIn/></LayoutOne>}/>
    </Routes>
  )
}

export default App
