import './App.css'
import Card from './component/Card'
import Footer from './component/Footer'
import Navbar from './component/Navbar'

function App() {

  return (
    <>
      <Navbar />
      <div className='cards'>
      <Card title = "Card1" description = "Card1 desc" />      {/* props */}
      <Card title = "Card2" description = "Card2 desc" />      {/* props */}
      <Card title = "Card3" description = "Card3 desc" />      {/* props */}
      <Card title = "Card4" description = "Card4 desc" />      {/* props */}
      </div>
      <Footer />
    </>
  )
}

export default App
