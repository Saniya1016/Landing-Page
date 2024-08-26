import Header from "./Components/Header"
import Body from "./Components/Body"
import Footer from "./Components/Footer"
import Navbar from "./Components/Navbar"

function App() {
  

  return (
    <>
      <div className="flex flex-col min-h-screen bg-black">
        <Navbar/>
        <Header/>
        <Body/>
        <Footer/>

      </div>
    </>
  )
}

export default App
