
import {Routes, Route} from "react-router-dom"
import Layout from "./layouts/Layout"
import Register from "./pages/Register"
import LayoutOne from "./layouts/LayoutOne"
import SignIn from "./pages/SignIn"
import AddHotel from "./pages/AddHotel"
import { useAppContext } from "./contexts/AppContext"
import MyHotels from "./pages/MyHotels"
import EditHotel from "./pages/EditHotel"
import Search from "./pages/Search"

function App() {
  const {isLoggedIn} = useAppContext();
  return (
    <Routes>

        {isLoggedIn && (
        <>
        <Route path="/add-hotel" element={
          <LayoutOne>
            <AddHotel />
          </LayoutOne>
        }
        />
        <Route path="/my-hotels" element={
          <LayoutOne>
            <MyHotels />
          </LayoutOne>
        }
        />
        <Route path="/edit-hotel/:hotelId" element={
          <LayoutOne>
            <EditHotel />
          </LayoutOne>
        }
        />
        </>
        )}
        <Route path="/search" element={<LayoutOne><Search /></LayoutOne>}/>
        <Route path="/" element={<Layout>hii</Layout>}/>
        <Route path="/register" element={<LayoutOne><Register/></LayoutOne>}/>
        <Route path="/sign-in" element={<LayoutOne><SignIn/></LayoutOne>}/>
    </Routes>
  )
}

export default App
