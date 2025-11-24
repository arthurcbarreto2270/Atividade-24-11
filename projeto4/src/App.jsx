import './App.css'
import Header from './components/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import DuvidasPage from './pages/DuvidasPage'
import Footer from './components/Footer'
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css';
function App() {

  return (
    <Router>
     <Header/>
     <main>
      <Routes>  
        <Route path='/duvidas' element={<DuvidasPage/>}/>
      </Routes>
     </main>
    <Footer/>
    <ToastContainer position='top-right' autoClose={3000}/>
    </Router>
      
  )
}

export default App
