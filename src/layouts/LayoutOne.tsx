import Footer from "../components/Footer"
import Header from "../components/Header"


interface Props {
  children: React.ReactNode;
}

function LayoutOne({children}: Props) {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
        <Header />
        <div className="container mx-auto py-10 flex-1">
          {children}
        </div>
        <Footer />
    </div>
  )
}

export default LayoutOne